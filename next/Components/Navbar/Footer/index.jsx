import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20 py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} MyWebsite. Create Next App.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
