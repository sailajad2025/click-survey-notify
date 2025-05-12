
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600">© {new Date().getFullYear()} ZenTask. All rights reserved.</p>
      </div>
    </footer>
  );
};
