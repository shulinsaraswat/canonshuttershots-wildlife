import React, {useState,useEffect}  from 'react';
import Sidebar from './Sidebar';
import '../css/wildlife.css';
import Scroll from './BackTopButton';
import NavbarSmall from './NavbarSmall';
import Footer from './Footer';
import wl1 from '../images/wildlife/wl1.jpeg';
import wl2 from '../images/wildlife/wl2.jpeg';
import wl3 from '../images/wildlife/wl3.jpeg';
import wl4 from '../images/wildlife/wl4.jpeg';
import wl5 from '../images/wildlife/wl5.jpeg';
import wildlife from '../images/wildlife.jpg';
import wl6 from '../images/wildlife/wl6.jpeg';
import wl7 from '../images/wildlife/wl7.jpeg';
import wl8 from '../images/wildlife/wl8.jpeg';
import wl9 from '../images/wildlife/wl9.jpeg';
import wl10 from '../images/wildlife/wl10.jpeg';

export default function Wildlife(){
    
    return(
        <div> 
        <Sidebar/>
        <NavbarSmall/>
        <Scroll showBelow={250} />
        <div className="jumbotron jumbotron-fluid" 
            style={{
                height:'230px', 
                //marginTop:'45px', 
                background:' linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.1) 100%),url("https://remingtonsolar.com/wp-content/uploads/banner-background.jpg") right no-repeat', 
                marginBottom: '0', 
                color: 'white', 
                backgroundSize:' cover'}}> 
                <div className="container1" > 
                    <h2 className="display-4 banner-wl">
                    Wildlife </h2> 
                    <hr className="line-wl"></hr><br/>
                </div> 
            </div><br/>
            <div className="background-wl">
            <div className="container"><br/>
            <div className="row row-cols-1 row-cols-md-3 body-wl">
                <div className="col mb-4">
                    <div className="card box-wl hovereffect">
                    <img src={wl1} className="card-img-top" alt="Royal Bengal Tiger" />
                    <div class="overlay">
                        <h2>Bannerghatta, India</h2>
                        <p>
                            <span>Royal Bengal Tiger<br/> Canon 650D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl hovereffect">
                    <img src={wl2} className="card-img-top" alt="Royal Bengal Tiger1"/>
                    <div class="overlay">
                        <h2>Bannerghatta, India</h2>
                        <p>
                            <span>Royal Bengal Tiger<br/> Canon 650D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl hovereffect">
                    <img src={wl3} className="card-img-top" alt="Royal bengal tiger1"/>
                    <div class="overlay">
                        <h2>Bannerghatta, India</h2>
                        <p>
                            <span>Royal Bengal Tiger<br/> Canon 650D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl wl6 hovereffect">
                    <img src={wl6} className="card-img-top" alt="Bonnet Macaque"/>
                    <div class="overlay">
                        <h2>Hampi, India</h2>
                        <p>
                            <span>Bonnet Macaque<br/> Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl hovereffect">
                    <img src={wl7} className="card-img-top" alt="Bonnet Macaque"/>
                    <div class="overlay">
                        <h2>Nandi Hills, India</h2>
                        <p>
                            <span>Bonnet Macaque<br/> Canon 650D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl wl8 hovereffect">
                    <img src={wl8} className="card-img-top" alt="Bonnet Macaque"/>
                    <div class="overlay">
                        <h2>Hampi, India</h2>
                        <p>
                            <span>Bonnet Macaque<br/> Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl wl4 hovereffect">
                    <img src={wl4} className="card-img-top" alt="Asiatic Lion"/>
                    <div class="overlay">
                        <h2>Bannerghatta, India</h2>
                        <p>
                            <span>Asiatic Lion<br/> Canon 650D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl hovereffect">
                    <img src={wildlife} className="card-img-top" alt="Asiatic Lion"/>
                    <div class="overlay">
                        <h2>Bannerghatta, India</h2>
                        <p>
                            <span>Asiatic Lion<br/> Canon 650D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl wl5 hovereffect">
                    <img src={wl5} className="card-img-top" alt="Asiatic Lion"/>
                    <div class="overlay">
                        <h2>Bannerghatta, India</h2>
                        <p>
                            <span>Asiatic Lion<br/> Canon 650D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-wl wl9 hovereffect">
                    <img src={wl9} className="card-img-top" alt="Puppies"/>
                    <div class="overlay">
                        <h2>Bannerghatta, India</h2>
                        <p>
                            <span>Indian Pariah Dog<br/> Canon 650D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4"></div>
                <div className="col mb-4">
                <div className="card box-wl wl10 hovereffect">
                    <img src={wl10} className="card-img-top" alt="Royal Bengal Tiger"/>
                    <div class="overlay">
                        <h2>Bannerghatta, India</h2>
                        <p>
                            <span>Royal Bengal Tiger<br/> Canon 650D</span>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div><hr style={{width:'75%'}}></hr>
            <Footer/>
        </div>
    );
} 