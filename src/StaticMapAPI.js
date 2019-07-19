import queryString from 'query-string';

const api = 'https://maps.googleapis.com/maps/api/staticmap';
const key = 'AIzaSyC0LJxzJG83wmuruULMypSFxo6nypBS_bY';
const center = 'Centro, Embu das Artes - SP';
const zoom = 14;
const size = { width: 1280, height: 920};

const getRequestUrl = () => {
  const strSize = Object.keys(size).map(key => size[key]).join('x')
  const queryParams = { center, zoom, size: strSize, key };
  return `${api}?${queryString.stringify(queryParams)}`;
}

export const saveStaticMap = () => {
  fetch(getRequestUrl)
    .then(response => console.log(response));
}
