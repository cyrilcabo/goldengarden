//Material components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//Custom components
import ProductsContainer from '../Products/container';

//Utils
import Router from 'next/router';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 750,
		textAlign: 'center',
	},
	title: {
		fontSize: '2.5rem',
		margin: '120px 0px 70px 0px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2rem',
		}
	},
	CTA: {
		color: '#E69E0C',
		padding: '5px 30px',
		backgroundColor: '#f1f1f1',
		borderRadius: '30px',
		boxShadow: '0px 0px 2px 1px gray',
		fontSize: '1.2rem',
		fontWeight: 550,
		fontFamily: 'serif',
		textTransform: 'none',
		marginBottom: 100,
		[theme.breakpoints.down('sm')]: {
			padding: '4px 20px',
			fontSize: '1rem',
		}
	}
}));

const HomeProducts = (props) => {
	const classes = useStyle();
	return (
		<Grid item xs={12} className={classes.root} container justify="center">
			<Grid item container xs={11} sm={10} lg={8} direction="column" alignItems="center">
				<Grid item>
					<p className={classes.title}> Check our <span style={{color: '#E69E0C'}}>Golden</span> Products </p>
				</Grid>
				<Grid item>
					<ProductsContainer products={props.products.filter(item => item.featured)} />
				</Grid>
				<Grid item>
					<Button className={classes.CTA} onClick={() => Router.push('/products')}> See all </Button>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default HomeProducts;