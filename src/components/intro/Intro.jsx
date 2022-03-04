import "./intro.scss"
import{ init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings: ["Front End", "Full Stack"],
        });

    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/mainpage.png" alt=""/>
                </div>
                <div className="imgContainer2">
                    <img src="assets/plaane.png" alt=""/>
                </div>
            </div>
            <div className="right">

                <div className = "wrapper">
                    <h2>Hi there! I'm </h2>
                    <h1>Shambhavi</h1>
                    <h3>
                        Developer <span ref={textRef}></span>
                    </h3>
                    <div className="imgContainer3">
                    <img src="assets/cactoos.png" alt=""/>
                </div>
                </div>
                <a href="#work">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
