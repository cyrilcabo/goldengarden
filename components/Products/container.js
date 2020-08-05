//Material components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	productsContainer: {
		marginBottom: 70,
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		}
	},
	product: {
		textAlign: 'center',
		'& > div.MuiGrid-item': {
			marginBottom: 12,
			[theme.breakpoints.down('sm')]: {
				width: '80%',
			}
		},
		[theme.breakpoints.down('sm')]: {
			marginBottom: 15,
		}
	},
	productImg: {
		[theme.breakpoints.down('md')]: {
			height: 200,
		},
		[theme.breakpoints.down('sm')]: {
			height: 180,
		},
		[theme.breakpoints.down('xs')]: {
			height: 150,
		}
	},
	productTitle: {
		fontSize: '1.5rem',
		margin: 0,
		color: '#2F7E18',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.3rem',
		}
	},
	productDetails: {
		fontSize: '1rem',
		margin: 0,
		lineHeight: '22px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.9rem',
		}
	},
	productBtn: {
		backgroundColor: '#E69E0C',
		color: 'white',
		padding: '5px 20px',
		borderRadius: '30px',
		fontWeight: 550,
	}
}));

const ProductsContainer = (props) => {
	const classes = useStyle();
	const products = props.products.map((item, key) => {
		return <Grid item key={key} xs={11} sm={6} md={3} container direction="column" alignItems="center" className={[classes.product, props.customProduct].join(' ')}>
			<Grid item>
				<img className={classes.productImg} src={`/images/products/${item.img}`} />
			</Grid>
			<Grid item>
				<h3 className={classes.productTitle}> {item.name} </h3>
			</Grid>
			<Grid item>
				<p className={classes.productDetails}> {item.details} </p>
			</Grid>
			{props.withButton	
				?<Grid item>
					<Button className={classes.productBtn}> Buy now </Button>
				</Grid>
				:""
			}
		</Grid>
	});
	return (
		<Grid item className={classes.productsContainer} container justify="space-between">
			{products}
		</Grid>
	);
}

export default ProductsContainer;