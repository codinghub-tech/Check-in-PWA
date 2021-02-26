import React from 'react';
import Veg from '../../../assets/home/vegicon.png';
import nonVeg from '../../../assets/home/nonvegicon.jpg';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import RoundedButton from '../../../shared/components/Button/Rounded'


export default function Recommended (){
   let recommended=[
       {
           type:'nonveg',
           recommendedtype:'MUST TRY',
           item:'Haka noodle',
           price:'375.00',
           discription:'',
           image:''
       },
       {
        type:'veg',
        recommendedtype:'RECOMMENDED',
        item:'Burger with Fries',
        price:'375.00',
        discription:'Lettuce, totmato, caramelized onion, veggie, cheddar cheese.',
        image:'https://hips.hearstapps.com/hmg-prod/images/190416-chicken-burger-082-1556204252.jpg'
    },
    {
        type:'veg',
        recommendedtype:'MUST TRY',
        item:'Pizza',
        price:'180.98',
        discription:'',
        image:''
    },
   ]
    return(
        <div style={{marginBottom:'50px'}}>
            <h3>&nbsp;Recommended</h3>
            {recommended.map(res =>
            <div style={{height:'160px',width:'100%'}}>
          <div  style={{display:'flex'}}>
              {res.type === "veg" ? (<img style={{ height: "10px", width: "10px", marginLeft: "5px" }} src={Veg} />) : (<img style={{ height: "10px", width: "10px", marginLeft: "5px" }} src={nonVeg} />)}
          <div style={{display:'flex'}}>    <div  style={{height:'15px',width:'100px',fontSize:'10px',backgroundColor:'#ff5656', marginLeft:'12px',borderRadius:'20px'}}>
                <div style={{marginTop:'3px',marginLeft:'5px'}}>
                  {res.recommendedtype}
                      
                      </div>
                      
                      
                  </div>
                  <div style={{marginLeft:'150px'}}><RoundedButton style={{fontSize:'10px',margin:'0'}}>Add</RoundedButton></div>
                  </div>
                  </div>
      <div style={{display:'flex',justifyContent:'space-between'}}>   <div>
          <div style={{marginLeft:'30px',marginTop:'0'}}>{res.item}</div>
          <div style={{marginLeft:'30px',marginTop:'10px'}}> &#8377;{res.price}</div>
          </div>
          <div ><img style={{height:'80px',marginTop:'5px',marginRight:'5px',borderRadius:'20px'}} src={res.image}/></div>
          </div>
          </div>
          )}
         
        </div>
    )
}