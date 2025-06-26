import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import { contactMessages } from '../shared/schema.js';

neonConfig.webSocketConstructor = ws;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle({ client: pool });

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'Name, email, and message are required' 
        });
      }

      const [newMessage] = await db
        .insert(contactMessages)
        .values({
          name,
          email,
          message,
          createdAt: new Date()
        })
        .returning();

      res.status(200).json({ 
        success: true, 
        message: 'Message sent successfully!',
        data: newMessage
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to send message. Please try again.' 
      });
    }
  } else if (req.method === 'GET') {
    try {
      const messages = await db.select().from(contactMessages);
      res.status(200).json({ success: true, data: messages });
    } catch (error) {
      console.error('Get messages error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to retrieve messages' 
      });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}