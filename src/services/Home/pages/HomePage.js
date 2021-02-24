import React from 'react'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import OrderStatus from '../components/OrderStatus'
import Trending from '../components/Trending'
import MenuItem from '../components/MenuItem'
import BillingBottomBar from '../components/BillingBottomBar'

function HomePage() {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    console.log(windowHeight)
    console.log(windowWidth)

    return (
        <div>
            <div >
                <div style={{ position: "absolute", marginLeft: windowWidth * 0.8 + "px", marginTop: windowHeight * 0.35 + "px" }}>  <MenuItem /></div>
                <Carousel />
                <Services />
                <OrderStatus />
                <Trending />
                <div style={{
                    width: "100%",
                    height: "45px",
                    overflow: "hidden",
                    position: "fixed",
                    bottom: 0,
                    backgroundColor: "#0295aa",
                }}><BillingBottomBar /></div>
            </div>


        </div>
    )
}
export default HomePage