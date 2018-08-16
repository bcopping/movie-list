import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import MovieTile from "../../components/MovieTile/MovieTile";
import Checkbox from "../../components/Forms/Checkbox"

class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGenres: [],
            rating: 3,
        }
    }

    toggleCheckbox = (id) => {
        const selectedGenres = [...this.state.selectedGenres]

        function findID(selectedGenresID) {
            return selectedGenresID == id;
        }
        //if the id is already in the array filter it out
        if (selectedGenres.find(findID)) {
            this.setState({ selectedGenres: selectedGenres.filter(e => e !== id) })
        }
        else {
            selectedGenres.push(id)
            this.setState({ selectedGenres: selectedGenres })
        }
    }

    decreaseRating = () => {
        let currentVal = this.state.rating
        currentVal = currentVal - 0.5
        if (currentVal >= 0) {
            this.setState({
                rating: currentVal
            })
        }
    }

    increaseRating = () => {
        let currentVal = this.state.rating
        currentVal = currentVal + 0.5
        if (currentVal <= 10) {
            this.setState({
                rating: currentVal
            })
        }
    }

    render() {
        const { nowPlaying, genres, genresAvailable } = this.props;

        //filter the genres array to remove genres that are not in the movie list
        let genresFinal = genres.filter(genre => {
            return genresAvailable.filter(genreAvail => {
                return genre.id == genreAvail
            }).length == 1
        });

        let genreTags = null;
        if (genresFinal.length >= 1) {
            genreTags = genresFinal.map((genres, index) => {
                return (
                    <Checkbox key={index} id={genres.id} name={genres.name} handleCheckboxChange={this.toggleCheckbox} />
                )
            })
        }

        let genreIDS = this.state.selectedGenres
        let filteredByGenre = nowPlaying.results.filter(mov => {
            let arr = _.difference(genreIDS, mov.genre_ids)
            if (arr.length >= 1) return false
            else return true
        });

        //if we have filtered by genre show filtered list, otherwise show unfiltered list from api
        let movieList = null;
        let moviesToMap = null;
        filteredByGenre.length >= 1 ? moviesToMap = filteredByGenre : moviesToMap = nowPlaying.results

        let filteredByPop = moviesToMap.filter(mov => mov.vote_average >= this.state.rating)

        if (filteredByPop.length >= 1) {
            movieList = filteredByPop.map(data => {
                return <MovieTile key={data.id} genres={genres} genreIDs={data.genre_ids} title={data.title} img={data.poster_path} />
            })
        }
        //if filters dont return anything show no results instead of listing
        if (filteredByGenre.length === 0 || filteredByPop.length === 0) {
            movieList = <h4>No movies results</h4>
        }
        return (
            <div>
                <div className="mr4 ml4 mt4 mb3">
                    <h1>Now Showing In Cinemas</h1>
                    <div className="bg-washed-yellow pa3">
                        <div className="flex flex-wrap">
                            <div className="w-100 w-30-m w-20-l pa2">
                                <b className="mb2 db">Voter rating *</b>
                                <div>
                                    <div
                                        className="link bg-animate bg-white hover-bg-black-10 ba b--black-10 pa2 dib tc pointer"
                                        onClick={() => this.decreaseRating()
                                        }>
                                        <span className="f4">-</span>
                                    </div>

                                    <div className="w2 w2-m dib tc">{this.state.rating}</div>

                                    <div
                                        className="link bg-animate bg-white hover-bg-black-10 ba b--black-10 pa2 dib tc pointer"
                                        onClick={() => this.increaseRating()}>
                                        <span className="f4">+</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-100 w-70-m w-80-l pa2">
                                <b className="mb2 db">Genres</b>
                                <div className="flex flex-wrap">
                                    {genreTags}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex flex-wrap mr3 ml3">
                    {movieList}
                </div>
            </div >
        )
    }
}

const mapStateToProps = ({ movies, genres }) => {
    return {
        nowPlaying: movies.nowPlaying,
        genres: genres.genresArray,
        genresAvailable: genres.genresAvailable,
    };
};

Listing = connect(
    mapStateToProps,
    null
)(Listing);

export default Listing;
