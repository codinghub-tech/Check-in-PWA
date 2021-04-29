import React, { Component } from 'react'
import { connect } from 'react-redux'
import VegIcon from '../../../assets/home/vegicon.png'
import NonVegIcon from '../../../assets/home/nonvegicon.jpg'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';

export const CartItems = ({ cart }) => {
  const items = cart.items.data
  const width = window.innerWidth
  const [value, setValue] = React.useState(1);

  const handleIncrease = () => {
    setValue(value + 1)
  }
  const handleDecrease = () => {
    setValue(value - 1)
  }

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

                <div style={{ fontStyle: 'JosefinSans-Regular', marginTop: '5px', color: '#ff5656', width: '80px' }}  >Customize <BrightnessLowIcon style={{ fontSize: '8px' }} />
                  <span style={{ marginLeft: '100px', fontWeight: 500, color: '#6d6d6d', marginBottom: '50px' }}>

                    &#8377;&nbsp;{item.price}
                  </span>
                </div>

              </div>

            </div>
            <div style={{ marginTop: '20px', marginLeft: width * 0.49 + 'px', width: '30px', color: '#fff' }}>
              <div style={{ width: '70px', height: '20px', backgroundColor: '#f5365c', borderRadius: '10px', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ marginLeft: '10px', marginTop: '2px', }} onClick={handleDecrease}>-</div>
                <div style={{ marginTop: '4px' }}>{value}</div>
                <div style={{ marginRight: '10px', marginTop: '2px' }} onChange={handleIncrease}>+</div>
              </div>

            </div>
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

        <div style={{ position: 'fixed', bottom: 50, marginLeft: width * 0.2 + 'px', color: '#6d6d6d', fontSize: '12px' }}>
          " Does not include extra charges or discounts "
      </div>
      </div>

    </div >
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems)
