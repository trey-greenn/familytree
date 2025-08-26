import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-amber-50 dark:bg-amber-950 text-amber-950 dark:text-amber-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-amber-400 dark:from-amber-300 dark:to-amber-500 bg-clip-text text-transparent">
            Family Tree Builder
          </h1>
          <p className="text-lg md:text-xl text-amber-800 dark:text-amber-200">
            Create, explore, and share your family history
          </p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-6 text-amber-800 dark:text-amber-300">
              Discover Your Roots
            </h2>
            <p className="mb-6 text-amber-700 dark:text-amber-200">
              Our easy-to-use chat system helps you build a comprehensive family tree by answering simple questions about your relatives and ancestors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                Start Building
              </button>
              <button className="bg-transparent border border-amber-600 dark:border-amber-400 text-amber-600 dark:text-amber-400 hover:bg-amber-600/10 font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[300px] bg-white dark:bg-amber-900/40 rounded-xl shadow-lg overflow-hidden p-4">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-600"></div>
                  </div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="text-amber-950 dark:text-amber-100 mb-3 text-sm">
                    <span className="text-amber-500 font-bold">Bot:</span> Hi! 👋 We're building your family tree. I'll ask you a few quick questions... Ready?
                  </div>
                  <div className="text-amber-950 dark:text-amber-100 mb-3 text-sm">
                    <span className="text-amber-600 font-bold">You:</span> Yes
                  </div>
                  <div className="text-amber-950 dark:text-amber-100 mb-3 text-sm">
                    <span className="text-amber-500 font-bold">Bot:</span> What's your full name?
                  </div>
                  <div className="text-amber-950 dark:text-amber-100 mb-3 text-sm">
                    <span className="text-amber-600 font-bold">You:</span> Sarah Johnson
                  </div>
                  <div className="text-amber-950 dark:text-amber-100 mb-3 text-sm">
                    <span className="text-amber-500 font-bold">Bot:</span> What's your date of birth?
                  </div>
                  <div className="text-amber-950 dark:text-amber-100 mb-3 text-sm">
                    <span className="text-amber-600 font-bold">You:</span> 05/12/1985
                  </div>
                  <div className="text-amber-950 dark:text-amber-100 text-sm">
                    <span className="text-amber-500 font-bold">Bot:</span> What is your mother's full name, birth year, and birthplace?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center text-amber-800 dark:text-amber-300">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Answer Questions",
                description: "Respond to simple, guided questions about your family members and their history.",
                icon: "🗣️"
              },
              {
                title: "Build Your Tree",
                description: "Watch as your family tree grows with each piece of information you provide.",
                icon: "🌳"
              },
              {
                title: "Share & Explore",
                description: "Share your family tree with relatives or keep exploring your ancestry.",
                icon: "🔍"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-amber-900/40 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-medium mb-2 text-amber-700 dark:text-amber-300">{item.title}</h3>
                <p className="text-amber-600 dark:text-amber-200">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-6 text-amber-800 dark:text-amber-300">
            Ready to Start Your Journey?
          </h2>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
            Begin Now
          </button>
        </section>
      </div>

      <footer className="mt-24 py-8 bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-200">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Family Tree Builder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}