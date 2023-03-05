import { keyApi } from "./cod/chave.js"

const caixaFilmes = document.querySelector(".containerFilmes")
const input = document.querySelector("input")
const botaoBuscar = document.querySelector('.searchIcon')
const check = document.querySelector("input[type='checkbox']")

check.addEventListener('change', checkStatus)

botaoBuscar.addEventListener('click', buscarFilme)

input.addEventListener('keyup', function(event){
    console.log(event.key)
    if (event.keyCode == 13) {
        buscarFilme()
        return
    }
})

function checkStatus() {
  const isChecked  = check.checked
  if (isChecked) {
    limparfilmes()
    const filme = CriarFavoritos() || []
    filme.forEach(filmes => renderizarFilmes(filmes))
  } else {
    limparfilmes()
    todosfilmes()
  }
}

async function buscarFilme() {
    const valordoInput = input.value
    if (valordoInput != '') {
        limparfilmes()
        const containerFilmes = await buscarFilmes(valordoInput)
        containerFilmes.forEach(filmes => renderizarFilmes(filmes))
    }
}

function limparfilmes() {
    caixaFilmes.innerHTML = ''
}

async function buscarFilmes(title) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&query=${title}&language=en-US&page=1`
    const respostaFetch = await fetch(url)
    const { results } = await respostaFetch.json()
    return results
}

async function entradaFilmesPopular() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${keyApi}&language=en-US&page=1`
    const respostaFetch = await fetch(url)
    const { results } = await respostaFetch.json()
    return results
}

async function todosfilmes() {
    const containerFilmes = await entradaFilmesPopular()
    containerFilmes.forEach(filmes => renderizarFilmes(filmes))
}

window.onload = function() {
    todosfilmes()
}

function renderizarFilmes(filmes) {

    const {id, poster_path, title, vote_average, release_date, overview} = filmes
    const favoritado = checkMovieIsFavorited(id)
    const estrela = 'imgs/star.svg'

    const ano = new Date(release_date).getFullYear();
    const imagem = `https://image.tmdb.org/t/p/w500${poster_path}`;

    const criandoFilmes = document.createElement('div');
    criandoFilmes.classList.add('filmes');
    caixaFilmes.appendChild(criandoFilmes);

    const criandoNomeFilme = document.createElement('div');
    criandoNomeFilme.classList.add('caixaNomeFilme');
    criandoFilmes.appendChild(criandoNomeFilme);

    const criandoFotoFilme = document.createElement('div');
    criandoFotoFilme.classList.add('caixaFotoFilme');
    criandoNomeFilme.appendChild(criandoFotoFilme);

    const caixaimg = document.createElement('img');
    caixaimg.src = imagem;
    criandoFotoFilme.appendChild(caixaimg);

    const criandoFavStar = document.createElement('div');
    criandoFavStar.classList.add('caixaFavStar');
    criandoNomeFilme.appendChild(criandoFavStar);

    const criandoH2 = document.createElement('h2');
    criandoH2.textContent = `${title} ` + `(${ano})`;
    criandoFavStar.appendChild(criandoH2);

    const criandoEstrelaFilme = document.createElement('div');
    criandoEstrelaFilme.classList.add('caixaEstrelaFilme');
    criandoFavStar.appendChild(criandoEstrelaFilme);


    const criandoImgEstrelaFilme = document.createElement('img');
    criandoImgEstrelaFilme.src = estrela;
    criandoEstrelaFilme.appendChild(criandoImgEstrelaFilme);


    const criandoParagrafoEstrelaFilme = document.createElement('p');
    criandoParagrafoEstrelaFilme.classList.add('space');
    criandoParagrafoEstrelaFilme.textContent = vote_average;
    criandoEstrelaFilme.appendChild(criandoParagrafoEstrelaFilme);

    const criandoImg2EstrelaFilme = document.createElement('img');
    criandoImg2EstrelaFilme.src = favoritado ? 'imgs/heart-red.svg' : 'imgs/heart.svg';
    criandoImg2EstrelaFilme.classList.add("favoriteImage");
    criandoImg2EstrelaFilme.addEventListener('click', (event) => botaoFavoritoPressionado(event, filmes));

    criandoEstrelaFilme.appendChild(criandoImg2EstrelaFilme);

    const criandoParagrafo2EstrelaFilme = document.createElement('p');
    criandoParagrafo2EstrelaFilme.textContent = "Favoritar";
    criandoEstrelaFilme.appendChild(criandoParagrafo2EstrelaFilme);
    
    const criandoDescricaoFilme = document.createElement('div');
    criandoDescricaoFilme.classList.add('CaixaDescricaoFilme');
    criandoFilmes.appendChild(criandoDescricaoFilme);

    const criandoParagrafoDescricaoFilme = document.createElement('p');
    criandoParagrafoDescricaoFilme.textContent = overview;
    criandoDescricaoFilme.appendChild(criandoParagrafoDescricaoFilme);


};

function botaoFavoritoPressionado(event, filmes) {
    const favoriteState = {
      favorito: 'imgs/heart-red.svg',
      naofavorito: 'imgs/heart.svg'
    }
  
    if(event.target.src.includes(favoriteState.naofavorito)) {
      event.target.src = favoriteState.favorito
      salvarnolocal(filmes)
    } else {
      event.target.src = favoriteState.naofavorito
      excluirlocal(filmes.id)
    }
  }
  
  function CriarFavoritos() {
    return JSON.parse(localStorage.getItem('favoritaFilmes'))
  }
  
  function salvarnolocal(filmes) {
    const movies = CriarFavoritos() || []
    movies.push(filmes)
    const moviesJSON = JSON.stringify(movies)
    localStorage.setItem('favoritaFilmes', moviesJSON)
  }
  
  function checkMovieIsFavorited(id) {
    const movies = CriarFavoritos() || []
    return movies.find(filmes => filmes.id == id)
  }
  
  function excluirlocal(id) {
    const movies = CriarFavoritos() || []
    const findMovie = movies.find(filmes => filmes.id == id)
    const newMovies = movies.filter(filmes => filmes.id != findMovie.id)
    localStorage.setItem('favoritaFilmes', JSON.stringify(newMovies))
  }