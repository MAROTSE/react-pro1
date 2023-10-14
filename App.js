import React from "react"
import Infor from "./components/Infor"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"


export default function App(){
    return(
        <div className="app">
        <Infor />
        <About />
        <Interests />
        <Footer />
        </div>
    )
}