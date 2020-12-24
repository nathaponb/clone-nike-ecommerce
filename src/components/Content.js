import React from 'react'
import Filterbar from './Filterbar'

const Content = ({ lastPos, isScrollUp }) => {
    return (
        <div className="content">

            <Filterbar lastPos={ lastPos } isScrollUp={ isScrollUp }/>

            {/* generate elements from iterating over specific Array props */}
            <div className="content__inner">
                {[...Array(100)].map((e, i) => (
                    <div className="content-box" key={ i }>
                        <small>{ i }</small>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Content