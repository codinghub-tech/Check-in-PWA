import React, { useEffect } from 'react'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import OrderStatus from '../components/OrderStatus'
import Trending from '../components/Trending'
import MenuItem from '../components/MenuButton'
import BillingBottomBar from '../components/BillingBottomBar';
// import Box from '@material-ui/core/Box'
import { _load_orders, _load_restaurent_details, _load_trending_dishes } from '../middleware'
import { connect } from "react-redux"


function HomePage(props) {
    const { loadRestaurentDetails, state, loadOrders, loadTrendingDishes } = props
    console.log(state);
    const { details } = state
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    document.body.style.backgroundColor = "#fff"

    useEffect(() => {
        loadRestaurentDetails()
        loadOrders()


    }, [])

    useEffect(() => {
        if (details.data.restaurant.pk)
            loadTrendingDishes()
    }, [details.data.restaurant.pk])
    return (
        <div>
            <div >

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

                <div style={{ position: "absolute", marginLeft: windowWidth * 0.8 + "px", zIndex: 1000, }}>  <MenuItem /></div>
                <div style={{
                    width: "100%",
                    height: "45px",
                    overflow: "hidden",
                    position: "sticky",
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
    loadRestaurentDetails: () => dispatch(_load_restaurent_details()),
    loadOrders: () => dispatch(_load_orders()),
    loadTrendingDishes: () => dispatch(_load_trending_dishes()),
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)