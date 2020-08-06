//Material components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//Utils
import Router from 'next/router';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		backgroundColor: '#e4ffdc',
		minHeight: 620,
		textAlign: 'center',
		[theme.breakpoints.down('xs')]: {
			minHeight: 520,
		}
	},
	title: {
		color: '#2c2c2c',
		fontSize: '5rem',
		margin: '0px 0px 30px 0px',
		[theme.breakpoints.down('md')]: {
			fontSize: '4.5rem',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '3.5rem',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '2.5rem',
			marginBottom: 20,
		}
	},
	subTitle: {
		fontSize: '1.5rem',
		margin: '0px 0px 100px 0px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.3rem',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.1rem',
			marginBottom: 80,
		}
	},
	CTA: {
		backgroundColor: '#E69E0C',
		color: 'white',
		fontSize: '2rem',
		fontWeight: 550,
		padding: '5px 30px',
		borderRadius: '40px',
		fontFamily: 'serif',
		'&:hover': {
			color: '#E69E0C',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.8rem',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.5rem',
			padding: '4px 25px',
		}
	}
}));

const HomeBanner = () => {
	const classes = useStyle();
	return (
		<Grid item xs={12} className={classes.root} container justify="center" alignItems="center">
			<Grid item xs={11} md={10} container direction="column" alignItems="center">
				<Grid item>
					<h1 className={classes.title}> Nature in your house? </h1>
				</Grid>
				<Grid item>
					<p className={classes.subTitle}> Make your house <span style={{color: '#E69E0C'}}>golden</span> by adding a <span style={{color: '#2F7E18'}}>garden</span>. </p>
				</Grid>
				<Grid item>
					<Button className={classes.CTA} onClick={() => Router.push('/products')}> EXPLORE </Button>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default HomeBanner;