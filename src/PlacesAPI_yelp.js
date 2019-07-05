import myPlaces from './myPlaces.json';

const api = 'https://api.yelp.com/v3/businesses/';
const locale = 'pt_BR';
const apiKey = 'mX13G-9kd6ioonk6-xGaGZFzEzpqtsZO9IKbSAfVy04AMU-bGsjehHLQZQmjnegoVlSb95N_' +
  '7X4wZ2vLhPUEZ_a6j3DBRBKtUsEA-ZLXzBLhsoDMV7Brw9UuNnsfXXYx';
const requestOptions = {
  method: 'GET',
  headers: { 'Authorization': `Bearer ${apiKey}` }
};
const getMyPlaceById = id => myPlaces.places.filter((place, i) => i === id)[0];

const getQueryString = params => {
  return Object.keys(params).reduce((accum, curr, i, arr) => {
    const separator = i !== (arr.length - 1) ? '&' : '';
    return accum + `${curr}=${encodeURI(params[curr])}${separator}`;
  }, '');
}

export const search = (placeId) => {
  const myPlace = getMyPlaceById(placeId);
  const getLocationText = () => `${myPlaces.neighborhood}, ${myPlaces.city} - ${myPlaces.state}`;
  const query = getQueryString({
    locale,
    term: myPlace.name,
    location: getLocationText(myPlace),
    limit: 1
  });
  return fetch(`${api}search/${query}`, requestOptions).then(data => console.log(data))
};
