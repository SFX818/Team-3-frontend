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

            <div className="about-field">
            Thank you for visiting Blue Barracudas Boutique! The development team collaborated together on a project while attending the Software Engineering Immersive Flex Program at General Assembly. When presented with the opportunity to create a working app, the team were passionate about creating a simple online store that allows users to sell and buy products.
            </div>

            <header className="profile-head"> 
                <h3> 
                    <strong>meet the team</strong>
                </h3>
            </header>

            
            <div className="row">
               
                <div className="row col s12">

                    <div className="col s4 card medium blue-grey darken-1 about-card">
                        <div className="card-content white-text">
                        <h5>Amal Amchtal</h5>
                        <img
                            src="https://media-exp1.licdn.com/dms/image/C4D03AQH7rWSmedDPJQ/profile-displayphoto-shrink_400_400/0/1608248984608?e=1615420800&v=beta&t=1g0XqH-P_jGkbFPIzENBc_8Ug2aNaOhspKZmiXV3Do8"
                            alt="profile-img"
                            className="profile-img-card"
                            />
                        <p>Amal is a Software Engineer Fellow at General Assembly. While attending GA, he also studies Computer Science at Union College and has skills in Java, JavaScript, and Python.</p>
                        </div>
                        <div className="card-action">
                        <a href="https://github.com/Aba250-1004" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>

                    <div className="col s4 card medium blue-grey darken-1 about-card">
                        <div className="card-content white-text">
                        <h5>Edward Pizarro</h5>
                        <img
                            src="https://media-exp1.licdn.com/dms/image/C5603AQE-v7p_1wORBw/profile-displayphoto-shrink_400_400/0/1604591522868?e=1615420800&v=beta&t=Zwmf4gsJw986rA0SWK4DseYcZxEcXUYP1CB_a94vFaY"
                            alt="profile-img"
                            className="profile-img-card"
                            />
                        <p>Edward is a Software Engineer Fellow at General Assembly. His background has provided him with work experience within the Electrical Manufacturing industry.</p>
                        </div>
                        <div className="card-action">
                        <a href="https://github.com/epizarro98" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>

                <div className="col s4 card medium blue-grey darken-1 about-card">
                    <div className="card-content white-text">
                    <h5>Justin Nykiel</h5>
                    <img
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQGHwVLORsLcbg/profile-displayphoto-shrink_400_400/0/1608248674407?e=1615420800&v=beta&t=_TZ2SnPTLp6RTwbmz-UpxcP0wdnqbktZ3E2jSGmotBY"
                        alt="profile-img"
                        className="profile-img-card"
                        />
                    <p>Justin is a Software Engineer Fellow at General Assembly. He is also a Physical Therapist at UT Health Austin with a Ph.D in Physical Therapy from the University of Delaware.</p>
                    </div>
                    <div className="card-action">
                    <a href="https://github.com/justin-nykiel" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>

                <div className="col s4 card medium blue-grey darken-1 about-card">
                    <div className="card-content white-text">
                    <h5>Salima Harun</h5>
                    <img
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQG9aF9LKUdolg/profile-displayphoto-shrink_400_400/0/1603992612316?e=1615420800&v=beta&t=vMpaNoarTFqPDAZ-GzNcaz5ouEvzyg1G_lhmqu2Yp2I"
                        alt="profile-img"
                        className="profile-img-card"
                        />
                    <p>Salima is a Software Engineer Fellow at General Assembly. She is also a Senior Consultant at Ernst & Young with a BBA from the University of Oklahoma.</p>
                    </div>
                    <div className="card-action">
                    <a href="https://github.com/nerasan" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>

                </div>

            </div>
        </>
    )
}
export default About