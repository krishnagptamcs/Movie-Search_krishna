const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const cardNew = document.querySelector("#card");

async function getMovies(api) {
  const response = await fetch(api);
  const data = await response.json();

  showMovie(data.results);
}


// calling getmovies function 
getMovies(APIURL);


// showmovies function
const showMovie = (data) => {

    // every time it empty
  cardNew.innerHTML = "";

  // applying for each method in all object
  data.forEach((items) => {
    //creating div
    const box = document.createElement("div");
    
    // adding class list
    box.classList.add("movieCard");

    box.innerHTML = `  
                     <img src="${IMGPATH + items.poster_path}" alt=""/>
        
                       <div class="overlay">
        
                    <div class="header">
                        <h2>${items.original_title}</h2>
                        <span>${items.vote_average}</span>
                    </div>
        
                    <h3>Movie Overview:</h3>
                    <p>${items.overview}
                        </p>
                </div>`;


                //adding created child in card div
    cardNew.appendChild(box);
  });
};

// adding event listner on search input

document.querySelector("#search").addEventListener("keyup", function (event) {
  if (event.target.value != "") {

    // passing seacrh api
    getMovies(SEARCHAPI + event.target.value);
  } else {
    getMovies(APIURL);
  }
});
