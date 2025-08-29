import React from 'react'
import Link from 'next/link'

// Sample blog data - this would come from a database in a real application
const blogPosts = [
  {
    id: 1,
    title: "Understanding Your Family's Origins",
    excerpt: "Discover techniques to research your family's ancestral history and geographic origins.",
    date: "2023-10-15",
    author: "Jane Smith",
    category: "Research",
    readTime: "6 min read"
  },
  {
    id: 2,
    title: "Preserving Family Stories Through Generations",
    excerpt: "Learn how to document and preserve the valuable stories told by your elders before they're lost.",
    date: "2023-11-02",
    author: "Robert Johnson",
    category: "Documentation",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Using DNA Testing for Genealogy Research",
    excerpt: "A comprehensive guide on how to use DNA testing services to enhance your family tree research.",
    date: "2023-12-10",
    author: "Maria Garcia",
    category: "Technology",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Creating a Meaningful Family Reunion",
    excerpt: "Tips and ideas for organizing a memorable family reunion that bridges generations.",
    date: "2024-01-05",
    author: "David Williams",
    category: "Events",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Overcoming Brick Walls in Genealogy Research",
    excerpt: "Strategies to break through common obstacles when researching difficult-to-trace ancestors.",
    date: "2024-02-18",
    author: "Sarah Miller",
    category: "Research",
    readTime: "9 min read"
  }
];

export default function BlogPage() {
  return (
    <div className="font-sans min-h-screen bg-amber-50 dark:bg-amber-950 text-amber-950 dark:text-amber-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-amber-400 dark:from-amber-300 dark:to-amber-500 bg-clip-text text-transparent">
            Family Tree Blog
          </h1>
          <p className="text-lg text-amber-800 dark:text-amber-200 mb-6">
            Stories, tips, and insights about family history
          </p>
          <div className="flex justify-center mb-8">
            <Link 
              href="/" 
              className="mr-4 bg-transparent border border-amber-600 dark:border-amber-400 text-amber-600 dark:text-amber-400 hover:bg-amber-600/10 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Home
            </Link>
            <Link 
              href="/tree" 
              className="bg-transparent border border-amber-600 dark:border-amber-400 text-amber-600 dark:text-amber-400 hover:bg-amber-600/10 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Family Tree
            </Link>
          </div>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg mb-8">
            Create New Post
          </button>
        </header>

        <main>
          <div className="grid grid-cols-1 gap-8">
            {blogPosts.map(post => (
              <article 
                key={post.id} 
                className="bg-white dark:bg-amber-900/40 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="inline-block bg-amber-100 dark:bg-amber-800 text-amber-800 dark:text-amber-200 text-sm px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-amber-600 dark:text-amber-400 text-sm">
                    {post.date}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-amber-800 dark:text-amber-300">
                  {post.title}
                </h2>
                <p className="text-amber-700 dark:text-amber-200 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 dark:text-amber-400 text-sm">
                    By {post.author} • {post.readTime}
                  </span>
                  <button className="bg-transparent border border-amber-600 dark:border-amber-400 text-amber-600 dark:text-amber-400 hover:bg-amber-600/10 font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-transparent border border-amber-600 dark:border-amber-400 text-amber-600 dark:text-amber-400 hover:bg-amber-600/10 font-medium py-3 px-6 rounded-lg transition-colors duration-300">
              Load More Posts
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}