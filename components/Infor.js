import React from "react"

export default function Infor(){
     return(
         <header>
            <img src="images/Har.jpg" width="100%"/>
            <h4>Hargreaves Marotse</h4>
            <h5>Frontend Developer</h5>
            <h6>My first React website</h6>
            <button className="btn btn-light text-center">
            <i className="fa-regular fa-envelope"></i>Email</button>
            <button className="btn btn-success ">
            <i className="fa-brands fa-linkedin"></i>LinkedIn</button>
         </header>
     )
}