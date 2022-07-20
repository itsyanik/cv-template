import React from 'react';
import WorkingExperience from "../Experiences/CompanyExperience/workingExperience.tsx";
import './education.scss';

import { education } from '../types';
import { shouldRender } from '../../helpers';

const Education = ({ 
  education, 
  extraCourses,
  languages 
}: education) => {
  return (
    <section className='education'>
      {shouldRender([education]) && (
        <div className='graduation'>
          <h3>Graduation</h3>
          {education.map((edu, idx) => {
            const {
              startDate, 
              endDate,
              company: school,
              location,
              position: course,
            } = edu;

            return (
              <WorkingExperience 
                key={idx}
                startDate={startDate}
                endDate={endDate}
                company={school}
                location={location}
                position={course}
              />
            )
          })}
        </div>
      )}

      {shouldRender([extraCourses]) && (
        <div className='extra-courses'>
          <h3>Extra Courses</h3>
          <ul>
            {extraCourses.map((course, idx) => {
              const {
                title,
                ongoing,
                endDate,
                school
              } = course;
              const { name, teacher } = school;

              return (
                <li key={idx}>
                  <div className='about-teacher'>
                    <span className='course-title'>{ title },</span>&nbsp;
                    <span className='course-teacher'>{ teacher }</span>
                  </div>
                  <div className='about-course'>
                    <span className='course-name'>&nbsp;{ name }</span>&nbsp;|
                    <span className='course-status'>
                      &nbsp;{ ongoing ? 'Ongoing' : `Finished in ${endDate}`}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {shouldRender([languages]) && (
        <div className='languages'>
          <h3>Languages</h3>
          {languages.map((lang, idx) => {
            const { level, language } = lang;

            return(
              <ul key={idx}>
                <li>{ language } - { level }</li>
              </ul>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Education;
