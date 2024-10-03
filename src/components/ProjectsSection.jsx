import React, { useState, useEffect } from 'react';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample project data (you can replace with your own)
  const projects = [
    {
      id: 1,
      title: 'HTML/CSS Project',
      description: 'A beautiful and responsive webpage built with HTML and CSS.',
      category: 'HTML/CSS',
      image: '/img/project1.png', // example image path
    },
    {
      id: 2,
      title: 'JavaScript Project',
      description: 'A dynamic JavaScript project showcasing DOM manipulation.',
      category: 'JavaScript',
      image: '/img/project2.png',
    },
    {
      id: 3,
      title: 'React Project',
      description: 'A feature-rich React app with state management and routing.',
      category: 'React',
      image: '/img/project3.png',
    },
  ];

  // Filter logic based on selected category
  const filteredProjects = projects.filter(project =>
    selectedCategory === 'All' || selectedCategory === project.category
  );

  return (
    <section className="py-16 bg-gray-100" id='my-prs'>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Projects</h2>

        {/* Button Section */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`py-2 px-4 rounded-md font-semibold transition ${selectedCategory === 'All' ? 'bg-slate-800 text-white' : 'bg-gray-200 text-gray-700'
              }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory('HTML/CSS')}
            className={`py-2 px-4 rounded-md font-semibold transition ${selectedCategory === 'HTML/CSS' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
          >
            HTML/CSS
          </button>
          <button
            onClick={() => setSelectedCategory('JavaScript')}
            className={`py-2 px-4 rounded-md font-semibold transition ${selectedCategory === 'JavaScript' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
          >
            JavaScript
          </button>
          <button
            onClick={() => setSelectedCategory('React')}
            className={`py-2 px-4 rounded-md font-semibold transition ${selectedCategory === 'React' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
          >
            React
          </button>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
