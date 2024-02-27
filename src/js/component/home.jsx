import React from "react";
import NavBar from "./NavBar";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron";

//create your first component
const Home = () => {
	return (
		NavBar,
		Jumbotron,
	)
};

export default Home;
