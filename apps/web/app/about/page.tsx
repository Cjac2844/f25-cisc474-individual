import Link from 'next/link';

export default function About() {
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
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="text-lg">This site supports learning through courses and code submissions.</p>
      </main>
    </div>
  );
}
