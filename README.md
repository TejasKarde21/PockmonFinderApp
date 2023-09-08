# PockmonFinderApp

Getting DOM Elements-
pokemonDetails Array:
To store detail in array we create Empty array;
fetchPokemonDetails Function:
This function is responsible for fetching details about Pokémon using the PokeAPI. It makes 150 fetch requests (for Pokémon IDs 1 to 150)
and stores the promises in an array (promises). Once all promises resolve, it maps over the data to extract relevant information like ID,
name, abilities, and types. It then creates Pokémon cards using createPokemonCard function.
createPokemonCard Function:
This function is responsible for creating the card elements for a given Pokémon.
It creates elements for the front and back of the card, adds various child elements
(e.g., images, headings, abilities), and appends them to the cardsContainer.

flipCard Function:
This function is attached as an event listener to the cardDiv elements.
When a card is clicked, it toggles the class flipCard, which triggers a CSS transition to flip the card.

Search Button Event Listener:
This event listener triggers when the search button is clicked. 
It prevents the default form submission behavior, filters the pokemonDetails array 
based on the search value, clears the cardsContainer, and creates new Pokémon cards.

Reset Button Event Listener:
This event listener triggers when the reset button is clicked. 
It prevents the default form submission behavior, clears the cardsContainer, and refetches Pokémon details.

function call to get all the pockemon
