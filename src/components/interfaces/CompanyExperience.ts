import { jobActivity } from '../types';

export interface CompanyExperience {
  startDate: string; 
  endDate: string; 
  company: string; 
  location: string; 
  position: string;
  activities?: jobActivity[];
};
