import React from 'react'
import AbsoluteItems from '../components/AbsoluteComponents'
import Offers from '../components/offers'
import Recommended from '../components/Recommended'
// import AbsoluteItems from '../components/AbsoluteComponents'
import CategoriesMenu from '../components/CategoriesMenu'
import Items from '../components/Items'
import ChatWithUs from '../components/ChatWithUs'
import BrowseMenu from '../components/BrowseMenu'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


function MenuPage() {
    return (
        <div>
            <div
                style={{ width: '100%', borderBottom: "1px solid grey" }}
            >
                <div style={{ margin: '15px', display: 'flex' }}>
                    <div>  <ArrowBackIosIcon /></div>
                    <div><div style={{ color: "#ff5656" }}>Menu</div>
                        <div style={{ fontSize: '10px', marginTop: '5px   ' }}>Grey Orange - Lavel Road</div></div></div>
            </div>
            <Offers />

            <div style={{ position: 'absolute', zIndex: 10, width: '100%', }} > <CategoriesMenu /></div>
            <Items />
            <Recommended />
            {/* <ChatWithUs /> */}
            <BrowseMenu />
            <div style={{
                width: "100%",
                height: "45px",
                overflow: "hidden",
                position: "fixed",
                bottom: 0,
                backgroundColor: "#32c282"
            }}>
                <AbsoluteItems />

            </div>
        </div>
    )

}
export default MenuPage