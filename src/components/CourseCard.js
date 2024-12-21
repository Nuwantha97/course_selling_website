import React from 'react';
import { Clock, Users, PlayCircle } from 'lucide-react';

const CourseCard = ({
  title = "Introduction to React",
  description = "Learn the fundamentals of React including components, props, and state management",
  thumbnail = "/api/placeholder/400/250",
  instructor = "Jane Doe",
  duration = "6 hours",
  students = 234,
  progress = 0,
  lessons = 12,
  price = 49.99,
  category = "Programming"
}) => {
  return (
    <div className="w-full max-w-sm rounded-lg shadow-md hover:shadow-lg transition-all bg-white">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <span className="absolute top-4 right-4 bg-white/90 text-black px-2 py-1 rounded-full text-sm">
          {category}
        </span>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-xl leading-tight">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          
          <div className="flex items-center text-sm text-gray-500 space-x-4" style={{display: 'flex'}}>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {duration}
            </div>
            <div className="flex items-center">
              <PlayCircle className="w-4 h-4 mr-1" />
              {lessons} lessons
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {students}
            </div>
          </div>

        </div>
      </div>

      <div className="p-6 pt-0 flex items-center justify-between border-t">
        <div className="font-semibold">${price}</div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default CourseCard;