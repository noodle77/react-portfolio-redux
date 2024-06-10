import React from 'react';
import githubIcon from '../assets/img/github.svg';
import linkedinIcon from '../assets/img/linkedin.svg';

function Footer() {
    return (
        <footer>
            <a href="https://github.com/noodle77">
                <img src={githubIcon} alt="GitHub" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://www.linkedin.com/in/lydon-campbell-2b211b250/">
                <img src={linkedinIcon} alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
            </a>
        </footer>
    );
}

export default Footer;