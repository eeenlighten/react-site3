import React, { useEffect, useState } from "react";
import Header from "../layout/Header"; 
import Footer from "../layout/Footer"; 
import Contents from "../layout/Contents";
import Contact from "../layout/Contact";
import Title from "../layout/Title";
import MovieList from "../includes/MovieList";
import MovieSearch from "../includes/MovieSearch";


function Movie() {

  const [movies, setMovies] = useState([]);

  const search = (query) => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=92b532899fdd8e32db216a990dc266dd&query=${query}`,
    requestOptions
    )
    .then((response) => response.json())
    .then((result) => {setMovies(result.results)})
    .catch((error) => console.log("error", error));
  }  

  useEffect(() => {

    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://api.themoviedb.org/3/search/movie?api_key=92b532899fdd8e32db216a990dc266dd&query=disney", requestOptions)
      .then(response => response.json())
      .then((result) => {setMovies(result.results);})
      .catch((error) => console.log('error', error));
  },[]);   

  return (
    <>
      <Header />
      <Contents>
        <Title title={["movie", "reference"]} />
          <section className="movie__cont">
            <div className="container">
              <div className="movie__inner">    
                <MovieSearch onSearch={search} />              
                <MovieList movies={movies} />
              </div>
            </div>
          </section>  
          <Contact />      
      </Contents>
      <Footer />
    </>
  )
}

export default Movie;