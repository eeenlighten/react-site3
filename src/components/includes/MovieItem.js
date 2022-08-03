import React from 'react'

function MovieItem(props) {

  return (
    <li>
        <a href="/">
            <img className='movieitem_img' 
                src={`https://image.tmdb.org/t/p/w500/${props.movies.poster_path}`}
                alt={props.movies.title} 
            />
            <p>{props.movies.title}</p>
        </a>
    </li>
  )
}

export default MovieItem;