//Material Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';

//Logo
import BrandLogo from '../../public/images/brand_logo.svg';


//Custom components
import NavDrawer from './navdrawer';

//Utils
import React from 'react';
import Link from 'next/link';

//Material Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		backgroundColor: '#e4ffdc',
		zIndex: 3,
		boxShadow: 'none',
	},
	toolbar: {
		minHeight: 60,
	},
	brandTitle: {
		margin: 0,
		height: '1.6rem',
		width: 120,
		fontStyle: 'italic',
	},
	navLinks: {
		margin: 0,
		color: 'black',
		letterSpacing: '1.5px',
	},
	linkContainer: {
		display: 'flex',
		fontSize: '0.85rem',
		'& > div.MuiGrid-item': {
			marginLeft: 60,
			'& > p': {
				cursor: 'pointer',
				'&:hover': {
					color: '#E69E0C',
				}
			},
			[theme.breakpoints.down('sm')]: {
				margin: '0px 15px'
			},
		},
	},
	menuIcon: {
		borderRadius: '10px', 
		padding: 5,
		transition: 'background-color 0.1s',
		'&:active': {
			backgroundColor: 'white'
		}
	},
	menuIconLines: {
		width: 20, 
		height: 2, 
		backgroundColor: 'gray', 
		margin: '3px 0px'
	}
}));

const Navbar = (props) => {
	const classes = useStyle();
	const navLinks = props.navs.map((item, index) => {
		return <Grid item key={index}>
			<Link href={item.link}>
				<p className={classes.navLinks}> {item.name} </p>
			</Link>
		</Grid>;
	})
	return ( 
		<React.Fragment>
			<AppBar position="absolute" className={classes.root}>
				<Grid item xs={12} container justify="center">
					<Grid item xs={11} md={10}>	
						<Toolbar className={classes.toolbar}>
							<Grid item xs={12} container justify="space-between" alignItems="center">
								<Grid item style={{display: 'flex', alignItems: 'center'}}>
									<Grid item>
										<Hidden mdUp>
											<IconButton style={{padding: 2}} onClick={props.setActive}>
												<Grid item container direction="column" className={classes.menuIcon}>
													{[1,2,3].map((item, key) => {
														return <Grid item key={key}>
															<div className={classes.menuIconLines} />
														</Grid>	
													})}
												</Grid>
											</IconButton>
										</Hidden>
									</Grid>
									<Grid item container>
										<BrandLogo viewBox="0 0 1399.531 278.313" className={classes.brandTitle}/>
									</Grid>
								</Grid>
								<Grid item className={classes.linkContainer}>
									<Hidden smDown>
										{navLinks}
									</Hidden>
								</Grid>
							</Grid>
						</Toolbar>
					</Grid>
				</Grid>
			</AppBar>
			<Toolbar className={classes.toolbar}/>
		</React.Fragment>
	);
}

export default Navbar;