'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const BioPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    birthplace: '',
    occupation: '',
    education: '',
    significantLife: '',
    hobbies: '',
    familyStories: '',
    personalAchievements: '',
    values: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Future functionality: save data to database
  };

  return (
    <div className="font-sans min-h-screen bg-amber-50 dark:bg-amber-950 text-amber-950 dark:text-amber-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-amber-400 dark:from-amber-300 dark:to-amber-500 bg-clip-text text-transparent">
            Family Member Biography
          </h1>
          <p className="text-lg text-amber-800 dark:text-amber-200">
            Share your life story for the family tree
          </p>
        </header>

        <div className="bg-white dark:bg-amber-900/40 p-6 rounded-xl shadow-lg mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <label className="block text-amber-800 dark:text-amber-200 font-medium">
                Full Name
                <input 
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-amber-50 dark:bg-amber-900 border border-amber-300 dark:border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </label>
              
              <label className="block text-amber-800 dark:text-amber-200 font-medium">
                Birth Date
                <input 
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-amber-50 dark:bg-amber-900 border border-amber-300 dark:border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </label>
              
              <label className="block text-amber-800 dark:text-amber-200 font-medium">
                Where were you born?
                <input 
                  type="text"
                  name="birthplace"
                  value={formData.birthplace}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-amber-50 dark:bg-amber-900 border border-amber-300 dark:border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="City, State/Province, Country"
                />
              </label>
              
              <label className="block text-amber-800 dark:text-amber-200 font-medium">
                What is/was your occupation?
                <input 
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-amber-50 dark:bg-amber-900 border border-amber-300 dark:border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your career or occupation"
                />
              </label>
              
              <label className="block text-amber-800 dark:text-amber-200 font-medium">
                What is your educational background?
                <input 
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-amber-50 dark:bg-amber-900 border border-amber-300 dark:border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Schools attended, degrees earned"
                />
              </label>
              
              <label className="block text-amber-800 dark:text-amber-200 font-medium">
                What are some significant moments in your life?
                <textarea 
                  name="significantLife"
                  value={formData.significantLife}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full px-4 py-3 bg-amber-50 dark:bg-amber-900 border border-amber-300 dark:border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Major life events that shaped who you are"
                />
              </label>
              
              <label className="block text-amber-800 dark:text-amber-200 font-medium">
                What are your hobbies and interests?
                <textarea 
                  name="hobbies"
                  value={formData.hobbies}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full px-4 py-3 bg-amber-50 dark:bg-amber-900 border border-amber-300 dark:border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Activities you enjoy in your free time"
                />
              </label>
              
              <label className="block text-amber-800 dark:text-amber-200 font-medium">
                Are there any family stories you'd like to share?
                <textarea 
                  name="familyStories"
                  value={formData.familyStories}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full px-4 py-3 bg-amber-50 dark:bg-amber-900 border border-amber-300 dark:border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Stories passed down through generations or personal family memories"
                />
              </label>
              
              <label className="block text-amber-800 dark:text-amber-200 font-medium">
                What personal achievements are you most proud of?
                <textarea 
                  name="personalAchievements"
                  value={formData.personalAchievements}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full px-4 py-3 bg-amber-50 dark:bg-amber-900 border border-amber-300 dark:border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Accomplishments that mean the most to you"
                />
              </label>
              
              <label className="block text-amber-800 dark:text-amber-200 font-medium">
                What values or life lessons would you like to pass on?
                <textarea 
                  name="values"
                  value={formData.values}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full px-4 py-3 bg-amber-50 dark:bg-amber-900 border border-amber-300 dark:border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Important principles or wisdom to share"
                />
              </label>
            </div>
            
            <div className="flex justify-between pt-4">
              <Link 
                href="/tree" 
                className="bg-transparent border border-amber-600 dark:border-amber-400 text-amber-600 dark:text-amber-400 hover:bg-amber-600/10 font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Back to Tree
              </Link>
              
              <button 
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Save Biography
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BioPage;