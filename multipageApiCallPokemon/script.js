const SearchBar = document.getElementById("searchBar");
const cardsContainer = document.getElementById("cardsContainer");
const searchButton = document.getElementById("search");
const resetButton = document.getElementById("resetButton");

const pokemonDetails = [];
const fetchPokemonDetails = () => {
  const promises = [];
  for (let i = 1; i <= 150; i++) {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const promise = fetch(pokemonUrl).then((response) => {
      return response.json();
    });
    promises.push(promise);
    // promises.push(fetch(pokemonUrl).then((response) => response.json()));
  }
  Promise.all(promises).then((data) => {
    data.map((ele) => {
      console.log();
      const pokemonObj = {
        frontShinyImg: ele.sprites["front_shiny"],
        id: ele.id,
        name: ele.name,
        abilities: ele.abilities.map((item) => {
          return item.ability.name;
        }),
        types: ele.types[0].type.name,
      };
      pokemonDetails.push(pokemonObj);
    });
    pokemonDetails.map((pokemon) => {
      createPokemonCard(pokemon);
    });
  });
};

const createPokemonCard = (pokemon) => {
  const cardFront = document.createElement("div");
  cardFront.classList.add("front");
  const cardBack = document.createElement("div");
  cardBack.classList.add("back");
  const cardDiv = document.createElement("div");
  const span = document.createElement("span");
  span.classList.add("span");
  const img = document.createElement("img");
  img.classList.add("imge");
  const heading = document.createElement("h2");
  const abilitiesDiv = document.createElement("div");
  const abilitiesParas = pokemon.abilities.map((ele) => {
    const abilityPara = document.createElement("p");
    abilityPara.innerText = ele;
    return abilityPara;
  });
  const typePara = document.createElement("p");

  span.innerText = pokemon.id;
  img.src = pokemon.frontShinyImg;
  heading.innerText = pokemon.name;
  typePara.innerText = pokemon.types;
  cardDiv.classList.add("cardDiv");
  cardFront.appendChild(span);
  cardFront.appendChild(img);
  cardFront.appendChild(heading);
  abilitiesParas.map((ele) => {
    abilitiesDiv.appendChild(ele);
  });
  cardFront.appendChild(abilitiesDiv);
  abilitiesDiv.classList.add("abilitiesDiv");
  cardFront.appendChild(typePara);
  cardDiv.appendChild(cardFront);

  // Back side
  // const backSpan = document.createElement("span");
  const backImg = document.createElement("img");
  backImg.classList.add("imge");
  const backHeading = document.createElement("h2");
  backHeading.classList.add("he");
  const backTypePara = document.createElement("p");
  backTypePara.classList.add("para");

  // backSpan.innerText = pokemon.id;
  backImg.src = pokemon.frontShinyImg;
  backHeading.innerText = pokemon.name;
  backTypePara.innerText = pokemon.types;

  // cardBack.appendChild(backSpan);
  cardBack.appendChild(backImg);
  cardBack.appendChild(backHeading);
  cardBack.appendChild(backTypePara);

  cardDiv.appendChild(cardBack);
  cardsContainer.appendChild(cardDiv);

  cardDiv.addEventListener("click", flipCard);
};

function flipCard() {
  this.classList.toggle("flipCard");
}

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const filteredValues = pokemonDetails.filter((ele) =>
    ele.name.includes(SearchBar.value.toLowerCase())
  );
  cardsContainer.innerHTML = "";
  filteredValues.map((pokemon) => {
    createPokemonCard(pokemon);
  });
  SearchBar.value = "";
});

resetButton.addEventListener("click", (e) => {
  e.preventDefault();
  cardsContainer.innerHTML = "";
  fetchPokemonDetails();
});

fetchPokemonDetails();