import React, { Component } from 'react';
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
	backgroundColor: '#ff1a1a'
}

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}
	componentDidCatch(error, info) {
		this.setState({
			hasError: true
		});
	}
	render() {
		if(this.state.hasError) {
			return (
				<div>
				<Card style={picStyle}>
					<CardMedia
						aspectRatio="square"
						image="https://cdn.dribbble.com/users/5637/screenshots/1565044/missing_file_02_1x.jpg"
					/>
				</Card>
				<Card style={textStyle}>
				<CardTitle
						title="Sorry Something went wrong!!!"
						subtitle="This item cannot be found. Please check back later"
					/>
				</Card>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;