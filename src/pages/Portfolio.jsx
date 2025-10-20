import { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: 'Brand Identity', category: 'Branding', image: 'https://picsum.photos/400/400?random=20' },
    { id: 2, title: 'Website Design', category: 'Web Design', image: 'https://picsum.photos/400/400?random=21' },
    { id: 3, title: 'Mobile App', category: 'App Design', image: 'https://picsum.photos/400/400?random=22' },
    { id: 4, title: 'Packaging', category: 'Product', image: 'https://picsum.photos/400/400?random=23' },
    { id: 5, title: 'Editorial', category: 'Print', image: 'https://picsum.photos/400/400?random=24' },
    { id: 6, title: 'Motion', category: 'Animation', image: 'https://picsum.photos/400/400?random=25' },
  ];

  return (
    <div className="pt-16">
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            Our Works
          </motion.h1>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <div className="aspect-square rounded-full overflow-hidden mb-4 bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-center">{project.title}</h3>
                <p className="text-gray-600 text-center">{project.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="float-right text-2xl"
            >
              ×
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="text-gray-600 mb-4">{selectedProject.category}</p>
            <p className="text-lg">
              A comprehensive project showcasing our design expertise and creative solutions.
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;