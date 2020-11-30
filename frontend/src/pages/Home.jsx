import React, { Component } from 'react';
import api from '../services/api';
import './Home.css';
import netflixLoading from '../images/netflix-loading.gif'
import { FaPlay, FaExclamationCircle } from 'react-icons/fa';

import Navbar from "../components/Navbar";
import Collection from "../components/Collection";
import Footer from "../components/Footer";

class Home extends Component {
    state = {
        trendingTV: [],
        trendingMovie: [],
        comedyMovie: [],
        dramaMovie: [],
        animationMovie: [],
        backdropDetails: {}
    }

    async componentDidMount() {
        const response = await api.get();
        this.setState({
            trendingTV: response.data.trendingTV,
            trendingMovie: response.data.trendingMovie,
            comedyMovie: response.data.comedyMovie,
            dramaMovie: response.data.dramaMovie,
            animationMovie: response.data.animationMovie,
            backdropDetails: response.data.backdropDetails,
        });
    }

    render() {

        const { trendingTV, trendingMovie, comedyMovie, dramaMovie, animationMovie, backdropDetails } = this.state;
        const firstDate = new Date(backdropDetails.first_air_date);

        const genresName = [];
        if (backdropDetails.id) {
            backdropDetails.genres.map(genre => { genresName.push(genre.name) });
        }

        return backdropDetails.id ? (
            <div>
                <Navbar />
                <div className="backdrop">
                    <img src={`https://image.tmdb.org/t/p/original${backdropDetails.backdrop_path}`} />
                </div>

                <div className="intro">
                    <h1>{backdropDetails.name}</h1>
                    <div className="about">
                        <div className="green">{backdropDetails.vote_average.toFixed(1)}</div>
                        <div>{firstDate.getFullYear()}</div>
                        <div>
                            {backdropDetails.number_of_seasons}
                            {backdropDetails.number_of_seasons == 1 ? ' temporada' : ' temporadas'}
                        </div>
                    </div>
                    <p className="synopsis">{backdropDetails.overview}</p>
                    <button>{<FaPlay />} Assistir</button>
                    <button className="grey"><FaExclamationCircle /> Mais Informações</button>
                    <p className="genders">Gêneros: {genresName.join(', ')}</p>
                </div>

                <div className="collections">
                    <h2>Séries em alta</h2>
                    <Collection array={trendingTV} />

                    <h2>Filmes em alta</h2>
                    <Collection array={trendingMovie} />

                    <h2>Animação</h2>
                    <Collection array={animationMovie} />

                    <h2>Drama</h2>
                    <Collection array={dramaMovie} />

                    <h2>Comédia</h2>
                    <Collection array={comedyMovie} />
                </div>

                <Footer />

            </div>
        ) : (
                <div className="loading">
                    <img src={netflixLoading} alt="Carregando..." />
                    {/* http://filmelier.com/pt/br/news/wp-content/uploads/2020/03/netflix-loading.gif */}
                </div>
            )
    };
}

export default Home;