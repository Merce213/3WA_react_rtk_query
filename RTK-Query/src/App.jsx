import { useState } from "react";
import "./App.css";
import { useGetPokemonByNameQuery } from "./app/services/pokemon";

const App = () => {
	const [pokemonName, setPokemonName] = useState("");
	const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName, {
		skip: !pokemonName,
	});
	console.table({ data, error, isLoading });

	return (
		<section>
			<div>
				<h1>Pokemon</h1>
				<button onClick={() => setPokemonName("bulbasaur")}>
					fetch bulbasaur details
				</button>
				{isLoading && <p>Loading...</p>}
				{!isLoading && !error && data && (
					<div>
						<h2>{data?.name}</h2>
						<img
							src={data?.sprites?.front_default}
							alt={data?.name}
						/>
					</div>
				)}
			</div>
		</section>
	);
};

export default App;
