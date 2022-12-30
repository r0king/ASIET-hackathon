import React from 'react'
import './PageSlider.css'

function PageSlider(props) {
    return (
        <div>
            <ul id="pagination">
                <div className="vl"></div>
                <li><a href="#page1"></a></li>
                <li><a href="#page2"></a></li>
                <li><a href="#page3"></a></li>
                <li><a href="#page4"></a></li>
                <div className="vl1"></div>
            </ul>
        </div>
    )
}

export default PageSlider