import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CircularNav = ({ isOpen, onClose }) => {
  const navItems = [
    { name: 'Home', path: '/', angle: 0 },
    { name: 'About', path: '/about', angle: 90 },
    { name: 'Works', path: '/portfolio', angle: 180 },
    { name: 'Contact', path: '/contact', angle: 270 },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Circular Menu */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="relative w-64 h-64">
              {/* Center Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-semibold shadow-lg">
                  Menu
                </div>
              </div>

              {/* Nav Items in Circle */}
              {navItems.map((item, index) => {
                const angle = (index * 360) / navItems.length;
                const radian = (angle * Math.PI) / 180;
                const radius = 100;
                const x = radius * Math.cos(radian);
                const y = radius * Math.sin(radian);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-medium shadow-lg hover:bg-gray-100 transition-colors"
                    style={{
                      left: `calc(50% + ${x}px - 24px)`,
                      top: `calc(50% + ${y}px - 24px)`,
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CircularNav;
