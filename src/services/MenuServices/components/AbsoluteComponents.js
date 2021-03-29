import React from 'react'
// import RoundedButton from '../../../shared/components/Button/Rounded'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { connect } from "react-redux"

function AbsoluteComponents({ cart }) {
  if (cart.items.data.length)
    return (
      <div style={{
        width: "100%",
        height: "45px",
        overflow: "hidden",
        position: "sticky",
        bottom: 0,
        backgroundColor: "#32c282",

      }}>
        <div style={{ margin: '8px', display: 'flex', color: "#fff" }}>
          <div> <ShoppingCartOutlinedIcon /></div>
          <div style={{
            justifyContent: 'space-between',
            display: 'flex'
          }}>
            <div style={{
              marginLeft: '5px',
              marginTop: '5px',
              color: '#fff'
            }}>{cart.items.data.length} Items&nbsp;|&nbsp; &#8377;180.89</div>
            <div>
            </div>
          </div>
        </div>
      </div>
    )
  return <div></div>
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AbsoluteComponents)
