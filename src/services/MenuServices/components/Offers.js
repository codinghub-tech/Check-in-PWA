import React from 'react'
import ScrollMenu from "react-horizontal-scrolling-menu";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Percentage from '../../../assets/menu/Menu.svg';
// import Drinks from '../../../assets/menu/drinks.svg'
// import Food from '../../../assets/menu/food.svg'
import Divider from '@material-ui/core/Divider';
// import CategoriesMenu from './CategoriesMenu'
// import Special from '../../../assets/menu/special.svg'
let menu = [{
    offer: '40',
    code: 'OFFER40'
}, {
    offer: '50',
    code: 'OFFER50'
},
{
    offer: '40',
    code: 'OFFER40'
}, {
    offer: '50',
    code: 'OFFER50'
}]


function Offers() {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    return (
        <div>
            <div> <ScrollMenu

                data={menu.map(res =>
                    <Card variant="outlined" style={{ height: "60px", width: "140px", margin: "20px", marginRight: "10px", display: 'flex' }}>

                        <Typography>
                            <p style={{ display: 'flex', marginBottom: '0', marginLeft: '6px', fontSize: '14px' }}><img src={Percentage} />&nbsp;Get<div style={{ color: '#ff4f19' }}>&nbsp;{res.offer}%</div>&nbsp;off </p>
                            <p style={{ marginTop: '0', marginLeft: '6px', fontSize: '10px', marginLeft: '30px' }}>Code:{res.code} </p>
                        </Typography>
                    </Card>
                )} /></div>
            <Divider style={{ height: '10px', width: '100%' }} />

        </div>)
}

export default Offers


