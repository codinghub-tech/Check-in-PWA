import React, { useEffect } from 'react'
import AbsoluteItems from '../components/AbsoluteComponents'
import Offers from '../components/offers'
import Recommended from '../components/recommended'
// import AbsoluteItems from '../components/AbsoluteComponents'
import CategoriesMenu from '../components/CategoriesMenu'
import Items from '../components/Items'
import { _load_menu } from "../middleware/index"
import { connect } from "react-redux"


function MenuPage(props) {
    const { loadMenu } = props
    useEffect(() => {
        loadMenu()
    }, [])
    return (
        <div>
            <Offers />

            <div style={{ position: 'absolute', zIndex: 10, width: '100%' }} > <CategoriesMenu /></div>
            <Items />
            <Recommended />
            <div style={{
                width: "100%",
                height: "45px",
                overflow: "hidden",
                position: "fixed",
                bottom: 0,
                backgroundColor: "#0295aa"
            }}>
                <AbsoluteItems />
            </div>
        </div>
    )

}

const mapStateToProps = (state) => ({
    state: state.home
})

const mapDispatchToProps = (dispatch) => ({
    loadMenu: () => dispatch(_load_menu())
})
export default connect(mapStateToProps, mapDispatchToProps)(MenuPage)