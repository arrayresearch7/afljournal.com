import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 text-center text-sm text-slate-500">
      <p>
        © {new Date().getFullYear()} Applied Finance Insights · Independent
        Academic Platform
      </p>
    </footer>
  );
};

export default Footer;
