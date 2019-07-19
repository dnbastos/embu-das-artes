import myPlaces from './myPlaces.json';

const api = 'https://maps.google.com/maps/api/geocode/json';
const apiKey = 'AIzaSyC0LJxzJG83wmuruULMypSFxo6nypBS_bY';

const headers = {
  'Accept': 'application/json'
}

const getMyPlaceById = id => myPlaces.places.filter((place, i) => i === id)[0];

const getPlaceAddress = placeId => {
  const myPlace = getMyPlaceById(placeId);
  return `${myPlace.name} ${myPlaces.neighborhood}, ${myPlaces.city} - ${myPlaces.state}`;
}

const getUrlQuery = (address) => `address=${address}&key=${apiKey}`;

export const get = placeId => {
  const myPlace = myPlaces.places[placeId];
  const placeAddress = getPlaceAddress(placeId);
  return fetch(`${api}?${getUrlQuery(placeAddress)}`, { headers })
    .then(response => response.json())
    .then(data => data.results[0])
    .then(data => {
      const places = { ...data, ...myPlace };
      places.formatted_address = data.formatted_address.replace(/,/gm, '\n');
      return places;
    });
};

export const getAll = () => {
  return Promise.all(myPlaces.places.map((place, i) => get(i)));
};
