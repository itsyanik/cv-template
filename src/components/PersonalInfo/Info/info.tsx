import React from 'react';
import './info.scss';

import { capitalize, shouldRender } from '../../../helpers';
import { ContactInformation } from '../../interfaces';

const Info = ({ type, info }: ContactInformation) => {
  const capitalizedType = capitalize(type);

  return shouldRender([type, info]) && (
    <div className='info'>
      <span className='type'>{ capitalizedType }:&nbsp;</span>
      <span>{ info }</span>
    </div>
  );
};

export default Info;
