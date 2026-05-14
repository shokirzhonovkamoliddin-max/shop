const api = `https://www.omdbapi.com/?s=terminator&apikey=c65fcde9`;
const elloading = document.querySelector(".loading");
const ellist = document.querySelector(".cards");

const getdata = (url) => {
    elloading.innerHTML = "Loading...";
  fetch(url)    
    .then((response) => response.json())
    .then((data) => {
      showdata(data);
    })
    .finally(() => {
        elloading.innerHTML = "";
    })
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
    console.log("not found");
  }
}
