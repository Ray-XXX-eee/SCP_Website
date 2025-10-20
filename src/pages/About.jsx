import { motion } from 'framer-motion';
import HeroSection from '../component/HeroSection';

const About = () => {
  return (
    <div className="min-h-screen">
      <HeroSection 
        title="About Us"
        subtitle="Crafting exceptional digital experiences through minimalist design"
      />

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://picsum.photos/600/400?random=15"
                alt="Our story"
                className="w-full h-80 object-cover rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, Roundex is a creative studio dedicated to crafting exceptional digital experiences. 
                We believe in the power of simplicity and the beauty of minimalist design.
              </p>
              <p className="text-lg text-gray-600">
                Our team of passionate designers and developers works closely with clients to bring their visions to life, 
                creating solutions that are both aesthetically pleasing and functionally superior.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Our Values
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', desc: 'Pushing boundaries and exploring new possibilities' },
              { title: 'Quality', desc: 'Delivering excellence in every project' },
              { title: 'Collaboration', desc: 'Working together to achieve great results' },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Meet the Team
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <motion.div
                key={member}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: member * 0.1 }}
                className="text-center"
              >
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={`https://picsum.photos/300/300?random=${20 + member}`}
                    alt={`Team Member ${member}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Team Member {member}</h3>
                <p className="text-gray-600">Position</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;