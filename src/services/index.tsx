import axios, { AxiosResponse } from 'axios';
export const getPlace = (place : string): Promise<AxiosResponse<any>> =>  
axios.get(`https://api-adresse.data.gouv.fr/search/?q=${place}%2075type=housenumber&autocomplete=0`);
