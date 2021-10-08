import React from 'react'

export default function RightPanel(props) {
    
    if (props.listOfLinks === undefined) // False
        return null;
    return (
        <div className="right-panel">
            {props.listOfLinks.map(item => {
                return (
                    <div className="link-element" key={item.label}>
                        <a href={item.link} >
                            {item.label}
                        </a>
                    </div>
                )
            })}
        </div>
    )
}
