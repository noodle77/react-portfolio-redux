import React from 'react';
import Project from './Project';

function Portfolio() {
    const projects = [
        { title: "KeyGen", image: "/src/assets/img/keygen.png", repo: "https://github.com/noodle77/keygen", live: "https://noodle77.github.io/keygen/" },
        { title: "WeatherVane", image: "/src/assets/img/weathervane.png", repo: "https://github.com/noodle77/weathervane", live: "https://noodle77.github.io/weathervane/" },
    ];

    return (
        <section className="portfolio">
            <h2>Portfolio</h2>
            <div className="projects-grid">
                {projects.map(project => (
                    <Project key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;