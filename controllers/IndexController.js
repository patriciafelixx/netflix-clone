const axios = require('axios');
require('dotenv/config');

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

const IndexController = {
    index: async (req, res) => {
        const getTrendingTV = await axios.get(`${BASE_URL}/trending/tv/week${API_KEY}`);
        const getTrendingMovie = await axios.get(`${BASE_URL}/trending/movie/week${API_KEY}`);
        const getAnimationMovie = await axios.get(`${BASE_URL}/discover/movie${API_KEY}&with_genres=16`);
        const getDramaMovie = await axios.get(`${BASE_URL}/discover/movie${API_KEY}&with_genres=18`);
        const getComedyMovie = await axios.get(`${BASE_URL}/discover/movie${API_KEY}&with_genres=35`);
        
        const trendingTV = getTrendingTV.data.results;
        const trendingMovie = getTrendingMovie.data.results;
        const animationMovie = getAnimationMovie.data.results;
        const dramaMovie = getDramaMovie.data.results;
        const comedyMovie = getComedyMovie.data.results;
        
        const random = Math.floor(Math.random() * trendingTV.length);
        const getBackdropDetails = await axios(`${BASE_URL}/tv/${trendingTV[random].id}${API_KEY}`);
        const backdropDetails = getBackdropDetails.data;
        
        return res.json({ trendingTV, trendingMovie, comedyMovie, dramaMovie, animationMovie, backdropDetails });
    }
}

module.exports = IndexController;