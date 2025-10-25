import React from 'react';
import { useNavigate } from 'react-router-dom'; // ← import this
import img1 from '/assets/home_1.jpeg' 

export default function PhotographyLanding() {
  const navigate = useNavigate(); // ← initialize navigation

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4 overflow-hidden">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Content */}
        <div className="text-white space-y-8 px-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
            
          </h1>
          
          <div className="space-y-3 text-gray-300 text-lg italic leading-relaxed" style={{fontFamily: 'Georgia, serif'}}>
            <p>Lorem ipsum dolor</p>
            <p>consectetur adipiscing elit,</p>
            <p>ex sapien</p>
            <p>vitae pellentesque sem</p>
            <p>In id cursus mi pretium</p>
            <p>tellus duis convallis. Tempus</p>
            <p>eu aenean sed diam urna</p>
            <p>Pulvinar</p>
            <p>lacus nec metus bibendum</p>
            <p>egestas.</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 items-center">
            {/* (keep all your SVG icons unchanged) */}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => navigate('/home')} // ← navigate to /home on click
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded transition-all transform hover:scale-105 shadow-lg"
          >
            Beyond the Lense
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="relative md:translate-x-12 lg:translate-x-24">
          <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg overflow-hidden shadow-2xl aspect-[3/4]">
            <img 
            
              src={img1} 
            //   "/assets/home_1.jpeg" 
              alt="Photography" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
