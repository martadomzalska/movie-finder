const headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjljNGQ1OGI3Nzc5Y2E3ZjU0NzQzOGVjMDY1YTdkMiIsInN1YiI6IjYzYWRlYjM2MWY3NDhiMDBjOGI3NTk3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yuBGdZBeGbe4GxiKZv6q5aaLChprjgO_x8cJYcfPPzA',
  accept: 'application/json',
};

async function fetchAPI() {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      {
        headers,
      }
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default fetchAPI;

export const getMovieDetails = async movieId => {   //movieId
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      {
        headers,
      }
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const fetchCredits = async movieId => {    //cast
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      { headers }
    );
    const data = response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchReviews = async movieId => {    //reviews
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      { headers }
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export async function fetchMovies(query) {    //movies
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      { headers }
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
}