import React from 'react'
import AbsoluteItems from '../components/AbsoluteComponents'
import Offers from '../components/offers'
import Recommended from '../components/recommended'
// import AbsoluteItems from '../components/AbsoluteComponents'



function  MenuPage(){
    return(
        <div>
           <Offers/>
           <Recommended/>
           <div style={{
                    width: "100%",
                    height: "45px",
                    overflow: "hidden",
                    position: "fixed",
                    bottom: 0,
                    backgroundColor: "#0295aa"}}>
           <AbsoluteItems/>
           </div>
        </div>
    )

}
export default MenuPage