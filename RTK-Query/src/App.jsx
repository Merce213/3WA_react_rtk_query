import { useState } from "react";
import "./App.css";
import { useGetPokemonByNameQuery } from "./app/services/pokemon";
import { useGetPastriesQuery } from "./app/services/pastries";

const App = () => {
	/* const [pokemonName, setPokemonName] = useState("");
	const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName, {
		skip: !pokemonName,
	});
	console.table({ data, error, isLoading }); */

	const { data, error, isLoading } = useGetPastriesQuery();
	console.table({ data, error, isLoading });

	return (
		<section>
			<div>
				{/* <h1>Pokemon</h1>
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
				)} */}

				<h1>Pastries</h1>
				{isLoading && <p>Loading...</p>}
				{!isLoading && !error && data && (
					<div>
						{data.map((pastry) => (
							<div key={pastry.id}>
								<h2>{pastry.name}</h2>
								<img src={pastry.image} alt={pastry.name} />

								<p>
									{pastry.quantity}{" "}
									{pastry.quantity > 1 ? "pieces" : "piece"}
								</p>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default App;
