import { Fight } from '../models/fight.model';
import Constants from '../constants/Constants';

export const findFights = (championshipId) => {
  const URL = `${Constants.urlBackend}/championships/${championshipId}/fights`;
  return fetch(URL)
    .then((res) => res.json())
    .then((fights: Fight[]) => fights)
    .catch((error) => {
      console.error(error);
      return [];
    });
};