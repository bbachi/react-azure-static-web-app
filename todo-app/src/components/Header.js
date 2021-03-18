import React from 'react';

const Header = ({appSettings}) => {

    console.log("headerColor", appSettings)
    const { headerColor, headerTitleColor } = appSettings
    if (!headerColor) {
        return null;
    }

    return (
        <div style={{backgroundColor: headerColor}} className="header">
            <h1 style={{color: headerTitleColor}}>
                Azure Static Web Apps With React Demo
            </h1>
        </div>
    )
}

export default Header