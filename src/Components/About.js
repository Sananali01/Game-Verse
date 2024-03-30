import React from "react";
import aboutimage from "../images/game.jpg";

export default function About() {
  return (
    <div>
      <section className="about-us-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="image-container">
                <img
                  src={aboutimage}
                  alt="Game Verse"
                  className="about-us-image"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="about-us-content">
                <h2>About Game Verse</h2>
                <p>
                  Welcome to Game Verse, your ultimate gaming destination!
                  Founded by passionate gamers, Game Verse is dedicated to
                  delivering the best gaming experience to players of all
                  levels.
                </p>
                <p>
                  Our mission is to provide a platform where gamers can explore,
                  connect, and stay updated with the latest in the gaming world.
                  Whether you're a casual player or a competitive esports
                  enthusiast, Game Verse is designed with you in mind.
                </p>
                <p>
                  We offer a wide range of content, from in-depth game reviews
                  and guides to news about upcoming releases and esports events.
                  Game Verse is your go-to source for gaming insights, tips, and
                  community engagement.
                </p>
                <p>
                  Join us on this exciting journey as we dive into the immersive
                  world of gaming. Whether you seek thrilling adventures,
                  competitive challenges, or simply want to stay in the loop,
                  Game Verse has something for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="feature">
          <i className="fas fa-gamepad"></i>
          <h2>Wide Game Selection</h2>
          <p>Choose from a vast collection of games across genres.</p>
        </div>
        <div className="feature">
          <i className="fas fa-users"></i>
          <h2>Community</h2>
          <p>
            Connect with fellow gamers, share experiences, and make friends.
          </p>
        </div>
        <div className="feature">
          <i className="fas fa-trophy"></i>
          <h2>Competitive Play</h2>
          <p>Participate in tournaments and prove your skills.</p>
        </div>
      </section>

      <section className="services-section">
        <div className="service">
          <i className="fas fa-hands-helping"></i>
          <h2>Expert Support</h2>
          <p>Our dedicated support team is here to assist you 24/7.</p>
        </div>
        <div className="service">
          <i className="fas fa-newspaper"></i>
          <h2>News & Updates</h2>
          <p>Stay updated with the latest gaming news and releases.</p>
        </div>
        <div className="service">
          <i className="fas fa-comments"></i>
          <h2>Live Chat</h2>
          <p>Chat with gamers worldwide and share your experiences.</p>
        </div>
      </section>
    </div>
  );
}
