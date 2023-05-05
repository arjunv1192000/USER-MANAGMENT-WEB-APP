import  React , { useEffect, useState  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useNavigate } from "react-router-dom";
import axios from "../../axios/axios";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));

function UserProfile(props) {
    const classes = useStyles();
    const navigate = useNavigate();
    const [img, setImg] = useState("")
    const [userImg, setUserImg] = useState('')
    const [userData, setUserData] = useState(null); // create a state variable to hold the user data
    const id = useSelector((state) => state.user.value.id)

    useEffect(() => {
        setImg(localStorage.getItem(`${id}`));
        axios
            .get("/user/" + id)
            .then((response) => {
                console.log(response.data);
                setUserData(response.data); // set the user data to the state variable
                setUserImg(response.data.img)
            })
            .catch((err) => {
                navigate("/")
            });
    }, [setImg])

    return (
        <Paper className={classes.root}>
            <Grid container spacing={3}>
                <Grid item>
                    <Avatar className={classes.avatar} src={userImg} /> {/* use the userImg state variable */}
                </Grid>
                <Grid item>
                    <Typography variant="h4">{userData && userData.name}</Typography> {/* render the user data */}
                    <Typography variant="subtitle1">{userData && userData.email}</Typography>
                    <IconButton color="primary" aria-label="upload picture" component="label" onClick={() => navigate('/useredit')}>
                        <PhotoCamera />
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    );
}


export default UserProfile;
