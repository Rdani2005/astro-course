import type { FavoritePokemonModel } from "@poke-app/models";
import { createSignal, For } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemon";

function getLocalStoragePokemons(): Array<FavoritePokemonModel> {
  const favoritePokemons: Array<FavoritePokemonModel> = JSON.parse(
    localStorage.getItem("favorites") ?? "[]",
  );
  return favoritePokemons;
}

export function FavoritePokemons() {
  const [pokemons, setPokemons] = createSignal<Array<FavoritePokemonModel>>(
    getLocalStoragePokemons(),
  );
  return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
      <For each={pokemons()}>
        {(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}
      </For>
    </div>
  );
}
