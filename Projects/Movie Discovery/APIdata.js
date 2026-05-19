const API_KEY = "dc446d2";
const BASE_URL = "https://www.omdbapi.com/";

async function Apidata(query) {

    const url = `${BASE_URL}?apikey=${API_KEY}&s=${query}&type=movie`;

    try {

        const data = await fetch(url);
        const response = await data.json();

        // Agar movie nahi mili
        if(response.Response === "False"){

            movieContainer.innerHTML = `
            
            <h1 class="not-found">
                No Movies Found 😢
            </h1>
            
            `;

            return;
        }

        // Movies display karo
        DisplayMovies(response.Search);

    } catch(error) {

        console.error(error);

    }
}