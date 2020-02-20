import { Championship } from '../models/championship.model';
import Constants from '../constants/Constants';

export const findChampionships = () => {
    const URL = `${Constants.urlBackend}/championships`;
    return fetch(URL)
        .then((res) => res.json())
        .then((championships: Championship[]) => championships)
        .catch((error) => {
            console.error(error);
            return [];
        });
};