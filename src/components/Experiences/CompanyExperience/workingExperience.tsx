import React from 'react';
import './workingExperience.scss';

import { CompanyExperience } from '../../interfaces';
import { shouldRender } from '../../../helpers';

const WorkingExperience = ({ 
  startDate, 
  endDate,
  company,
  location,
  position,
  activities
}: CompanyExperience) => {

  const willRender = shouldRender([
    startDate, 
    endDate,
    company,
    location,
    position
  ]);
  
  return willRender && (
    <div className="experience">
      <div className="experience-header">
        <span className="company">&nbsp;{ company } | { position }</span>
        <div className='about'>
          <span className="location">&nbsp;{ location }&nbsp;</span>|
          <span className="duration">&nbsp;{ startDate } - { endDate }</span>
        </div>
      </div>
      {activities && (
        <ul className="activities">
          {activities.map((activity, idx) => {
            return (
              <li className="activity" key={idx}>
                { activity }
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default WorkingExperience;
