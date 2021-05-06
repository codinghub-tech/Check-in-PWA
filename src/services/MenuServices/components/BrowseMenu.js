import React from 'react'
import RoundedButton from '../../../shared/components/Button/Rounded';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


export default function BrowseMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { ids: data } = props; 
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        const container = document.getElementById("container")
        container.style.filter = "blur(2px)"
        // container.style.backgroundColor = "grey";
    };

    const handleClose = () => {
        setAnchorEl(null);
        const container = document.getElementById("container")
        container.style.filter = "none"
        // container.style.backgroundColor = "rgb(255,255,255)";
    };
    const Space = () => <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
    return (
        <div style={{ bottom: 45, right: 0, position: 'fixed', zIndex: 1000,  }}>
            <RoundedButton onClick={handleClick} style={{ backgroundColor: '#0295aa', textTransform: 'uppercase', fontSize: '12px' }} >
                Browse Menu
            </RoundedButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{overflow: 'auto'}}
            >   
                {data.map((obj) => {
                    return(
                        <a href={obj.href} style={{textDecoration: "none", color: "#343a40", boxShadow:" 0px 0px 5px #fff"}} onClick={handleClose}><MenuItem className="d-flex justify-content-between"><span>{obj.name}</span>&nbsp; &nbsp; <span>{obj.ndish}</span></MenuItem></a>
                    )
                })}
                
            </Menu>
        </div>
    )
}