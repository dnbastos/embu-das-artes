import Geocode from 'react-geocode';
import myPlaces from './myPlaces.json';

const apiKey = 'AIzaSyC0LJxzJG83wmuruULMypSFxo6nypBS_bY';
Geocode.setApiKey(apiKey);

const getMyPlaceById = id => myPlaces.places.filter((place, i) => i === id)[0];

const getQuery = placeId => {
 const myPlace = getMyPlaceById(placeId);
 return `${myPlace} ${myPlaces.neighborhood}, ${myPlaces.city} - ${myPlaces.state}`;
}

export const get = placeId => {
  return Geocode.fromAddress(getQuery(placeId))
    .then(data => data.results[0])
    .then(data => {
      data.name = myPlaces.places[placeId];
      return data;
    });
};

export const getAll = () => {
  return Promise.all(myPlaces.places.map((place, i) => get(i)));
};
