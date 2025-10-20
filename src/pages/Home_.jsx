import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Home_ = () => {
  const slides = [
    { title: 'Simplicity', subtitle: 'is complex', cta: 'View Project' },
    { title: 'Design is', subtitle: 'a process', cta: 'View Project' },
    { title: 'Aesthetic is', subtitle: 'a decision', cta: 'View Project' },
    { title: 'Style is', subtitle: 'everything', cta: 'View Project' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="h-screen relative">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{ delay: 3000 }}
          className="h-full"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className="relative">
              <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                <div className="text-center">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold text-gray-900 mb-4"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-light text-gray-600 mb-8"
                  >
                    {slide.subtitle}
                  </motion.h2>
                  <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                  >
                    {slide.cta}
                  </motion.button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Featured Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Featured Works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: item * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    // src={`https://picsum.photos/400/400?random=${item}`}
                    // src={`public//assets//Screenshot_14-10-2025_154224_www.instagram.com_${item}.jpeg'}
                    src={`public//assets//home_${item}.jpeg`}
                    // src={`public//assets//Screenshot_14-10-2025_154224_www.instagram.com_${item}.jpeg'}
                    alt={`Project ${item}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                      View Project
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Project Title {item}</h3>
                <p className="text-gray-600">Category</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We are a creative studio specializing in minimalist design and innovative digital experiences.
              </p>
              <a
                href="/about"
                className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Learn More
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://picsum.photos/600/400?random=10"
                alt="About us"
                className="w-full h-80 object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;