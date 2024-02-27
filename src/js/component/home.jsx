import React from "react";
import CardComponent from "./card.jsx"
import ContainerFluid from "./containerFluid.jsx"
import Row from "./row.jsx"
import NavBarComponent from "./NavBar";
import JumbotronComponent from "./Jumbotron";
import NavBar from "./NavBar";

//create your first component
const Home = () => {
	return (
		<ContainerFluid>
				<NavBar />
			<ContainerFluid>
				<Row>
					<CardComponent />
					<CardComponent />
					<CardComponent />
					<CardComponent />
				</Row>
			</ContainerFluid>
		</ContainerFluid>
		)
	
};

export default Home;
