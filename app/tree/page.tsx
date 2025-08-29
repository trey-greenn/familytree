import FamilyTreeFlow from './familyTreeFlow';
import Link from 'next/link';

export default function TreePage() {
  return (
    <div className="font-sans min-h-screen bg-amber-50 dark:bg-amber-950 text-amber-950 dark:text-amber-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-amber-400 dark:from-amber-300 dark:to-amber-500 bg-clip-text text-transparent">
            Family Tree Editor
          </h1>
          <p className="text-lg text-amber-800 dark:text-amber-200">
            Create and edit your family connections
          </p>
        </header>
        <div className="flex justify-center gap-4 mb-16">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
            Add Family Member
          </button>
          <button className="bg-transparent border border-amber-600 dark:border-amber-400 text-amber-600 dark:text-amber-400 hover:bg-amber-600/10 font-medium py-3 px-6 rounded-lg transition-colors duration-300">
            Save Tree
          </button>
          <Link href="/bio" className="bg-transparent border border-amber-600 dark:border-amber-400 text-amber-600 dark:text-amber-400 hover:bg-amber-600/10 font-medium py-3 px-6 rounded-lg transition-colors duration-300">
            Biography
          </Link>
        </div>
        <main className="bg-white dark:bg-amber-900/40 p-6 rounded-xl shadow-lg mb-12">
          <div className="h-[600px] w-full">
            <FamilyTreeFlow />
          </div>
        </main>

       
      </div>
    </div>
  );
}