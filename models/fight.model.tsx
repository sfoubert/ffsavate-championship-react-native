import { Athlete } from './athlete.model';

export interface Fight {
  id: string;
  weight: string;
  athlete1: Athlete;
  athlete2: Athlete;
  result: string;
  video?: string;

}
