import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'react-toolbox/lib/card';

const picStyle = {
	width: '300px',
	height: '500px',
	marginLeft: '20px',
	marginTop: '20px',
	display: 'flex'
};

const textStyle = {
	width: '300px',
	height: '100px',
	marginLeft: '20px',
	marginTop: '20px',
	display: 'flex',
	backgroundColor: '#66ffff'
}


const Phone = (props) => (
	<div>
	<Card style={picStyle}>
		<CardMedia
		    aspectRatio="square"
			image={props.phone.imageUrl}
		/>
	</Card>
	<Card style={textStyle}>
	<CardTitle
			title={props.phone.name.toUpperCase()}
		/>
		<CardText>{props.phone.price}</CardText>
	</Card>		
	</div>
);

export default Phone;