import { fork, takeEvery } from "redux-saga/effects";
import * as actionTypes from "../constants/action-types";
import { getNowPlayingMovies } from './getNowPlayingMovies.js'
import { getMovieGenres } from './getMovieGenres.js'

function* watchGetNowPlaying() {
    yield takeEvery(actionTypes.GET_NOW_PLAYING, getNowPlayingMovies);
}

function* watchGetGenres() {
    yield takeEvery(actionTypes.GET_GENRES, getMovieGenres);
}
export default function* root() {
    yield [
        fork(watchGetNowPlaying),
        fork(watchGetGenres),
    ]
}