import React from "react";
import CardComponent from "./card.jsx"
import ContainerFluid from "./containerFluid.jsx"
import Row from "./row.jsx"

//create your first component
const Home = () => {
	return (

		
		<ContainerFluid>
			<Row>
				<CardComponent />
				<CardComponent />
				<CardComponent />
				<CardComponent />
			</Row>
		</ContainerFluid>

	)
};

export default Home;
