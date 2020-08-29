import "./style.css";
let lista = document.querySelector('.list');
let buttons = [];

const fetchList = () => {
  return fetch('https://swapi.dev/api/people/', {
    method: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
  })
  .then(response => response.json())
  .then(responseData => {
    let list = responseData.results;
    let lista = document.createElement("ul");
    list.forEach(personagem => {
      let {
        name: nome,
        eye_color: color,
        ...rest
      } = personagem

      lista.appendChild(criarLista(nome, color));
      document.querySelector("#app").appendChild(lista);
    })
  })
  .then(() => setButtons())
  .catch(error => console.warn(error));
}

fetchList();

const criarLista = (nome, cor) => {
  let item = document.createElement('li');
  item.setAttribute("class", nome.split(' ').join(''));
  item.innerHTML = `
  <p style="color:${cor}">${nome}</p>
  <button id=${nome.split(' ').join('')}>remover</button>
  `
  return item;
}

const setButtons = () => {
  buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener("click", item => {
      let selected = document.querySelector('.' + item.target.id);
      selected.remove();
    })
  })
}