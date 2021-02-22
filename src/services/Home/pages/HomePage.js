import React from 'react'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import OrderStatus from '../components/OrderStatus'
import Trending from '../components/Trending'
import MenuItem from '../components/MenuItem'

function HomePage() {


    return (
        <div>
            <div style={{ margin: "20px" }} >
                {/* <div style={{ position: "absolute" }}>  <MenuItem /></div> */}
                <Carousel />
                <Services />
                <OrderStatus />
                <Trending />
            </div>


        </div>
    )
}
export default HomePage