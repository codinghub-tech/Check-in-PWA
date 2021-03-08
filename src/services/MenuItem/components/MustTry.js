import React from 'react';
import Veg from '../../../assets/home/vegicon.png';
import nonVeg from '../../../assets/home/nonvegicon.jpg';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export default function MustTry(props) {
    const { RecommendItem } = props
    let Width = window.innerWidth;
    const [value, setValue] = React.useState(0);

    const handleIncrease = () => {
        setValue(value + 1)
    }
    const handleDecrease = () => {
        setValue(value - 1)
    }
    return (
        <div>
            <div style={{ marginBottom: '50px' }}>
                <h3>&nbsp;Recommended{RecommendItem}</h3>
                {props.RecommendItem}
                {/* {RecommendItem.map(res =>
                    <div style={{ height: '160px', width: '100%' }}>
                        <div style={{ display: 'flex' }}>
                            {res.type === "veg" ? (<img style={{ height: "10px", width: "10px", marginLeft: "5px" }} src={Veg} />) : (<img style={{ height: "10px", width: "10px", marginLeft: "5px" }} src={nonVeg} />)}
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>    <div style={{ height: '15px', width: '100px', fontSize: '10px', backgroundColor: '#ff5656', marginLeft: '12px', borderRadius: '20px' }}>
                                <div style={{ marginTop: '3px', marginLeft: '5px' }}>
                                    {res.recommendedtype}
                                </div>
                            </div>
                                <div style={{ marginLeft: Width * 0.5 + 'px', marginRight: '' }}>
                                    <div style={{
                                        height: '25px',
                                        width: '70px',
                                        backgroundColor: '#ffefef',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        border: ' 2px solid #ff5656',


                                    }}

                                    >
                                        {value === 0 ? (<div style={{ paddingTop: '7px', paddingLeft: '20px', fontSize: '14px', color: '#ff5656', fontWeight: 700 }} onClick={handleIncrease}>ADD</div>) : (
                                            <div style={{
                                                backgroundColor: '#ff5656', height: '26px', borderRadius: '2px',
                                                cursor: 'pointer', width: '71px',
                                            }}>
                                                <div style={{ display: 'flex', color: '#fff' }}>
                                                    <div onClick={handleDecrease}><RemoveIcon style={{ width: '16px', marginLeft: '5px' }} /></div>
                                                    <div style={{ marginTop: '5px', marginLeft: '10px', }} >{value}</div>
                                                    <div onClick={handleIncrease}><AddIcon style={{ width: '16px', marginLeft: '10px' }} /></div>
                                                </div>

                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <div style={{ marginLeft: '30px', marginTop: '0' }}>{res.item}</div>
                                <div style={{ marginLeft: '30px', marginTop: '10px' }}> &#8377;{res.price}</div>
                            </div>
                            <div ><img style={{ height: '80px', marginTop: '5px', marginRight: Width * 0.344 + 'px', borderRadius: '5px' }} src={res.image} /></div>

                        </div>
                    </div>
                )} */}

            </div>

        </div>
    )
}
