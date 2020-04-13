import { render } from "react-dom"
import React from 'react';

export default (props) => {
    return (
        <div className='annotation-showpage'>
            {props.annotation.description}
        </div>
    )
}