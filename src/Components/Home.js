import React from 'react'
import { Link } from 'react-router-dom'

import video from '../images/game.mp4'
import img from '../images/rdr.jpg'
import img2 from '../images/gta.jpg'
import img3 from '../images/witcher.jpg'
import img4 from '../images/tekken.jpg'
import img5 from '../images/valorant.jpg'
import img6 from '../images/ragnarok.jpg'
import img7 from '../images/fifa.jpg'
import img8 from '../images/forza.jpg'
import img9 from '../images/cod.jpg'
function HomePage() {
  return (
    
    <div>

        <section className="video-background">
        <video autoPlay loop muted poster="images/video-poster.jpg" id="bg-video">
          <source src={video} type="video/mp4" />
        </video>

        <div className="video-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="video-heading">Welcome to Game Verse</h1>
                <p className="video-subheading">The ultimate gaming experience awaits you.</p>
                <Link to="/Games" className="btn btn-primary btn-lg">Explore Games</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    <section className="bg-warning py-5 text-center">
        <div className="container">
            <i className="fas fa-gamepad fa-3x mb-3 fade-in"></i>
            <h2 className="fade-in">AWESOME GAMING PRODUCTS AVAILABLE NOW</h2>
            <Link to="/products" className="btn  btn-lg">Buy Some Gaming Stuff</Link>
        </div>
    </section>
    

    <section className="py-5">
      <div className="container">
          <h2 className="text-center mb-4">Best Games of The Year! You Should Buy</h2>
          <div className="row">
              <div className="col-md-4">
                  <div className="card buy-now-card">
                      <img src={img}alt="Headphones" className="card-img-top" />
                      <div className="card-body">
                          <h5 className="card-titles">Red Dead Redemption 2</h5>
                          <p className="card-text">Action, Adventure</p>
                          
                      </div>
                  </div>
              </div>
  

              <div className="col-md-4">
                  <div className="card buy-now-card">
                      <img src={img2} alt="Headphones" className="card-img-top" />
                      <div className="card-body">
                          <h5 className="card-titles">Grand Theft Auto V</h5>
                          <p className="card-text">Action, Adventure</p>
                          
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card buy-now-card">
                      <img src={img3} alt="Headphones" className="card-img-top" />
                      <div className="card-body">
                          <h5 className="card-titles">Witcher 3</h5>
                          <p className="card-text">Action, Adventure</p>
                          
                      </div>
                  </div>
              </div>
          </div>

          <div className="text-center">
              <Link to="/Buying" className="btn buy-btn"><i className="fas fa-gamepad"></i> Buy Now</Link>
          </div>
      </div>
  </section>
  

    <section className="py-5 gaming-section">
        <div className="container">
          <h2 className="text-center text-dark mb-5">Explore Our Gaming World &#128293;</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="gaming-card">
                <img src={img4} alt="Gaming 1" className="img-fluid mb-3" />
                <div className="card-overlay">
                    <i className="fas fa-gamepad"></i> 
                  <h5 className="card-title">Tekken 7</h5>
                  <Link to="/Buying" className="btn btn-primary">Play Now</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="gaming-card">
                <img src={img5} alt="Gaming 2" className="img-fluid mb-3" />
                <div className="card-overlay">
                  <h5 className="card-title">Valorant</h5>
                  <Link to="/Buying" className="btn btn-primary">Play Now</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="gaming-card">
                <img src={img6} alt="Gaming 3" className="img-fluid mb-3" />
                <div className="card-overlay">
                  <h5 className="card-title">God of War: Ragnarok</h5>
                  <Link to="/Buying" className="btn btn-primary">Play Now</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="gaming-card">
                <img src={img7} alt="Gaming 4" className="img-fluid mb-3" />
                <div className="card-overlay">
                  <h5 className="card-title">Fifa 23</h5>
                  <Link to="/Buying" className="btn btn-primary">Play Now</Link>
                </div>
              </div>
            </div>
 
            <div className="col-md-4">
              <div className="gaming-card">
                <img src={img8} alt="Gaming 7" className="img-fluid mb-3" />
                <div className="card-overlay">
                  <h5 className="card-title">Forza Horizon 3 </h5>
                  <Link to="/Buying" className="btn btn-primary">Play Now</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="gaming-card">
                <img src={img9} alt="Gaming 8" className="img-fluid mb-3" />
                <div className="card-overlay">
                  <h5 className="card-title">Call of Cuty: Warzone</h5>
                  <Link to="/Buying" className="btn btn-primary">Play Now</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      
      <section className="bg-dark py-5">
        <div className="container">
          <div className="text-center text-white">
            <i className="fas fa-gem fa-4x fade-in"></i> 
            <h5 className="fade-in">Exclusive Offer</h5>
            <h1 className="fade-in">Get the Hottest Games Now!</h1>
            <Link to="/Games" className="btn btn-primary btn-lg fade-in">Explore Games</Link>
          </div>
        </div>
      </section>   

      <section className="gaming-section py-5">
        <div className="container text-center">
          <h2 className="gaming-heading">Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-3">
              <h3 className="gaming-icon"><i className="fas fa-gamepad"></i></h3>
              <p className="gaming-text">High-Quality Games</p>
            </div>
            <div className="col-md-3">
              <h3 className="gaming-icon"><i className="fas fa-gem"></i></h3>
              <p className="gaming-text">Original Game Titles</p>
            </div>
            <div className="col-md-3">
              <h3 className="gaming-icon"><i className="fas fa-shield-alt"></i></h3>
              <p className="gaming-text">Game Warranty</p>
            </div>
            <div className="col-md-3">
              <h3 className="gaming-icon"><i className="fas fa-headset"></i></h3>
              <p className="gaming-text">24/7 Gaming Support</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}


export default  HomePage;