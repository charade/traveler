import axios, { AxiosResponse } from 'axios';
import { LatLng } from 'leaflet';

export const getPlace = (place : string): Promise<AxiosResponse<any>> =>  
axios.get(`https://api-adresse.data.gouv.fr/search/?q=${place}%2075type=housenumber&autocomplete=0`);

export const reverseCoordToPlace = (coords : LatLng): Promise<AxiosResponse<any>> =>
axios.get(`https://api-adresse.data.gouv.fr/reverse/?lon=${coords.lng}&lat=${coords.lat}&type=street`)