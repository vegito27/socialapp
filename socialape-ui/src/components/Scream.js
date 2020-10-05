import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Typography from '@material-ui/core/Typography'

const styles={

	card:{
		display:'flex',
		marginBottom:20
	},
	image:{
		minWidth:200,

	},
	content:{
		padding:25,
		objectFit:'cover'
	}

}


const Scream = (props) => {

	console.log(props)

	dayjs.extend(relativeTime)

	

  return (
    <div>
    <Card className={props.classes.card}>
     <CardMedia image={props.scream.userImage} title="Profile image" className={props.classes.image}/>
        <CardContent className={props.classes.content}> 
            <Typography variant="h5" component={Link} to={`/users/${props.scream.userHandle}`} color="primary">{props.scream.userHandle}</Typography>
            <Typography variant="body2" color="textSecondary">{dayjs(props.scream.createdAt).fromNow() } </Typography>
            <Typography variant="body1">{props.scream.scream}</Typography>
           
        </CardContent>
    </Card>
    </div>
  )
}

export default withStyles(styles)(Scream);