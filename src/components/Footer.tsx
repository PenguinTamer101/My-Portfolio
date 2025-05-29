import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-cyan-800 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center text-xs">
          <div className="text-gray-400">
            © 2025 SALMA_HAJIAN // Built with Next.js & Tailwind CSS
          </div>
          <div className="text-cyan-400">
            STATUS: ONLINE // LAST_UPDATE: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </footer>
  );
}