import { CompanyExperience } from "../interfaces/CompanyExperience";
import { ExtraCourses } from "../interfaces/ExtraCourses";
import { language } from './language';

export type education = {
  education: CompanyExperience[];
  extraCourses: ExtraCourses[];
  languages: language[];
};
