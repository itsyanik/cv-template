import React from 'react';
import PersonalInfo from '../PersonalInfo/personalInfo.tsx';

import { personalInfoTypes } from '../types/personalInfoTypes';

const Header = ({ name, goals, contactInformation }: personalInfoTypes) => {
  return(
    <header>
      <PersonalInfo 
        name={name} 
        goals={goals} 
        contactInformation={contactInformation}
      />
    </header>
  );
};

export default Header;
