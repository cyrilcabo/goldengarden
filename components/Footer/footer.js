//Material components
import Grid from '@material-ui/core/Grid';

//SVG
import BrandLogo from '../../public/images/brand_logo.svg';

//Utils
import Link from 'next/link';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 200,
		backgroundColor: '#212121',
	},
	subRoot: {
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center'
		}
	},
	brandContainer: {
		[theme.breakpoints.down('xs')]: {
			textAlign: 'center',
			justifyContent: 'center',
			marginBottom: 20,
		}
	},
	brandLogo: {
		height: '1.6rem',
		width: 120,
		fontStyle: 'italic'
	},
	brandSlogan: {
		color: 'white',
		margin: '5px 0px 0px 0px',
		fontSize: '0.8rem',
	},
	linkContainer: {
		textAlign: 'right',
		justifyContent: 'flex-end',
		'& > div.MuiGrid-item': {
			marginLeft: 20,
		},
		[theme.breakpoints.down('xs')]: {
			textAlign: 'center',
			justifyContent: 'center',
			'& > div.MuiGrid-item': {
				margin: '0px 10px',
			}
		}
	},
	navLinks: {
		color: 'white',
		margin: 0,
		fontSize: '0.8rem',
		letterSpacing: '1.5px',
		cursor: 'pointer',
		'&:hover': {
			color: '#2F7E18'
		},
	},
}));

const Footer = (props) => {
	const classes = useStyle();
	const navLinks = props.navs.map((item, key) => {
		return <Grid item key={key}>
			<Link href={item.link}>
				<p className={classes.navLinks}> {item.name} </p>
			</Link>
		</Grid>
	});
	return (
		<Grid item xs={12} className={classes.root} container justify="center">
			<Grid item xs={11} md={10} container className={classes.subRoot}>
				<Grid item sm={6} container direction="column" justify="center" className={classes.brandContainer}>
					<Grid item>
						<BrandLogo viewBox="0 0 1399.531 278.313" className={classes.brandLogo} />
					</Grid>
					<Grid item>
						<p className={classes.brandSlogan}> Bringing the nature into your homes. </p>
					</Grid>
				</Grid>
				<Grid item sm={6} container className={classes.linkContainer}>
					{navLinks}
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Footer;