import { keyApi } from "./api.js"



const caixaFilmes = document.querySelector(".containerFilmes");

const containerFilmes = [
    {
        imagem: 'imgs/image-1.svg',
        titulo: 'Vingadores: Endgame',
        nota: 9.7,
        estrela: 'imgs/star.svg',
        ano: 2019,
        descrição: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        favoritado: false
    },
    {
        imagem: 'imgs/image-2.svg',
        titulo: 'Doctor Strange',
        nota: 9,
        estrela: 'imgs/star.svg',
        ano: 2022,
        descrição: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        favoritado: true
    },
    {
        imagem: 'imgs/image-3.svg',
        titulo: 'Batman',
        nota: 9.5,
        estrela: 'imgs/star.svg',
        ano: 2022,
        descrição: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        favoritado: false
    },
    {
        imagem: 'imgs/image-4.svg',
        titulo: 'Avatar',
        nota: 9.9,
        estrela: 'imgs/star.svg',
        ano: 2009,
        descrição: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        favoritado: false
    },
    {
        imagem: 'imgs/image-5.svg',
        titulo: 'Avengers: Age of Ultron',
        nota: 7.6,
        estrela: 'imgs/star.svg',
        ano: 2015,
        descrição: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        favoritado: false
    },
    {
        imagem: 'imgs/image-6.svg',
        titulo: 'Vingadores: Guerra do Infinito ',
        nota: 8.9,
        estrela: 'imgs/star.svg',
        ano: 2018,
        descrição: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        favoritado: false
    },
    {
        imagem: 'imgs/image-8.svg',
        titulo: 'Os Vingadores',
        nota: 7.2,
        estrela: 'imgs/star.svg',
        ano: 2012,
        descrição: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        favoritado: false
    }
];

window.onload = function () {
    containerFilmes.forEach(filmes => renderizarFilmes(filmes))
};

function renderizarFilmes(filmes) {

    const { imagem, titulo, nota, ano, estrela, descrição, favoritado } = filmes

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
    criandoH2.textContent = `${titulo} ` + `(${ano})`;
    criandoFavStar.appendChild(criandoH2);

    const criandoEstrelaFilme = document.createElement('div');
    criandoEstrelaFilme.classList.add('caixaEstrelaFilme');
    criandoFavStar.appendChild(criandoEstrelaFilme);


    const criandoImgEstrelaFilme = document.createElement('img');
    criandoImgEstrelaFilme.src = estrela;
    criandoEstrelaFilme.appendChild(criandoImgEstrelaFilme);


    const criandoParagrafoEstrelaFilme = document.createElement('p');
    criandoParagrafoEstrelaFilme.classList.add('space');
    criandoParagrafoEstrelaFilme.textContent = nota;
    criandoEstrelaFilme.appendChild(criandoParagrafoEstrelaFilme);

    const criandoImg2EstrelaFilme = document.createElement('img');
    criandoImg2EstrelaFilme.src = favoritado ? 'imgs/heart-red.svg' : 'imgs/heart.svg';
    criandoEstrelaFilme.appendChild(criandoImg2EstrelaFilme);

    const criandoParagrafo2EstrelaFilme = document.createElement('p');
    criandoParagrafo2EstrelaFilme.textContent = "Favoritar";
    criandoEstrelaFilme.appendChild(criandoParagrafo2EstrelaFilme);

    const criandoDescricaoFilme = document.createElement('div');
    criandoDescricaoFilme.classList.add('CaixaDescricaoFilme');
    criandoFilmes.appendChild(criandoDescricaoFilme);

    const criandoParagrafoDescricaoFilme = document.createElement('p');
    criandoParagrafoDescricaoFilme.textContent = descrição;
    criandoDescricaoFilme.appendChild(criandoParagrafoDescricaoFilme);


};
