import React from 'react';

function Project({ title, image, repo, live }) {
    return (
        <div className="project">
            <a href={live} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title} className="project-image" />
            </a>
            <h3>{title}</h3>
            <a href={repo} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
    );
}

export default Project;