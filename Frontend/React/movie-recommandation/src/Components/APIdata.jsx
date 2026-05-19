import { useEffect, useState } from "react";

function APIdata() {

  const API_KEY = "dc446d2";
  const BASE_URL = "https://www.omdbapi.com/";

  const [movie, setMovie] = useState([]);

  useEffect(() => {

    async function ApiData() {

      try {

        // forming url
        const url = `${BASE_URL}?apikey=${API_KEY}&s=Avengers&type=movie`;

        // console.log(url);

        // fetch api
        const data = await fetch(url);

        // convert json
        const response = await data.json();

        console.log(response);

        // safety check
        if (response.Response === "True") {

          setMovie(response.Search);

        } else {
          console.log("Movie not found");
        }

      } catch (error) {

        console.log(error);

      }

    }

    ApiData();

  }, []);

  return (
    <div>

      <h1>Movies</h1>

      {
        movie.length > 0 ? (

          movie.map((item) => (

            <div key={item.imdbID}>

              <h2>{item.Title}</h2>

              <img
                src={item.Poster}
                alt={item.Title}
                width="200"
              />

            </div>

          ))

        ) : (

          <h1>Loading...</h1>

        )
      }

    </div>
  );
}

export default APIdata;