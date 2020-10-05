import React from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid'
import Scream from '../components/Scream'
import Profile from '../components/Profile' 

export default class Home extends React.Component {

	state={

		screams:null
	}

	componentDidMount(){
		
		axios.get('/screams')
		.then(res=>{


			this.setState({
				screams:res.data
			})
		})
		.catch(err=>console.log(err))

	}

	render() {

		let recentScreamsMarkUp=this.state.screams?( this.state.screams.map(scream=><Scream key={scream.screamId} scream={scream} />)):<p>Loading....</p>

		return (
			<Grid container spacing={1}>
			<Grid item sm={8} xs={12}>{recentScreamsMarkUp}</Grid>
			<Profile />
			<Grid item sm={4} xs={12}><p>Profile....</p></Grid>
			</Grid>
			
		);
	}
}


