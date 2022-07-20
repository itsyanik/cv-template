import { school } from "../types/school";

export interface ExtraCourses {
  title: string;
  ongoing: Boolean;
  endDate?: string;
  school: school;
};
