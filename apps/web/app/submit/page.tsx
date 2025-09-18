'use client'; // Mark as client component for interactivity

import Link from 'next/link';
import { useState } from 'react';

export default function Submit() {
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission for code snippet
    alert('Code Snippet Submitted!\n' + code);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">Simple LMS</h1>
          <div className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/courses" className="hover:underline">Courses</Link>
            <Link href="/submit" className="hover:underline">Submit</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Submit Code Snippet</h2>
        <p className="mb-4">Try our Code Snippet Challenge feature!</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            className="w-full p-4 border rounded"
            rows={5}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your code..."
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
