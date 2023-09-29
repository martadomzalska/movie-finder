import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import css from './Reviews.module.css'

const headers = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjljNGQ1OGI3Nzc5Y2E3ZjU0NzQzOGVjMDY1YTdkMiIsInN1YiI6IjYzYWRlYjM2MWY3NDhiMDBjOGI3NTk3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yuBGdZBeGbe4GxiKZv6q5aaLChprjgO_x8cJYcfPPzA',
  accept: 'application/json',
};

const fetchReviews = async movieId => {
    try {
        const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, {headers}
        );
        const data = response.json();
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
  
};


function Reviews() {
    const [reviews, setReviews] = useState('')
    const location = useLocation();
    const {id} = location.state

    useEffect(() => {
        async function getMovieReviews() {
            const data = await fetchReviews(id);
            console.log(data.results);
            setReviews(data.results)
        }
        getMovieReviews()
    }, [id])

    return (
        <ul className={css.list}>
            {reviews.length > 0 ? (
                reviews.map(review => (
                    <li className={css.listElement} key={review.id}><h4 className={css.author}>{review.author}:</h4>
                        <p class={css.review}>{review.content}</p></li>
                ))
            ) : (<p>No reviews</p>)}
      </ul>
  )
}

export default Reviews;
