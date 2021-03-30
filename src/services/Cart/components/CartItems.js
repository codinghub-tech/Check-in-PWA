import React, { Component } from 'react'
import { connect } from 'react-redux'

export const CartItems = ({ cart }) => {
  const items = cart.items.data
  return (
    <div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems)
