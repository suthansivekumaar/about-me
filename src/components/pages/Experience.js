import React from 'react';
import '../../App.css';

export default function Experience() {
  return (
    <div>
    <h2>EXPERIENCE</h2>
        <div class="entire-block">
        <ul className='work-experience'>
            <li className='work-experience-coop'>
                <div className='work-experience-company'>Marsh McLennan</div>
                <div className='work-experience-position'>Software Developer</div>
                <div className='work-experience-dates'>Jan 2022 to Apr 2022</div>
                <div className='work-experience-description'>
                <p> - Added missing fields to Contract Lifecycle Manager and Legal Matter Intake Tool based on feedback from end users
                <br></br> - Added email-sending process after change requests were submitted on Contract Lifecycle Manager to notify the requester if the change request was increase type or decrease type
                <br></br> - Improved the team's testing process for Request Access, Vaccination Tracking and Ukraine/Russia Sanctions, by creating automated test cases using the CodeCeptJS testing framework
                <br></br> - Created a prototype of a web app that tracks the working location of each employee using MEAN stack and Electron for the MMC Tech Hackathon and pitched solution to judges
                    </p>
                </div>
            </li>
            <br></br>
            <li className='work-experience-coop'>
                <div className='work-experience-company'>Fundscraper Capital</div>
                <div className='work-experience-position'>Software Developer</div>
                <div className='work-experience-dates'>May 2021 to Aug 2021</div>
                <div className='work-experience-description'>
                    <p> - Converted PHP code part of the company’s order process into TypeScript and ran tests using Jest to verify the calculations surrounding real-estate transactions in the new code are correct
                    <br></br> - Verified correct email output by converting email string code for each method involved with email sending after each transaction into Handlebars expressions and ran tests using PHPUnit
                    </p>
                </div>
            </li>
            <br></br>
            <li className='work-experience-coop'>
                <div className='work-experience-company'>Bank of Montreal</div>
                <div className='work-experience-position'>Operations Analyst</div>
                <div className='work-experience-dates'>Sep 2020 to Dec 2020</div>
                <div className='work-experience-description'>
                    <p> - Updated webpage used for SAP S/4HANA training resources using HTML and CSS, improving user experience by adding more resources and making page auto-scalable
                    <br></br> - Created a General Ledger Account search engine portal using HTML, CSS and JavaScript
                    <br></br> - Created a tool that allows users with limited HTML experience to edit the Notepad file of the SAP S/4HANA Training webpage and was nominated "Star of the Week" for it
                    <br></br> - Collaborated with team to propose a solution that will help BMO be at the forefront of change during COVID-19 and pitched solution to judges where our team won</p>
                </div>
            </li>
            <br></br>
            <li className='work-experience-coop'>
                <div className='work-experience-company'>ATS Automation</div>
                <div className='work-experience-position'>Software Toolset Developer</div>
                <div className='work-experience-dates'>Jan 2020 to Apr 2020</div>
                <div className='work-experience-description'>
                <p> - Resolved team’s runtime errors and compile errors in their Excel files by updating obsolete VBA code and using breakpoints 
                    <br></br> - Automated data input and data output across several sheets in General Process Summary with VBA, macros, VLOOKUP, command buttons and user forms, increasing team’s productivity</p>
                </div>          
            </li>
    </ul>
    </div>
  </div>
    )
}