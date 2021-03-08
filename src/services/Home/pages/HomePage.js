import React, { useEffect } from 'react'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import OrderStatus from '../components/OrderStatus'
import Trending from '../components/Trending'
import MenuItem from '../components/MenuItem'
import BillingBottomBar from '../components/BillingBottomBar';
import Box from '@material-ui/core/Box'
import { _load_restaurent_details } from '../middleware'
import { connect } from "react-redux"


function HomePage(props) {
    const { loadRestaurentDetails, state } = props
    console.log(state);
    const { details } = state
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    document.body.style.backgroundColor = "#fff"

    useEffect(() => {
        loadRestaurentDetails()
    }, [])
    return (
        <div>
            <div >

                <div style={{ position: "absolute", marginLeft: windowWidth * 0.8 + "px", marginTop: windowHeight * 0.8 + "px" }}>  <MenuItem /></div>
                <div>
                    <div
                        style={{ width: '100%', borderBottom: "1px solid grey" }}
                    >
                        <div style={{ margin: '15px' }}><div style={{ color: "#ff5656" }}>Room No 301</div><div style={{ fontSize: '10px', marginTop: '5px   ' }}>{details.data.restaurant.display_name}</div></div>

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

const mapStateToProps = (state) => ({
    state: state.home
})

const mapDispatchToProps = (dispatch) => ({
    loadRestaurentDetails: () => dispatch(_load_restaurent_details())
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)