import React from 'react'

const Filterbar = ({ lastPos, isScrollUp }) => {

    console.log(isScrollUp)

    // conditional classNames
    const scrollUp = isScrollUp === true ? 'filterbar filterbar--fixed' : 'filterbar filterbar--fixed-top'
    const reactTop = lastPos < 60 ? 'filterbar--react-top' : ''


    return (
        <div className={` ${ scrollUp } ${reactTop}`}>
            {/* <div className="filterbar__inner"> */}
                <p>Filter</p>
                <p>Filter</p>
            {/* </div> */}
        </div>
    )
}
export default Filterbar