import React from 'react'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import OrderStatus from '../components/OrderStatus'
import Trending from '../components/Trending'
import MenuItem from '../components/MenuItem'
import BillingBottomBar from '../components/BillingBottomBar';
import Box from '@material-ui/core/Box'


function HomePage() {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    document.body.style.backgroundColor = "#fff"
    return (
        <div>
            <div >

                <div style={{ position: "absolute", marginLeft: windowWidth * 0.8 + "px", marginTop: windowHeight * 0.8 + "px" }}>  <MenuItem /></div>
                <div>
                    <div
                        style={{ width: '100%', borderBottom: "1px solid grey" }}
                    >
                        <div style={{ margin: '15px' }}><div style={{ color: "#ff5656" }}>Room No 301</div><div style={{ fontSize: '10px', marginTop: '5px   ' }}>Oyo Townhouse 032</div></div>

                    </div>
                </div>
                < Carousel />
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


        </div >
    )
}
export default HomePage