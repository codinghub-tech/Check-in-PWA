import React from 'react'
// import RoundedButton from '../../../shared/components/Button/Rounded'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { connect } from "react-redux"

function AbsoluteItems({ cart }) {

  const amount = cart.items.data.reduce((init, item) => init + item.price, 0).toFixed(2)
  return (
    <div>
      <div style={{
        justifyContent: 'space-between',
        display: 'flex',
        color: '#fff',
        marginTop: '15px'
      }}>
        <div style={{
          marginTop: '-13px',
          margin: '5px'
        }}>
          <div style={{ fontSize: "12px", marginBottom: "2px" }} >4 Items</div>
          <div> &#8377;&nbsp;{amount}</div>
        </div>
        <div>
          <span
            style={{
              fontSize: "18px",

            }}
          >
            PLACE ORDER
            </span>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AbsoluteItems)
