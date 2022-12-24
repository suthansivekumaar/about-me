import React from 'react';
import '../../App.css';

export default function Experience() {
  return (
    <div>
    <h2 id="experience-heading">EXPERIENCE</h2>
        <div class="entire-block">
        <ul className='work-experience'>
            <li className='work-experience-coop'>
                <span className='work-experience-company'>Loblaw Digital</span>
                <span className='work-experience-location'>Toronto, ON, Canada</span>
                <span className='work-experience-position'>Software Developer</span>
                <span className='work-experience-dates'>Sep 2022 to Dec 2022</span>
                <ul className='work-experience-description'>
                    <li>
                        Implemented URL canonicalization for Loblaw’s product list pages, product detail pages, collection pages and store locator details pages 
                        through React, removing over 291,000 non-canonical pages from Google and improving SEO performance
                    </li>
                    <li>
                        Created modal through React and CSS that appears if a customer’s delivery order can be fulfilled through Loblaw’s manual micro fulfillment
                        centers, improving order experience by allowing customers to select their current delivery timeslot or 2 faster timeslots
                    </li>
                    <li>
                        Added store ID and postal code as parameters to delivery REST API, allowing experimentation team to select them as parameters in the custom 
                        attribute when creating an audience in Adobe Target and helping to track metrics from different store locations
                    </li>
                </ul>
            </li>
            <li className='work-experience-coop'>
                <span className='work-experience-company'>Marsh McLennan</span>
                <span className='work-experience-location'>Toronto, ON, Canada</span>
                <span className='work-experience-position'>Software Developer</span>
                <span className='work-experience-dates'>Jan 2022 to Apr 2022</span>
                <ul className='work-experience-description'>
                    <li>
                        Created a prototype of a web app that tracks the working location of 80,000 employees using MERN stack and Electron, helping departments 
                        with payroll administration
                    </li>
                    <li>
                        Designed email-sending process after change requests were submitted on Contract Lifecycle Manager to notify the requester if the change 
                        request was increase type or decrease type using PEGA
                    </li>
                    <li>
                        Improved the team’s testing process for Request Access, Vaccination Tracking and Ukraine/Russia Sanctions, by creating 143 automated test
                        cases using the CodeceptJS testing framework
                    </li>
                </ul>
            </li>
            <li className='work-experience-coop'>
                <span className='work-experience-company'>Fundscraper Capital</span>
                <span className='work-experience-location'>Toronto, ON, Canada</span>
                <span className='work-experience-position'>Software Developer</span>
                <span className='work-experience-dates'>May 2021 to Aug 2021</span>
                <ul className='work-experience-description'>
                    <li>
                        Converted PHP code part of the company’s order process into TypeScript and ran tests using Jest to verify the calculations surrounding real-estate transactions in the new code are correct
                    </li>
                     <li>
                        Verified correct email output by converting email string code for each method involved with email sending after each transaction into Handlebars expressions and ran tests using PHPUnit
                     </li>
                </ul>
            </li>
            <li className='work-experience-coop'>
                <span className='work-experience-company'>Bank of Montreal</span>
                <span className='work-experience-location'>Toronto, ON, Canada</span>
                <span className='work-experience-position'>Operations Analyst</span>
                <span className='work-experience-dates'>Sep 2020 to Dec 2020</span>
                <ul className='work-experience-description'>
                    <li>
                        Updated webpage used for SAP S/4HANA training resources using HTML and CSS, improving user experience by adding more resources and making page auto-scalable
                    </li>
                    <li>
                        Created a General Ledger Account search engine portal using HTML, CSS and JavaScript
                    </li>
                    <li>
                        Created a tool that allows users with limited HTML experience to edit the Notepad file of the SAP S/4HANA Training webpage and was nominated "Star of the Week" for it
                    </li>
                </ul>
            </li>   
    </ul>
    </div>
  </div>
    )
}