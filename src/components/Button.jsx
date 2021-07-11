import React from 'react'

import '../styles/Button.scss'
function Button({className="default", textBtn, action}) {
    return (
        <div>
            <button className={className} onClick={action}>{textBtn}</button>
        </div>
    )
}

export default Button
