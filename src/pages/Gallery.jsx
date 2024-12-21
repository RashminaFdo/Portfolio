import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/shared/SEO';
import PropTypes from 'prop-types';

// Import all photos
import photo1 from '../assets/images/gallery/photo1.jpg';
import photo2 from '../assets/images/gallery/photo2.jpg';
import photo3 from '../assets/images/gallery/photo3.jpg';
import photo4 from '../assets/images/gallery/photo4.jpg';
import photo5 from '../assets/images/gallery/photo5.jpg';
import photo6 from '../assets/images/gallery/photo6.jpg';
import photo7 from '../assets/images/gallery/photo7.jpg';
import photo8 from '../assets/images/gallery/photo8.jpg';
import photo9 from '../assets/images/gallery/photo9.jpg';
import photo10 from '../assets/images/gallery/photo10.jpg';
import photo11 from '../assets/images/gallery/photo11.jpg';
import photo12 from '../assets/images/gallery/photo12.jpg';
import photo13 from '../assets/images/gallery/photo13.jpg';
import photo14 from '../assets/images/gallery/photo14.jpg';
import photo15 from '../assets/images/gallery/photo15.jpg';
import photo16 from '../assets/images/gallery/photo16.jpg';
import photo17 from '../assets/images/gallery/photo17.jpg';
import photo18 from '../assets/images/gallery/photo18.jpg';

// Separate Modal component with PropTypes
const Modal = ({ photo, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
  >
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      onClick={(e) => e.stopPropagation()}
      className="relative max-w-7xl mx-auto cursor-default"
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className={`rounded-lg max-h-[85vh] ${photo.isPanorama ? 'w-full' : 'h-full'} object-contain`}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 rounded-b-lg">
        <h3 className="text-white text-xl mb-2">{photo.alt}</h3>
        <div className="flex flex-wrap gap-2">
          {photo.hashtags.map((tag, index) => (
            <span
              key={index}
              className="text-theme-green text-sm bg-light-navy px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-theme-green bg-black/50 rounded-full p-2"
        aria-label="Close modal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  </motion.div>
);

// Add PropTypes for Modal component
Modal.propTypes = {
  photo: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
    isPanorama: PropTypes.bool
  }).isRequired,
  onClose: PropTypes.func.isRequired
};

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    {
      src: photo1,
      alt: "Sunset at Bambarakanda Falls - Sri Lanka's Highest Waterfall",
      hashtags: ["#Bambarakanda", "#WaterfallSL", "#SunsetMagic", "#HighestFalls", "#WanderlustSL"],
      isPanorama: false
    },
    {
      src: photo2,
      alt: "Sambar Deer in Morning Mist - Horton Plains",
      hashtags: ["#Wildlife", "#SambarDeer", "#HortonPlains", "#SriLanka", "#WildlifeSL"],
      isPanorama: false
    },
    {
      src: photo3,
      alt: "Brown Wood Owl at Dawn",
      hashtags: ["#BrownWoodOwl", "#SriLankanBirds", "#WildlifePhotography", "#NightHunter", "#OwlsOfAsia"],
      isPanorama: true
    },
    {
      src: photo4,
      alt: "Tranquil Waters of Kandy Lake",
      hashtags: ["#KandyLake", "#KandaUdaWalawa", "#Heritage", "#CulturalTriangle", "#SerenityNow"],
      isPanorama: true
    },
    {
      src: photo5,
      alt: "Reflections on Sacred Waters - Kandy Lake",
      hashtags: ["#KandyVibes", "#LakeView", "#TemplesByTheLake", "#CulturalCapital", "#MirrorReflections"],
      isPanorama: true
    },
    {
      src: photo6,
      alt: "Colombo Skyline from Lotus Tower Summit",
      hashtags: ["#LotusTower", "#ColomboSkyline", "#CityViews", "#UrbanLandscape", "#SkyHigh"],
      isPanorama: true
    },
    {
      src: photo7,
      alt: "Vesak Celebrations at Beira Lake",
      hashtags: ["#VesakSL", "#BeiraLake", "#BuddhistFestival", "#LanternFestival", "#ColomboNights"],
      isPanorama: true
    },
    {
      src: photo8,
      alt: "Rolling Hills of Ambewela - Little New Zealand",
      hashtags: ["#Ambewela", "#LittleNewZealand", "#DairyFarm", "#MistyMorning", "#GreenPastures"],
      isPanorama: true
    },
    {
      src: photo9,
      alt: "Misty Morning in Nuwara Eliya - Little England",
      hashtags: ["#NuwaraEliya", "#LittleEngland", "#HillCountry", "#MistyMornings", "#TeaCountry"],
      isPanorama: true
    },
    {
      src: photo10,
      alt: "Dawn at Lipton Seat - Tea Plantation Vista",
      hashtags: ["#LiptonSeat", "#Dambatenne", "#TeaEstate", "#SriLankanTea", "#Haputale"],
      isPanorama: true
    },
    {
      src: photo11,
      alt: "Golden Hour over Nugegoda Skyline",
      hashtags: ["#Nugegoda", "#UrbanSunset", "#CityViews", "#SriLanka", "#GoldenHour"],
      isPanorama: true
    },
    {
      src: photo12,
      alt: "Serenity at Hiyare Reservoir",
      hashtags: ["#Hiyare", "#Galle", "#Reservoir", "#SouthernVibes", "#NatureSL"],
      isPanorama: true
    },
    {
      src: photo13,
      alt: "Coastal Sunset at Marawila Beach",
      hashtags: ["#Marawila", "#CoastalSL", "#BeachVibes", "#WestCoast", "#OceanSunset"],
      isPanorama: true
    },
    {
      src: photo14,
      alt: "Urban Sunset Symphony - Nugegoda",
      hashtags: ["#Nugegoda", "#CityScape", "#UrbanVibes", "#SunsetColors", "#SriLanka"],
      isPanorama: true
    },
    {
      src: photo15,
      alt: "Heritage Railway - Kandy Station at Dawn",
      hashtags: ["#KandyStation", "#RailwayHeritage", "#ColonialArchitecture", "#TrainSpotting", "#VintageVibes"],
      isPanorama: true
    },
    {
      src: photo16,
      alt: "Painted Skies over Nugegoda",
      hashtags: ["#Nugegoda", "#SkyArt", "#CityLife", "#EveningSky", "#UrbanLandscape"],
      isPanorama: true
    },
    {
      src: photo17,
      alt: "Tea Carpets - View from Lipton Seat",
      hashtags: ["#LiptonSeat", "#TeaPlantation", "#Haputale", "#TeaEstate", "#SriLankanTea"],
      isPanorama: true
    },
    {
      src: photo18,
      alt: "Misty Morning at Horton Plains",
      hashtags: ["#HortonPlains", "#SriLanka", "#Sunrise", "#Nature", "#Wilderness"],
      isPanorama: false
    }
  ];

  return (
    <>
      <SEO
        title="Photography Gallery - Rashmina Fernando"
        description="Explore my photography collection featuring nature, wildlife, and landscape photography."
        name="Rashmina Fernando"
        type="website"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-lightest-slate">
          Photography Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg 
                       hover:shadow-xl transition-all duration-300 cursor-pointer
                       bg-white dark:bg-light-navy"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm text-white p-2 text-sm">
                {photo.alt}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedPhoto && (
            <Modal
              photo={selectedPhoto}
              onClose={() => setSelectedPhoto(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Gallery;