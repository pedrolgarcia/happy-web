import React from 'react';

import './styles.css'; 

import logo from '../../assets/logo.svg';

function Landing() {
  	return (
    	<div id="page-landing">
      		<div className="content-wrapper">
				<img src={logo} alt="Happy" />

				<main>
					<h1>Leve a felicidade para o mundo</h1>
					<p>Visite orfanatos e mude o dia de muitas crianças.</p>
				</main>

				<div className="location">
					<strong>Rio de Janeiro</strong>
					<span>Rio de Janeiro</span>
				</div>
			</div>
    	</div>
  	);
}

export default Landing;
