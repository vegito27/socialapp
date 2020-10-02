import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Link from 'react-router-dom/Link'


const styles={

	card:{
		display:'flex',
		marginBottom:20
	},
	image:{
		minWidth:200,

	},
	content:{
		padding:25
	}

}


const Scream = (props) => {


	console.log(props.userImage)

	

  return (
    <div>
    <Card className={props.classes.card}>
     <CardMedia image={props.userImage} title="Profile image" className={props.classes.image}/>
        <CardContent class={props.classes.content}> 
            <Typography variant="h5" component={Link} to={`/users/${props.scream.userHandle}`} color="primary">{props.scream.userHandle}</Typography>
            <Typography variant="body2" color="textSecondary">{props.scream.createdAt} </Typography>
            <Typography variant="body1">{props.scream.scream}</Typography>
           
        </CardContent>
    </Card>
    </div>
  )
}

export default withStyles(styles)(Scream);