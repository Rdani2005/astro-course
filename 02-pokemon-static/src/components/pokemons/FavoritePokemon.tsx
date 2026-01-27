import type { FavoritePokemonModel as FavoritePokemonModel } from "@poke-app/models";
import { createSignal, Show } from "solid-js";

interface Props {
  pokemon: FavoritePokemonModel;
}

export function FavoritePokemonCard({ pokemon }: Props) {
  const [isVisible, setIsVisible] = createSignal(true);

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const deleteFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") ?? "[]",
    ) as FavoritePokemonModel[];

    const newFavorites = favorites.filter((p) => p.id !== pokemon.id);

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsVisible(false);
  };

  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center">
        <a href={`/pokemons/${pokemon.name}`}>
          <img
            src={imageSrc}
            alt={pokemon.name}
            width="96"
            height="96"
            style={`view-transition-name: ${pokemon.name}-image`}
          />
          <p class="capitalize">
            #{pokemon.id} {pokemon.name}
          </p>
        </a>
        <button onClick={deleteFavorite} class="text-red-400">
          Borrar
        </button>
      </div>
    </Show>
  );
}
