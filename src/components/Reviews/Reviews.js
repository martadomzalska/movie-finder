import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import css from './Reviews.module.css'
import { fetchReviews } from 'services/api';

function Reviews() {
    const [reviews, setReviews] = useState('')
    const location = useLocation();
    const {id} = location.state

    useEffect(() => {
        async function getMovieReviews() {
            const data = await fetchReviews(id);
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
            ) : (<p className={css.noReviews}>No reviews</p>)}
      </ul>
  )
}

export default Reviews;
