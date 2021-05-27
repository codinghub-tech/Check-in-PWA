import React from 'react'
import RoundedButton from '../../../shared/components/Button/Rounded';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



// const options = [
//     'Recommended',
//     'Sides',
//     'Chinese',
//     'Main course',
//     'Beverage',
//     'Roti',
//     'Thali',
//     'Paneer',

// ];

const ITEM_HEIGHT = 48;


export default function BrowseMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const Space = () => <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
    return (
        <div style={{ bottom: 45, right: 0, position: 'fixed', zIndex: 1000 }}>
            <RoundedButton onClick={handleClick} style={{ backgroundColor: '#0295aa', textTransform: 'uppercase', fontSize: '12px' }}
            >
                Browse Menu
            </RoundedButton>
            <div style={{ overflow: "auto" }}>
                <Menu

                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                    }}
                >

                    <MenuItem className="d-flex justify-content-between" onClick={handleClose}><span>Recommended</span>&nbsp; &nbsp; <span>2</span></MenuItem>
                    <MenuItem className="d-flex justify-content-between" onClick={handleClose}><span>Sides</span> <span>10</span></MenuItem>
                    <MenuItem className="d-flex justify-content-between" onClick={handleClose}>Chinese <Space /> 11</MenuItem>
                    <MenuItem className="d-flex justify-content-between" onClick={handleClose}>Main course <Space /> 7</MenuItem>
                    <MenuItem className="d-flex justify-content-between" onClick={handleClose}>Beverage <Space /> 13</MenuItem>
                    <MenuItem className="d-flex justify-content-between" onClick={handleClose}><span>Recommended</span>&nbsp; &nbsp; <span>2</span></MenuItem>
                    <MenuItem className="d-flex justify-content-between" onClick={handleClose}><span>Sides</span> <span>10</span></MenuItem>
                    <MenuItem className="d-flex justify-content-between" onClick={handleClose}>Chinese <Space /> 11</MenuItem>
                    {/* {options.map((option) => (
                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                            {option}<span>{Math.floor(Math.random() * 10)}</span>
                        </MenuItem>
                    ))} */}
                </Menu>
            </div>
        </div>
    )
}