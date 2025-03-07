// MediaFeatureCard.jsx
import React, { useState } from 'react';
import { 
  FileBox, 
  Settings, 
  Palette, 
  PlaySquare, 
  BarChart3, 
  TrendingUp 
} from 'lucide-react';

const iconMap = {
  'media-library': FileBox,
  'automated-process': Settings,
  'branding': Palette,
  'video-player': PlaySquare,
  'analytics': BarChart3,
  'pipeline': TrendingUp
};

const MediaFeatureCard = ({ 
  title, 
  iconType, 
  features, 
  className = "" 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Get the appropriate icon component
  const IconComponent = iconMap[iconType] || FileBox;
  
  return (
    <div 
      className={`bg-white rounded-xl p-6 shadow-sm transition-all duration-300 ${className}`}
      style={{ 
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-lg ${isHovered ? 'bg-blue-100' : 'bg-gray-100'}`}>
          <IconComponent 
            size={24} 
            className={`transition-colors duration-300 ${isHovered ? 'text-blue-600' : 'text-gray-600'}`} 
          />
        </div>
        <h3 className="text-lg font-medium ml-3">{title}</h3>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="mt-1 mr-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M13.3332 4L5.99984 11.3333L2.6665 8" 
                  stroke={isHovered ? "#3B82F6" : "#10B981"} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediaFeatureCard;