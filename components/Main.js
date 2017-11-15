import React from 'react';
import Header from './Header';
import PhoneList from './PhoneList';
import Footer from './Footer';

/* With React 16 we can return an array */
const Main = () => [
	<Header key={0} />,
	<PhoneList key={1} />,
	<Footer key={2} />
];

export default Main;