import React from 'react';
import Grid from '@material-ui/core/Grid'
import Scream from '../components/Scream'
import Profile from '../components/Profile' 
import {connect} from 'react-redux'
import {getScreams} from '../redux/actions/dataActions'
import PropTypes from 'prop-types'



class Home extends React.Component {

	componentDidMount(){
		
		this.props.getScreams()

	}


	render() {

		const {screams,loading}=this.props.data

		let recentScreamsMarkUp=!loading?screams.map(scream=><Scream key={scream.screamId} scream={scream} />):<p>Loading....</p>

		return (
			<Grid container spacing={1}>
				<Grid item sm={8} xs={12}>{recentScreamsMarkUp}</Grid>
					<Profile />
				<Grid item sm={4} xs={12}><p>Profile....</p></Grid>
			</Grid>
			
		);
	}

}

Home.propTypes={

	getScreams:PropTypes.func.isRequired,
	data:PropTypes.object.isRequired
}

const mapStateToProps=state=>({

	data:state.data

})


export default connect(mapStateToProps,{getScreams})(Home)


