import React, { Component } from 'react'
import { connect } from 'react-redux'
import VegIcon from '../../../assets/home/vegicon.png'
import NonVegIcon from '../../../assets/home/nonvegicon.jpg'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export const CartItems = ({ cart }) => {
  const items = cart.items.data
  const width = window.innerWidth

  console.log(cart)
  return (
    <div>
      <div>{items.map((item, index) =>
        <div>
          <div style={{ display: 'flex', }}>
            <div style={{ display: 'flex' }}>
              {item.type === "veg" ? (<div style={{ marginTop: '20px', marginLeft: '20px' }}>
                <img src={VegIcon} style={{ height: "10px", width: "10px", marginLeft: "5px" }} />
              </div>) : (<div><img src={NonVegIcon} style={{ height: "10px", width: "10px", marginLeft: "5px" }} /></div>)}
              <div style={{ marginTop: '22px', color: '#6d6d6d', fontSize: '14px', marginLeft: '10px', fontWeight: 500 }}>
                {item.name}
              </div>
            </div>
            <div style={{ marginTop: '20px', marginLeft: width * 0.36 + 'px' }}>
              <ButtonGroup size="small" aria-label="small outlined button group" style={{ height: '20px', width: '20px' }}>
                <Button >-</Button>
                <Button>ADD</Button>
                <Button >+</Button>
              </ButtonGroup>

            </div>
          </div>
          <div style={{ marginLeft: '44px', fontWeight: 500, color: '#6d6d6d', marginTop: '5px' }}>

            &#8377;&nbsp;{item.price}
          </div>
          <div style={{ marginTop: '15px' }}>
            <Paper
              elevation={0}
              component="form"
              style={{
                borderRadius: '20px',
                margin: '5px',
                height: '30px',
                marginTop: '-10px',
                border: "1px solid #cdcdcd",
                marginLeft: '42px',
                marginRight: '42px'
              }}
            >
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2px"
              }}
              >
                <InputBase
                  placeholder="Write special instructions"
                  style={{ marginLeft: '10px', fontSize: '13px', color: '#6d6d6d' }}
                />


              </div>
            </Paper>
          </div>
        </div>
      )}
      </div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems)
