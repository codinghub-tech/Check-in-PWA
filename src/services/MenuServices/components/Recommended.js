import Veg from '../../../assets/home/vegicon.png';
import nonVeg from '../../../assets/home/nonvegicon.jpg';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'


export default function Recommended() {
    // const [loading, setloading] = useState(true);
    let Width = window.innerWidth;
    const [value, setValue] = React.useState(0);
    const history = useHistory()
    const [Items, setItems] = React.useState(

        [
            {
                mealtype: 'nonveg',
                type: 'MUSTTRY',
                item: 'Haka noodle',
                price: '375.00',
                discreption: '',
                image: '',
                isCustomised: true,
                cartValue: 0

            },
            {
                mealtype: 'veg',
                type: 'RECOMMENDED',
                item: 'Burger with Fries',
                price: '375.00',
                discreption: 'Lettuce, totmato, caramelized onion, veggie, cheddar cheese.',
                image: 'https://hips.hearstapps.com/hmg-prod/images/190416-chicken-burger-082-1556204252.jpg',
                isCustomised: false,
                cartValue: 0
            },
            {
                mealtype: 'veg',
                type: 'MUSTTRY',
                item: 'Pizza',
                price: '180.98',
                discreption: '',
                image: '',
                isCustomised: false,
                cartValue: 0
            },


        ]);
    const handleIncrease = (index) => {
        const recItems = JSON.parse(JSON.stringify(Items))
        if (recItems[index].isCustomised === true)
            return handleOpenSlides(true)
        const cartValue = recItems[index].cartValue
        recItems[index].cartValue = cartValue + 1
        setItems(recItems)
    }
    const handleDecrease = (index) => {
        const recItems = JSON.parse(JSON.stringify(Items))
        const cartValue = recItems[index].cartValue
        recItems[index].cartValue = cartValue - 1
        setItems(recItems)
    }
    const handleOpenSlides = (isCustomised) => {
        if (isCustomised === true) {

            history.push("/sides")
        }
        console.log(Items.isCustomised)
    }

    // setloading(false)
    console.log(Items)


    return (

        <div style={{ marginBottom: '50px', marginLeft: '5px' }}>
            <h3 style={{ color: '#6d6d6d' }}>&nbsp;Recommended</h3>

            {Items.map((res, index) =>
                <div style={{ height: '150px', width: '100%' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex' }} >
                            <div>  {res.mealtype === "veg" ?
                                (<img style={{ height: "15px", width: "15px", marginLeft: "5px" }} src={Veg} />)
                                : (<img style={{ height: "15px", width: "15px", marginLeft: "5px" }} src={nonVeg} />)}</div>
                            <div >
                                <div

                                    style={{
                                        height: '18px',
                                        width: '100%',
                                        marginLeft: '12px',
                                        borderTopLeftRadius: '10px',
                                        borderBottomLeftRadius: '10px',
                                        marginBottom: '10px',
                                        backgroundColor: res.type === "MUSTTRY" ? "#ff5656" : "#ffc850"
                                    }}>
                                    <div>

                                        <div><div style={{ height: '2px', }}>{res.type === "MUSTTRY" ?
                                            (<WhatshotIcon style={{ height: '14px', color: '#fff', marginTop: '2px' }} />) : (<ThumbUpIcon style={{ height: '14px', color: '#fff', marginTop: '2px' }} />)}
                                        </div> <span style={{ color: '#fff', marginBottom: '10px', marginLeft: '25px', fontSize: 10 }}>  {res.type}</span> </div>


                                    </div>

                                </div>

                                <div style={{ marginLeft: '-16px' }} onClick={() => handleOpenSlides(res.isCustomised)}>
                                    <div style={{ marginTop: '0', color: '#6d6d6d' }} >{res.item}</div>
                                    <div style={{ marginTop: '10px', color: '#6d6d6d' }}> &#8377;{res.price}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {res.image === "" ? (<div style={{ marginLeft: Width * 0.38 + 'px', }}>
                                <div style={{
                                    height: '20px',
                                    width: '70px',
                                    backgroundColor: '#ffefef',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    border: ' 1px solid #ff5656',
                                }}

                                >
                                    {res.cartValue === 0 ?
                                        (<div style={{ paddingTop: '5px', paddingLeft: '20px', fontSize: '14px', color: '#ff5656', fontWeight: 700 }} onClick={() => handleIncrease(index)}>ADD</div>)
                                        : (
                                            <div style={{
                                                backgroundColor: '#ff5656', height: '21px',
                                                cursor: 'pointer', width: '71px', borderRadius: '5px'
                                            }}>
                                                <div style={{ display: 'flex', color: '#fff' }}>
                                                    <div ><RemoveIcon style={{ width: '16px', marginLeft: '5px' }} onClick={() => handleDecrease(index)} /></div>
                                                    <div style={{ marginTop: '5px', marginLeft: '10px', }} >{res.cartValue}</div>
                                                    <div ><AddIcon style={{ width: '16px', marginLeft: '10px' }} onClick={() => handleIncrease(index)} /></div>
                                                </div>

                                            </div>

                                        )}
                                </div>
                            </div>) :

                                (<div style={{ zIndex: -1 }}>
                                    <div ><img style={{
                                        height: '80px',
                                        marginTop: '10px',
                                        marginRight: Width * 0.02 + 'px',
                                        borderRadius: '5px',
                                        marginLeft: Width * 0.23 + 'px',
                                        // marginBottom: '-30px',  
                                        // zIndex: -1,
                                        position: 'absolute'

                                    }} src={res.image} />
                                        <div style={{ marginLeft: Width * 0.3 + 'px', position: 'relative', paddingTop: '78px' }}>
                                            <div style={{
                                                height: '20px',
                                                width: '70px',
                                                backgroundColor: '#ffefef',
                                                borderRadius: '5px',
                                                cursor: 'pointer',
                                                border: ' 1px solid #ff5656',

                                                // marginBottom: '-140px'
                                            }}

                                            >
                                                {res.cartValue === 0 ?
                                                    (<div style={{ paddingTop: '5px', paddingLeft: '20px', fontSize: '14px', color: '#ff5656', fontWeight: 700 }} onClick={() => handleIncrease(index)}>ADD</div>)
                                                    : (
                                                        <div style={{
                                                            backgroundColor: '#ff5656', height: '21px',
                                                            cursor: 'pointer', width: '71px', borderRadius: '5px'
                                                        }}>
                                                            <div style={{ display: 'flex', color: '#fff' }}>
                                                                <div onClick={() => handleDecrease(index)}><RemoveIcon style={{ width: '16px', marginLeft: '5px' }} /></div>
                                                                <div style={{ marginTop: '5px', marginLeft: '10px', }} >{res.cartValue}</div>
                                                                <div onClick={() => handleIncrease(index)}><AddIcon style={{ width: '16px', marginLeft: '10px' }} /></div>
                                                            </div>

                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>

                                </div>)}
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    )
}