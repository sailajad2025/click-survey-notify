
import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600">© {currentYear} ZenTask. All rights reserved.</p>
      </div>
    </footer>
  );
};
