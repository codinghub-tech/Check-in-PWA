import React from 'react'
import ScrollMenu from "react-horizontal-scrolling-menu";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Percentage from '../../../assets/menu/Menu.svg';
import Drinks from '../../../assets/menu/drinks.svg'
import Food from '../../../assets/menu/food.svg'
// import Special from '../../../assets/menu/special.svg'
let menu=[{
    offer:'40',
    code:'OFFER40'
},{
    offer:'50',
    code:'OFFER50'
},
{
    offer:'40',
    code:'OFFER40'
},{
    offer:'50',
    code:'OFFER50'
}] 

let categories=[{
       image:'https://cdn.zeplin.io/5af42663188049271b3ae959/assets/B2726390-711B-4F16-95FB-270361BBF40A.svg',
       title:'Drinks'
},
            {
                image:'https://cdn.zeplin.io/5af42663188049271b3ae959/assets/8DE64735-BEA6-45E2-9F1C-430C00E12C12.svg',
                title:'Food',
            },
            {
                image:'https://cdn.zeplin.io/5af42663188049271b3ae959/assets/56BF08BE-83AA-4350-92F2-235CAB742E2B.svg',
                title:'Special'
            }
]
function Offers(){
    return(
    <div>
   <ScrollMenu

data={menu.map(res =>
    <Card style={{ height: "70px", width: "140px", margin: "20px", marginRight: "10px", display:'flex'}}>
         
        <Typography>
            <p style={{display:'flex',marginBottom:'0',marginLeft:'6px',fontSize:'14px'}}><img src={Percentage}/>&nbsp;Get<div style={{color:'#ff4f19'}}>&nbsp;{res.offer}%</div>&nbsp;off </p>
            <p  style={{marginTop:'0',marginLeft:'6px',fontSize:'10px',marginLeft:'30px'}}>Code:{res.code} </p>
        </Typography>
    </Card>
)} />
<div>
<ScrollMenu

data={categories.map(res =>
            <div style={{height:'90px',width:'80px',margin:'20px'}}>
                <img  style={{height:'60px',width:'40px'}}src={res.image}/>
                <div style={{}}>{res.title}</div>
            </div>
)} />
</div>
    </div>)
}

export default Offers
