import React from 'react'
import Filterbar from './Filterbar'

const Content = ({ lastPos, isScrollUp }) => {
    return (
        <div className="content">
            <Filterbar lastPos={ lastPos } isScrollUp={ isScrollUp }/>
            <div>
                {/* <div className="content__spacer">hi</div> */}
                <p>Content</p>
            </div>
        </div>
    )
}
export default Content