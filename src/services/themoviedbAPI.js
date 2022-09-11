import axios from 'axios';
const APIKEY = '7ad341c7e4bb32efb00f19fee102dc39';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getTrendingMovies() {
  const params = new URLSearchParams({
    api_key: APIKEY,
  });
  try {
    const { data } = await axios.get(`trending/movie/day?${params}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMoviesByQuery(searchQuery) {
  const params = new URLSearchParams({
    api_key: APIKEY,
    query: searchQuery,
    page: 1,
    include_adult: true,
  });
  try {
    const data = await axios.get(`search/movie?${params}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieByID(movieId) {
  const params = new URLSearchParams({
    api_key: APIKEY,
  });
  try {
    const data = await axios.get(`movie/${movieId}?${params}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieCredits(movieId) {
  const params = new URLSearchParams({
    api_key: APIKEY,
  });
  try {
    const data = await axios.get(`movie/${movieId}/credits?${params}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieReviews(movieId) {
  const params = new URLSearchParams({
    api_key: APIKEY,
  });
  try {
    const data = await axios.get(`movie/${movieId}/reviews?${params}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
