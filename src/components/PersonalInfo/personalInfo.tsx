import React from 'react';
import Info from './Info/info.tsx';
import './personalInfo.scss';

import { shouldRender } from '../../helpers';
import { personalInfoTypes } from '../types/personalInfoTypes';

const PersonalInfo = ({ name, goals, contactInformation }: personalInfoTypes) => {
  return shouldRender([name, goals, contactInformation]) && (
    <div className='personalInfo'>
      <h2 className='name'>{ name }</h2>
      <div className='contact'>
        {contactInformation?.map(({ type, info }, idx) => {

          return <Info type={type} info={info} key={idx} />
        })}
      </div>

      <div className='goals'>{ goals }</div>
    </div>
  );
};

export default PersonalInfo;
