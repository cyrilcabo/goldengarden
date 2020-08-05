//Material components
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

//Custom components
import Navbar from './Navigation/navbar';
import NavDrawer from './Navigation/navdrawer';
import Footer from './Footer/footer';

//Utils
import React from 'react';
import Head from 'next/head';

const Layout = (props) => {
	const [active, handleActive] = React.useState(false);
	React.useEffect(() => {
		const handleScroll = (e) => {
			handleActive(false);
			window.removeEventListener('scroll', handleScroll);
		}
		if (active) window.addEventListener('scroll', handleScroll);
	}, [active]);
	const setActive = () => handleActive(active ?false :true);
	const navs = [{name: 'HOME', link: '/'}, {name: 'PRODUCTS', link: '/products'}, {name: 'ABOUT', link: '/about'}];
	return (
		<Grid item xs={12}>
			<Head>
				<title> goldengarden </title>
				<meta name="viewport" content="" />
			    <meta name="viewport" content="width=device-width, user-scalable=no" />
			</Head>
			<Navbar navs={navs} setActive={setActive} active={props.active} />
			<Hidden mdUp>
				<NavDrawer active={active} navs={navs} setActive={setActive} />
			</Hidden>
			{props.children}
			<Footer navs={navs} />
			<style jsx global>{`
				html {
					scroll-behavior: smooth;
				}
				body {
					margin: 0;
				}
			`}</style>
		</Grid>
	);
}

export default Layout;