import { motion } from 'framer-motion';

const PortfolioCard = ({ project, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => onClick(project)}
      className="cursor-pointer group bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
            View Project
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600">{project.category}</p>
      </div>
    </motion.div>
  );
};

