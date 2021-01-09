import React from 'react'
import { getCurrentUser } from '../services/auth.service'

const About = () => {

    return (
        <>
            <header className="profile-head"> 
                <h3> 
                    <strong>about our boutique</strong>
                </h3>
            </header>

            
            <div className="row">
               
                <div className="row col s12">

                    <div className="col s4 card medium blue-grey darken-1">
                        <div className="card-content white-text">
                        <span className="card-title">Amal Amchtal</span>
                        <p>About</p>
                        </div>
                        <div className="card-action">
                        <a href="https://github.com/Aba250-1004">GitHub</a>
                        </div>
                    </div>

                    <div className="col s4 card medium blue-grey darken-1">
                        <div className="card-content white-text">
                        <span className="card-title">Edward Pizarro</span>
                        <p>About</p>
                        </div>
                        <div className="card-action">
                        <a href="https://github.com/epizarro98">GitHub</a>
                        </div>
                    </div>

                <div className="col s4 card medium blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">Justin Nykiel</span>
                    <p>About</p>
                    </div>
                    <div className="card-action">
                    <a href="https://github.com/justin-nykiel">GitHub</a>
                    </div>
                </div>

                <div className="col s4 card medium blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">Salima Harun</span>
                    <p>About</p>
                    </div>
                    <div className="card-action">
                    <a href="https://github.com/nerasan">GitHub</a>
                    </div>
                </div>

                </div>

            </div>
        </>
    )
}
export default About