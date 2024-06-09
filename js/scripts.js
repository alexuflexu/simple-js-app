let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: 'Charizard',
      height: 1.7,
      type: ['fire', 'flying'],
    },
    {
      name: 'Jigglypuff',
      height: 0.5,
      type: ['fairy', 'normal'],
    },
    {
      name: 'Houndoom',
      height: 1.4,
      type: ['dark', 'fire'],
    },
    {
      name: 'Dewgong',
      height: 1.7,
      type: ['ice', 'water'],
    },
  ];

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function addListItem(pokemon) {
    let pokemonUl = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('custom-button');
    listItem.appendChild(button);
    pokemonUl.appendChild(listItem);
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  return {
    getAll: function () {
      return pokemonList;
    },
    add: function (pokemon) {
      pokemonList.push(pokemon);
    },
    addListItem: addListItem,
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});