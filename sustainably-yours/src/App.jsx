import React from 'react';
import { BottleGallery } from './components/BottleGallery';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">Sustainably Yours</h1>
          <p className="text-gray-600">Reimagine reusable water bottles for a greener planet.</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <BottleGallery />
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Sustainably Yours. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
