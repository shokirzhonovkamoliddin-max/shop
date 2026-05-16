const api = `https://www.omdbapi.com/?apikey=c65fcde9&s=terminator`;

const elloading = document.querySelector(".loading");
const ellist = document.querySelector(".cards");
const elform = document.querySelector(".form");
const elsearch = document.querySelector(".search");

const getdata = (url) => {
  elloading.innerHTML = "Loading...";
  ellist.innerHTML = "";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showdata(data);
    })
    .finally(() => {
      elloading.innerHTML = "";
    });
};

getdata(api);

function showdata(movies) {
  if (movies.Response === "True") {
    const { Search } = movies;

    Search.forEach((element) => {
      const { Title, Poster, Year, Type } = element;

      ellist.innerHTML += `
        <div class="card">
          <img src="${Poster}" alt="" />
          <h2>${Title}</h2>
          <p>${Year}</p>
          <p>${Type}</p>
        </div>
      `;
    });
  } else {
    ellist.innerHTML = `<h2>Movie not found</h2>`;
  }
}

elform.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchValue = elsearch.value.trim();

  if (searchValue !== "") {
    getdata(`https://www.omdbapi.com/?apikey=c65fcde9&s=${searchValue}`);
  }
});