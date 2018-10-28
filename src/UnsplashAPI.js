const api = 'https://api.unsplash.com/';
const apiSource = 'https://source.unsplash.com/'
const apiKey = 'e9c4963d83e950c65ba561d854aa6ec1f0e1c81d37d175ccf0dd95f346529a2f'

const headers = {
    Authorization: 'Client-ID e9c4963d83e950c65ba561d854aa6ec1f0e1c81d37d175ccf0dd95f346529a2f'
}

export const getImages = () =>
  fetch(`${api}search/photos?page=1/&query=porto&client_id=${apiKey}`)
  .then(res => res.json())

// export const getCollection = () =>
//   fetch(`${api}collections/2516048/porto/photos&client_id=${apiKey}`)
//   .then(res => res.json())

// export const getImage = ( query ) =>
//   fetch(`${api}search/photos?page=1&query=${query}`, { header })
//   .then(res => res.json())
//   .then(data => data.image)

// export const getPhotoById = (id, size) =>
//   fetch(`${apiSource}${id}/${size}`, { headers })
//   .then(res => res.json())
//   .then(data => data.image)
