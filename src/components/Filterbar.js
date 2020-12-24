import React from 'react'

const Filterbar = ({ lastPos, isScrollUp }) => {

    console.log(isScrollUp)

    // conditional classNames
    const scrollUp = isScrollUp === true ? 'filterbar filterbar--fixed' : 'filterbar filterbar--fixed-top'
    const topStack = lastPos < 60 ? 'filterbar--topstack' : ''


    return (
        <div className={` ${ scrollUp } ${topStack}`}>
            <div>
                <p>Filter</p>
                <p>Filter</p>
            </div>
        </div>
    )
}
export default Filterbar