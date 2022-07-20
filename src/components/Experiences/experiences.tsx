import React from 'react';
import WorkingExperience from "./CompanyExperience/workingExperience.tsx";
import './experiences.scss';

import { experiences } from "../types";
import { shouldRender } from '../../helpers';

const Experiences = ({ experiences }: experiences) => {
  
  return shouldRender([experiences]) && (
    <section className="experiences">
      <h3>Experiences</h3>
      {experiences.map((experience, idx) => {
        const {
          startDate, 
          endDate,
          company,
          location,
          position,
          activities
        } = experience;

        return (
          <WorkingExperience 
            key={idx}
            startDate={startDate}
            endDate={endDate}
            company={company}
            location={location}
            position={position}
            activities={activities}
          />
        );
      })}
    </section>
  );
};

export default Experiences;
