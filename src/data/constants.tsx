const URL = 'https://api.themoviedb.org/3';
const APIKEY = '30dfb9c470cd4a2c99280f7ce262eec0';
const IMAGE_URL = 'https://image.tmdb.org/t/p';
const APISTRING = `?api_key=${APIKEY}`;

const EVENTS = {
    PosterClick: 'PosterClick',
    ModalClose: 'ModalClose',
}

export default {
    URL,
    APIKEY,
    IMAGE_URL,
    APISTRING,
    EVENTS
}