import React from "react";
import PropTypes from "prop-types";
import * as api from "../../api/"

const MovieTile = ({ title, img, genreIDs, genres }) => {

    let GenreArray = [];

    const matchGenre = function (id) {
        genres.filter(obj => {
            if (obj.id === id) {
                GenreArray.push(obj.name)
            }
        })
    }

    if (genres.length >= 1) {
        genreIDs.forEach(id => {
            matchGenre(id)
        })
    }

    let genreTags = GenreArray.map((genre, index) => {
        return <div className="pr2 pb1" key={index}>{genre} </div>
    })

    return (
        <div className="w-100 w-50-m w-25-l pa3">
            <div className="ba b--light-silver h-100 pa2">
                <img className="w-100" src={`${api.IMG_URL_200}${img}`} />
                <h3>{title}</h3>
                <div className="flex flex-wrap">
                    {genreTags}
                </div>
            </div>
        </div>
    )
}

MovieTile.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    genreIDs: PropTypes.array,
    genres: PropTypes.array,
}

export default MovieTile;
