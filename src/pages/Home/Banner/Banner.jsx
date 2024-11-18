import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Optional if you want navigation arrows

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function Banner() {
  return (
    <div className="banner relative w-full h-screen bg-black">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="h-full"
      >
        {/* Slide 1 - Superhero 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/images/superhero1.jpg')` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex flex-col justify-center items-center h-full text-center text-white px-6">
              <h1 className="text-6xl font-extrabold mb-4 animate-fade-in">Save the World!</h1>
              <p className="text-xl md:text-3xl animate-slide-up">Discover our collection of superhero action figures.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Superhero 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/images/superhero2.jpg')` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex flex-col justify-center items-center h-full text-center text-white px-6">
              <h1 className="text-6xl font-extrabold mb-4 animate-fade-in">Unleash Your Power</h1>
              <p className="text-xl md:text-3xl animate-slide-up">Find your favorite superhero action toys here!</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Superhero 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/images/superhero3.jpg')` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex flex-col justify-center items-center h-full text-center text-white px-6">
              <h1 className="text-6xl font-extrabold mb-4 animate-fade-in">Join the Battle!</h1>
              <p className="text-xl md:text-3xl animate-slide-up">Collect, display, and play with the mightiest heroes.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* More slides can be added similarly */}
      </Swiper>
    </div>
  );
}
