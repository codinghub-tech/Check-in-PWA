import React from 'react'
import PercentageIcon from '../../../assets/menu/percentageicon.svg'
import Divider from '@material-ui/core/Divider';


export default function Promos() {
    return (

        <>
            <Divider style={{ height: '5px', width: '100%', marginTop: '30px' }} />
            <div style={{ marginTop: '20px', display: 'flex', marginLeft: '10px', justifyContent: 'space-between', marginRight: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <img src={PercentageIcon} style={{ height: '25px' }} />
                    <div style={{ marginTop: '6px', color: '#6d6d6d', marginLeft: '10px', fontSize: '15px' }}>Apply Promo Code</div>
                </div>
                <div style={{ marginTop: '6px', color: '#ff5656', fontWeight: 600, fontSize: '12px' }}>
                    View Offers
            </div>

            </div>
            <Divider style={{ height: '5px', width: '100%', marginTop: '20px' }} />
        </>
    )
}