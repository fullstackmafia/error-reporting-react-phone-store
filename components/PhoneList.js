import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Phone from './Phone';

export default class PhoneList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phones: [{
				name: 'iPhone 8',
				price: 'Price: $840',
				imageUrl: 'http://res.cloudinary.com/fullstackmafia/image/upload/v1510773873/Screenshot_from_2017-11-15_20-19-26_mhct97.png'
			}, {
				name: 'iPhone X',
				price: 'Price: $1800',
				imageUrl: 'http://res.cloudinary.com/fullstackmafia/image/upload/v1510773873/Screenshot_from_2017-11-15_20-20-31_qfo2dm.png'
			}, {
				name: 'Samsung A5',
				price: 'Price: $400',
				imageUrl: 'http://res.cloudinary.com/fullstackmafia/image/upload/v1510773873/Screenshot_from_2017-11-15_20-23-17_lvbsp8.png'
			}, {
				price: 'Price: $470',
				imageUrl: 'http://res.cloudinary.com/fullstackmafia/image/upload/v1510773873/Screenshot_from_2017-11-15_20-23-17_lvbsp8.png'
			}]
		};
	}

	renderPhones() {
		return this.state.phones && this.state.phones.map((phone) => {
			return (
				<ErrorBoundary key={phone.name}>
					<Phone phone={phone} />
				</ErrorBoundary>
			);
		});
	}

	render() {
		return (
			<div className="PhoneList" style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap' }}>
				{ this.renderPhones() }
			</div>
		);
	}
}