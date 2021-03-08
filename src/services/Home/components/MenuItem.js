// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import SpeedDial from '@material-ui/lab/SpeedDial';
// import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
// import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
// import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
// import SaveIcon from '@material-ui/icons/Save';
// import PrintIcon from '@material-ui/icons/Print';
// import ShareIcon from '@material-ui/icons/Share';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import EditIcon from '@material-ui/icons/Edit';
// import BillingBottomBar from '../components/BillingBottomBar'
// import MenuImage from '../../../assets/home/menu.svg';
// import { useHistory } from 'react-router-dom'
// const useStyles = makeStyles((theme) => ({
//     root: {
//         transform: 'translateZ(0px)',
//         flexGrow: 1,

//         position: "fixed",
//         zIndex: 2,

//     },
//     speedDial: {
//         position: "absolute"

//     },
// }));

// const actions = [
//     { icon: <FileCopyIcon />, name: 'Copy' },
//     { icon: <SaveIcon />, name: 'Save' },
//     { icon: <PrintIcon />, name: 'Print' },
//     { icon: <ShareIcon />, name: 'Share' },
//     { icon: <FavoriteIcon />, name: 'Like' },
// ];

// export default function OpenIconSpeedDial() {
//     const history = useHistory()
//     const handleOpen = () => {
//         history.push("/Menu")
//     }
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);
//     const [hidden, setHidden] = React.useState(false);

//     const handleVisibility = () => {
//         setHidden((prevHidden) => !prevHidden);
//     };


//     return (
//         <div className={classes.root}>

//             <div >
//                 <SpeedDial
//                     ariaLabel="SpeedDial openIcon example"
//                     className={classes.speedDial}
//                     icon={<img style={{ height: "62px", width: "62px", borderRadius: "50%" }} src={MenuImage} />}

//                     onOpen={handleOpen}
//                     open={open}
//                 >

//                 </SpeedDial>
//             </div>

//         </div>
//     );
// }
import React from 'react';
import Fab from '@material-ui/core/Fab';
import MenuImage from '../../../assets/home/menu.svg';
import { useHistory } from 'react-router-dom'


export default function FloatingActionButtons() {

    const history = useHistory()
    const handleOpen = () => {
        history.push("/Menu")
    }

    return (
        <div style={{ position: 'fixed', bottom: 60 }}>
            <Fab color="primary" aria-label="add">
                <img style={{ height: "62px", width: "62px", borderRadius: "50%" }} src={MenuImage} onClick={handleOpen} />
            </Fab>
        </div>
    );
}
