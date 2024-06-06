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

pokemonList.forEach(function (pokemon) {
  // check if the height of the pokemon is below 0.7
  if (pokemon.height < 0.7) {
    // if it is below 0.7:
    // prettier-ignore
    document.write('<p>' + pokemon.name +' (height: ' + pokemon.height + ')' + " - Wow! That's small!" + '</p>');
  } else {
    // if the height is above 0.7:
    // prettier-ignore
    document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')' + '</p>'
  );
  }
});
