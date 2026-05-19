const api = `https://www.omdbapi.com/?s=panda&apikey=c65fcde9`;

const elLoading = document.querySelector(".loading");
const elList = document.querySelector(".cards");

const elForm = document.querySelector(".form");
const elSearch = document.querySelector(".search");

const details = document.querySelector(".details");

const getData = (url) => {
  elLoading.innerHTML = "Loading...";

  fetch(url)
    .then((response) => response.json())
    .then((data) => showData(data))
    .finally(() => {
      elLoading.innerHTML = "";
    });
};

getData(api);

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = elSearch.value.trim();

  if (query !== "") {
    const newApi = `https://www.omdbapi.com/?s=${query}&apikey=c65fcde9`;

    getData(newApi);
  }
});

function showData(movies) {
  elList.innerHTML = "";

  if (movies.Response === "True") {
    const { Search } = movies;

    Search.forEach((element) => {
      const { Poster, Title, Type, Year, imdbID } = element;

      elList.innerHTML += `
        <div class="card">

          <img class="poster" src="${Poster}" alt="" />

          <h2 class="title">${Title}</h2>

          <p class="year">${Year}</p>

          <p class="type">${Type}</p>

          <button
            class="s-btn"
            onclick="getOneMovies('${imdbID}')"
          >
            More Info
          </button>

        </div>
      `;
    });
  } else {
    elList.innerHTML = `
      <h2>Movie not found</h2>
    `;
  }
}

function getOneMovies(id) {
  fetch(`https://www.omdbapi.com/?i=${id}&apikey=c65fcde9`)
    .then((response) => response.json())
    .then((data) => {
      const {
        Title,
        Year,
        Poster,
        Director,
        Runtime,
        Released,
        Genre,
        Rated,
        Writer,
        Actors,
        Plot,
      } = data;

      details.innerHTML = `
        <div class="more-info">

          <div class="more-info-content">

            <img class="modal-img" src="${Poster}" alt="" />

            <div class="info">

              <h1>${Title}</h1>

              <p><span>Year:</span> ${Year}</p>

              <p><span>Rated:</span> ${Rated}</p>

              <p><span>Released:</span> ${Released}</p>

              <p><span>Runtime:</span> ${Runtime}</p>

              <p><span>Genre:</span> ${Genre}</p>

              <p><span>Director:</span> ${Director}</p>

              <p><span>Writer:</span> ${Writer}</p>

              <p><span>Actors:</span> ${Actors}</p>

              <p><span>Plot:</span> ${Plot}</p>

            </div>

          </div>

        </div>
      `;
    });
}
