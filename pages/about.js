//Material components
import Grid from '@material-ui/core/Grid';

//Custom components
import AboutBanner from '../components/About/banner';
import AboutGoals from '../components/About/goals';
import AboutTeam from '../components/About/team';

const About = () => {
	return (
		<Grid item xs={12}>
			<AboutBanner />
			<AboutGoals />
			<AboutTeam />
		</Grid>
	);
}

export default About;