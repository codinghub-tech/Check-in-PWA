import React from 'react'
import RoundedButton from '../../../shared/components/Button/Rounded';


export default function BrowseMenu() {

    return (
        <div style={{ bottom: 45, right: 0, position: 'fixed', zIndex: 10000, }}>
            <RoundedButton style={{ backgroundColor: '#0295aa', textTransform: 'uppercase', fontSize: '12px' }} >
                Browse Menu
            </RoundedButton>
        </div>
    )
}