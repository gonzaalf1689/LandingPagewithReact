import React from "react";
import NavBar from "./NavBar";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBarComponent from "./NavBar";
import JumbotronComponent from "./Jumbotron";


//create your first component
const Home = () => {
	return (
		<div>
			<NavBarComponent />
			<JumbotronComponent />
		</div>
	)
};

export default Home;
