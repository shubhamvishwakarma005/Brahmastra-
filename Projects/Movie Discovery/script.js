const search = document.getElementById('search-bar')
const genre = document.getElementById('genre-filter')
const year = document.getElementById('year-filter')
const searchbtn = document.getElementById('search-btn')
const card = document.getElementsByClassName('card')
const poster = document.getElementById('movie-poster')
const movieTitle = document.getElementById('movie-title')
const movieRating = document.getElementById('movie-rating')
const movieYear = document.getElementById('movie-year')
const movieGenre = document.getElementById('movie-genre')
const movieDetail = document.getElementById('movie-detail')
const movieContainer = document.querySelector('.movie-container')


function Moviedata(){

     searchbtn.addEventListener('click', ()=>{
        const query = search.value
       
        Apidata(query)
     })

}

  Moviedata();




  function DisplayMovies(movies) {

    movieContainer.innerHTML = "";

    movies.map((movie) => {

        movieContainer.innerHTML += `

        <div class="card">

            <img 
                src="${movie.Poster}" 
                alt="${movie.Title}"
            />

            <div class="card-info">

                <h2>${movie.Title}</h2>

                <p>📅 ${movie.Year}</p>

                <button>
                    View Details
                </button>

            </div>

        </div>

        `;

    });

}