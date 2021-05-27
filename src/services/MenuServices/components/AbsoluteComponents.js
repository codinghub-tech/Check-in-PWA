import React from 'react'
// import RoundedButton from '../../../shared/components/Button/Rounded'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FastForwardIcon from '@material-ui/icons/FastForward';
import { connect } from "react-redux"
import { useHistory } from 'react-router-dom'
import cart5 from 'C:/Users/hp/Videos/Check-in-PWA/src/assets/home/cart5.png'

function AbsoluteComponents({ cart }) {
  const history = useHistory()
  const amount = cart.items.data.reduce((init, item) => init + item.price, 0).toFixed(2)
  if (cart.items.data.length)
    return (
      <div style={{
        width: "110%",
        height: "45px",
        overflow: "hidden",
        position: "sticky",
        bottom: 0,
        backgroundColor: "#32c282",

      }}>
        <div className="d-flex justify-content-between" style={{ margin: '8px', color: "#fff" }}>
          <div className="d-flex">
            <div><img src={cart5} width="20" height="20" viewBox="0 0 30 30"></img></div>
            <div style={{
              justifyContent: 'space-between',
              display: 'flex'
            }}>
              <div style={{
                marginLeft: '5px',
                marginTop: '5px',
                color: '#fff'
              }}>
                {cart.items.data.length} Items&nbsp;|&nbsp; &#8377;{amount}
              </div>
            </div>
          </div>
          <div>
            <div style={{
              display: "flex",
            }}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "18px",
                  padding: "6px"
                }}
                onClick={() => history.push("/viewcart")}
              >
                Continue</span>
              <span style={{
                display: "inline-block",
                padding: "3px"
              }}><FastForwardIcon />
              </span>
            </div>
          </div>
        </div>
      </div >
    )
  return <div></div>
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AbsoluteComponents)
