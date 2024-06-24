import React from 'react';

function Resume() {
    return (
        <section className="resume-section">

            <h2 className='resume-start'>Profile</h2>
            <p className="profile-description">Music producer, composer, and engineer with eight years of experience. Proficient in Pro Tools, Ableton Live, Reason, Logic, and FL Studio. Experienced in managing live recording spaces and making detailed edits to audio waveforms.</p>

            <h2 className='resume-header'>Work Experience</h2>
            <div className="experience-section">
                <h3 className='resume-subheader'>BMG Intern - Mechanical Licensing</h3>
                <p className="date">Feb 2023 - May 2023 — Nashville, TN</p>
                <ul>
                    <li>Tracked down missing writers using social media to acquire publisher and split information and move them out of copyright control.</li>
                    <li>Created and submitted licensing requests to CMRRA.</li>
                    <li>Cleared over 250 products out of the company's backlog on CMRRA Direct.</li>
                    <li>Created a system to log and address discrepancies between our records and publishing and split information contained within the licenses issued by CMRRA.</li>
                </ul>

                <h3 className='resume-subheader'>New Summit Academy - Music Production Teaching Assistant</h3>
                <p className="date">Nov 2018 - Nov 2019 — Atenas, Costa Rica</p>
                <ul>
                    <li>Drove an independent effort to reimagine the recording studio on campus, adding a digital composition workstation and directing the purchase of updated equipment.</li>
                    <li>Managed the day-to-day use of other students, which entailed keeping a schedule, caring for the equipment, and ensuring the live room and control room remained clean and organized at all times.</li>
                    <li>Introduced fellow students to digital music production and taught them the basic skills needed to independently explore the subject further.</li>
                </ul>

                <h3 className='resume-subheader'>KJMedia Productions - Composer</h3>
                <p className="date">Aug 2021 - Feb 2023 — Los Angeles, CA; Milan, Italy; Bali, Indonesia</p>
                <ul>
                    <li>Composed and produced instrumental backing tracks for all videos put out by the company.</li>
                </ul>
            </div>

            <h2 className='resume-header'>Educational Background</h2>
            <div className="education-section">
                <h3 className='resume-subheader'>Los Angeles Film School — Associate's in Music Production</h3>
                <p className="date">Spring 2020 - Spring 2021</p>

                <h3 className='resume-subheader'>Dexter Southfield/New Summit Academy — High School</h3>
                <p className="date">Sep 2015 - Nov 2019</p>
                <p>GPA - 3.41 | SAT - 1400 | ACT - 33</p>
            </div>

            <h2 className='resume-header'>Skills</h2>
            <ul>
                <li>Proficient in Pro Tools, Ableton Live, Reason, Logic, and FL Studio.</li>
                <li>Experienced in recording live bands and solo acts.</li>
                <li>Comfortable making detailed edits to raw audio waveforms.</li>
            </ul>

            <footer className='resume-footer'>
                <a href="/src/assets/docs/resume.pdf" download>Download PDF Resume</a>
            </footer>
        </section>
    );
}

export default Resume;