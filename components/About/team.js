//Material components
import Grid from '@material-ui/core/Grid';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 650,
		backgroundColor: '#f5fff2',
		marginBottom: 100,
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			paddingBottom: 50,
		}
	},
	title: {
		fontSize: '3rem',
		margin: '80px 0px 70px 0px',
		[theme.breakpoints.down('md')]: {
			fontSize: '2.5rem',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '2rem',
		}
	},
	container: {
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		}
	},
	member: {
		[theme.breakpoints.down('sm')]: {
			marginBottom: 50,
			'& > div.MuiGrid-item': {
				width: '80%',
			}
		}
	},
	memberImg: {
		height: 200,
		[theme.breakpoints.down('md')]: {
			height: 180,
		},
		[theme.breakpoints.down('sm')]: {
			height: 150,
		},
		[theme.breakpoints.down('xs')]: {
			height: 120,
		}
	},
	memberTitle: {
		fontSize: '1.5rem',
		margin: '15px 0px',
		color: '#2F7E18',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.3rem',
			margin: '10px 0px',
		}
	},
	memberDetails: {
		fontSize: '1.1rem',
		margin: 0,
		[theme.breakpoints.down('sm')]: {
			fontSize: '1rem',
		}
	}
}));

const AboutTeam = () => {
	const classes = useStyle();
	const members = [
		{
			name: "Jose Rizal",
			details: "The founder of Golden Garden. He is an amazing persion. He fought against the spaniards too. A very brilliant man.",
			img: "joserizal.png",
		},
		{
			name: "Johnny Bravo",
			details: "The co-founder of Golden Garden. A very muscular man. He is just so charismatic and cool. One of the best.",
			img: "johnnybravo.png",
		},
		{
			name: "Sir Lancelot",
			details: "The brains and master of operations of Golden Garden. He is very loyal. He keeps the business running!",
			img: "sirlancelot.png",
		}
	];
	const team = members.map((item, key) => {
		return <Grid item key={key} xs={12} sm={6} md={3} container direction="column" alignItems="center" className={classes.member}>
			<Grid item>
				<img className={classes.memberImg} src={`/images/team/${item.img}`} />
			</Grid>
			<Grid item>
				<h4 className={classes.memberTitle}> {item.name} </h4>
			</Grid>
			<Grid item>
				<p className={classes.memberDetails}> {item.details} </p>
			</Grid>
		</Grid>
	});
	return (
		<Grid item xs={12} className={classes.root} container justify="center">
			<Grid item xs={11} sm={10} container direction="column" alignItems="center">
				<Grid item>
					<h3 className={classes.title}> <span style={{color: '#E69E0C'}}>Golden</span> <span style={{color: '#2F7E18'}}>Team</span> </h3>
				</Grid>
				<Grid item container className={classes.container}>
					{team}
				</Grid>
			</Grid>
		</Grid>
	);
}

export default AboutTeam;