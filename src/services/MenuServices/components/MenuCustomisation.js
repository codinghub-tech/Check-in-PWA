import React from "react";
import NonVegIcon from '../../../assets/home/nonvegicon.jpg';
import Checkbox from '@material-ui/core/Checkbox';
import VegIcon from '../../../assets/home/vegicon.png'


function Slides() {
    let addons = [
        {
            mealtype: 'veg',
            addontitle: "Extra Veggie",
            price: "120"

        },
        {
            mealtype: 'veg',
            addontitle: "Extra Veggie",
            price: "120"

        },
        {
            mealtype: 'veg',
            addontitle: "Extra Veggie",
            price: "120"

        },

    ];
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    let Width = window.innerWidth;
    let Height = window.innerHeight;
    return (
        <div>
            <div
                style={{ width: '100%', height: '100px', backgroundColor: '#ececec' }}
            >
                <div >
                    <img style={{ height: '15px', marginTop: '15px', marginLeft: '15px', marginBottom: '5px' }} src={NonVegIcon} />
                    <div style={{ fontSize: '20px', color: '#6d6d6d', marginLeft: '13px' }}>Haka noodle</div>
                </div>
            </div>
            <div style={{ margin: "20px", color: '#6d6d6d', }}><b>Choose Add-Ons&nbsp;</b> (1/5)</div>
            <div>
                {addons.map(res =>
                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <div style={{ marginTop: '15px' }}>   <div style={{ display: 'flex' }}><div style={{ marginLeft: '10px', marginRight: '10px' }}>
                            {res.mealtype === "nonveg" ? (<img style={{ height: '12px', }} src={NonVegIcon} />) : (<img style={{ height: '12px', }} src={VegIcon} />)}
                        </div>
                            <div style={{ color: '#6d6d6d' }}>{res.addontitle}</div></div>
                        </div>
                        <div style={{ display: 'flex', }}>
                            <div style={{ marginTop: '15px', color: '#6d6d6d' }}> &#8377;&nbsp; 123.00</div>
                            <div style={{ margin: '0', }}>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'success checkbox' }}
                                    style={{ color: 'red' }}
                                /></div>
                        </div>

                    </div>

                )

                }
            </div>
            <div style={{ margin: "20px", color: '#6d6d6d', }}><b>Other Beverages Add On&nbsp;</b>(1/5)</div>
            <div style={{
                height: Height * 0.07 + 'px',
                width: Width * 0.85 + 'px',
                background: '#32c282',
                marginTop: Height * 0.48 + 'px',
                position: 'absolute',
                marginLeft: '25px',
                zIndex: 1000,
                borderRadius: '5px',
                bottom: 10

            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '17px', color: '#fff', position: 'sticky' }}>

                    <div>
                        Total&nbsp;&#8377; 123.00
                        </div>
                    <div>
                        ADD ITEM
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Slides