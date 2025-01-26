import React from 'react';

export const BottleGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="bg-white shadow rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Image {item}</span>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg">Water Bottle {item}</h3>
            <p className="text-gray-600">$19.99</p>
          </div>
        </div>
      ))}
    </div>
  );
};
