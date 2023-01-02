import React, { Component } from 'react'
import Gamework from '../assets/Gamework.gif'

export default class GameWork extends Component {
    render() {
        return (
            <div>
                <img
                    className="react-reveal mx-auto mt-12 mb-28 scale-100 lg:w-3/4"
                    src={Gamework}
                    alt="Drone Footage"
                    style={{animationFillMode:"both",animationDuration:"1000ms",animationDelay:"0ms",animationIterationCount:"1",opacity:"1",animationName:"react-reveal-474262040372892-2"}}
                ></img>
            </div>
        )
    }
}