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

for (let i = 0; i < pokemonList.length; i++) {
  // check if the height of the pokemon is below 0.7
  if (pokemonList[i].height < 0.7) {
    // if it is below 0.7:
    // prettier-ignore
    document.write(pokemonList[i].name +' (height: ' + pokemonList[i].height + ')' + " - Wow! That's small!" + '<br>');
  } else {
    // if the height is above 0.7:
    document.write(
      pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' + '<br>'
    );
  }
}
