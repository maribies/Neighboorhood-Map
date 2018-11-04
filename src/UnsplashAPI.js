const api = 'https://api.unsplash.com/';
const apiKey = process.env.REACT_APP_UNSPLASH_KEY;

export const getImages = () =>
  fetch(`${api}search/photos?page=1/&query=porto&client_id=${apiKey}`)
  .then(res => res.json())

export const getCollection = () =>
  fetch(`${api}collections/2516048/photos/?per_page=20&client_id=${apiKey}`)
  .then(res => res.json())
