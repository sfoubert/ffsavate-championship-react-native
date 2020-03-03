export interface Athlete {
  id: string;
  gender: string;
  firstName: string;
  lastName: string;
  club: string;
  department: string;
  birthDate?: Date;
  height?: number;
  picture?: string;
}
