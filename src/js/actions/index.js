import {
    GET_NOW_PLAYING,
    SET_NOW_PLAYING,
    GET_GENRES,
    SET_GENRES,
    SET_GENRE_FILTERS,
    SET_GENRES_AVAILABLE,
} from "../constants/action-types.js";

export const getNowPlaying = payload => ({
    type: GET_NOW_PLAYING,
    payload
});

export const setNowPlaying = payload => ({
    type: SET_NOW_PLAYING,
    payload
});


export const getGenres = payload => ({
    type: GET_GENRES,
    payload
});

export const setGenres = payload => ({
    type: SET_GENRES,
    payload
});

export const setGenreFilters = payload => ({
    type: SET_GENRE_FILTERS,
    payload
});

export const setGenresAvailable = payload => ({
    type: SET_GENRES_AVAILABLE,
    payload
});


