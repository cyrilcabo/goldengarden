//Material components
import Grid from '@material-ui/core/Grid';

//Custom components
import ProductsContainer from '../components/Products/container';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		textAlign: 'center',
		marginBottom: 20,
	},
	title: {
		fontSize: '3.5rem',
		margin: '80px 0px 20px 0px',
		[theme.breakpoints.down('md')]: {
			fontSize: '3rem',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.5rem',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '2rem',
			marginBottom: 15,
		}
	},
	subTitle: {
		fontSize: '1.3rem',
		margin: '0px 0px 100px 0px',
		[theme.breakpoints.down('md')]: {
			fontSize: '1.2rem',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.1rem',
			marginBottom: 90,
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1rem',
			marginBottom: 80,
		}
	},
	customProduct: {
		margin: '0px 25px 50px 25px',
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			margin: '0px 0px 50px 0px',
		}
	}
}));

const Products = (props) => {
	const classes = useStyle();
	return (
		<Grid item className={classes.root} xs={12} container justify="center">
			<Grid item container direction="column" xs={11} md={10} alignItems="center">
				<Grid item>
					<h1 className={classes.title}> <span style={{color: '#E69E0C'}}>Golden</span> Products </h1>
				</Grid>
				<Grid item>
					<p className={classes.subTitle}> Check out these products to make your house more amazing! </p>
				</Grid>
				<Grid item>
					<ProductsContainer products={props.store.products} withButton customProduct={classes.customProduct} />
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Products;