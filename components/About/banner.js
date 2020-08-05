//Material components
import Grid from '@material-ui/core/Grid';

//SVG
import BrandLogo from '../../public/images/brand_logo.svg';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 603,
		backgroundColor: '#e4ffdc',
		textAlign: 'center',
		[theme.breakpoints.down('xs')]: {
			padding: '50px 0px',
		}
	},
	brandLogo: {
		width: 600,
		height: '7rem',
		marginBottom: 20,
		[theme.breakpoints.down('md')]: {
			width: 400,
			height: '5rem',
		},
		[theme.breakpoints.down('sm')]: {
			width: 350,
			height: '4rem',
		},
		[theme.breakpoints.down('xs')]: {
			width: 200,
			height: '2.5rem',
		}
	},
	brandDescription: {
		fontSize: '1.1rem',
		lineHeight: '40px',
		margin: 0,
		letterSpacing: '2px',
		[theme.breakpoints.down('md')]: {
			lineHeight: '30px',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '1rem',
			letterSpacing: '1px',
			lineHeight: '28px',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '0.9rem',
			lineHeight: '25px'
		}
	}
}));

const AboutBanner = () => {
	const classes = useStyle();
	return (
		<Grid item xs={12} className={classes.root} container justify="center" alignItems="center">
			<Grid item container xs={11} md={10} lg={8} direction="column">
				<Grid item>
					<BrandLogo viewBox="0 0 1399.531 278.313" className={classes.brandLogo} />
				</Grid>
				<Grid item>
					<p className={classes.brandDescription}>
						Golden garden has been around in the garden shop industry since 1995, and for 25 years, we still continue to provide
						golden and outstanding service for our valued clients. The founders, Mr. Jose Rizal and Mr. Johnny Doe, have more than
						a century of experience in growing and cultivating garden plants, which serves as one of the strengths of Golden garden
						as a company. Sir Lancelot, on the other hand, is a business-driven man with a veteran profession mind - beneficial for 
						research and continuos development of the Golden garden shop.
					</p>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default AboutBanner;