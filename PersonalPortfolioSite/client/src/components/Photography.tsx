import photo1 from "@assets/tp1_1750881479435.jpg";
import photo2 from "@assets/tp2_1750881479434.jpg";
import photo3 from "@assets/tp3_1750881479435.jpg";

const photos = [
  {
    src: photo1,
    alt: "Black and white performance photography"
  },
  {
    src: photo2,
    alt: "Black and white portrait of performer with microphone"
  },
  {
    src: photo3,
    alt: "Black and white atmospheric performance photograph"
  }
];

export function Photography() {
  return (
    <section id="photography" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Photography</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Capturing moments through the lens - my passion for black and white photography
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Photography allows me to see the world from different perspectives and capture the essence of emotions and moments. 
            My preference for black and white imagery stems from its ability to strip away distractions and focus on the raw emotion and composition.
          </p>
        </div>
      </div>
    </section>
  );
}
