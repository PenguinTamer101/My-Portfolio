import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 md:py-8 border-t border-cyan-800 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-xs">
          <div className="text-gray-400 text-center md:text-left">
            © 2025 SALMA_HAJIAN // Built with Next.js & Tailwind CSS
          </div>
          <div className="text-cyan-400 text-center md:text-right">
            STATUS: ONLINE // LAST_UPDATE: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </footer>
  );
}