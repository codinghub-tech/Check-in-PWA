import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import AbsoluteItems from '../components/AbsoluteComponents'

export const ViewCartPage = () => {
    const history = useHistory()
    return (
        <div style={{ width: '100%' }}>
            <div
                style={{ width: '100%', borderBottom: "1px solid grey" }}
            >
                <div style={{ margin: '15px', display: 'flex' }}>
                    <div>
                        <ArrowBackIosIcon onClick={() => history.hasOwnProperty("back") ? history.back() : history.push("/menu")} />
                    </div>
                    <div>
                        <div style={{ color: "#ff5656", marginTop: '7px' }}>
                            Cart
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                width: "100%",
                height: "45px",
                overflow: "hidden",
                position: "sticky",
                // bottom: 0,
                backgroundColor: "#32c282"
            }}>
                <AbsoluteItems />

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCartPage)
