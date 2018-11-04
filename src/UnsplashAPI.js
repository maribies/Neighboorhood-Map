const api = 'https://api.unsplash.com/';
const apiKey = 'e9c4963d83e950c65ba561d854aa6ec1f0e1c81d37d175ccf0dd95f346529a2f';

// call for random images from porto search, which isn't used in final app yet
// export const getImages = () =>
//   fetch(`${api}search/photos?page=1/&query=porto&client_id=${apiKey}`)
//   .then(res => res.json())

export const getCollection = () =>
  fetch(`${api}collections/2516048/photos/?per_page=20&client_id=${apiKey}`)
  .then(res => res.json())
