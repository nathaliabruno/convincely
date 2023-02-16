import React from 'react';
import axios from "axios";
// import _ from "lodash";

const url = 'https://the-one-api.dev/v2/movie';
const apiToken = 'SlauvktIL11a0f5QoDXy';

const getMovies = async () => axios.get(url, {
		headers: {
			Authorization: `Bearer ...`
		}
	}).then((response) => {
		console.log(response, "response");
	});

const Movies = () => {
	return (
		<div className="challenge">Insert code here ... good luck &#128540;!</div>
	);
}

export default Movies