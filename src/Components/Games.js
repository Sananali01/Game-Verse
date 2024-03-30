import React, { useState } from "react";
import { Link } from "react-router-dom";
import gamingImage1 from "../images/gta.jpg";
import gamingImage2 from "../images/rdr.jpg";
import gamingImage3 from "../images/witcher.jpg";
import gamingImage4 from "../images/forza.jpg";
import gamingImage5 from "../images/cod.jpg";
import gamingImage6 from "../images/ac.jpg";
import gamingImage7 from "../images/hitman.jpg";
import gamingImage8 from "../images/valorant.jpg";
import gamingImage9 from "../images/tekken.jpg";
import gamingImage10 from "../images/cyberpunk.jpg";
import gamingImage11 from "../images/fifa.jpg";
import gamingImage12 from "../images/gow.jpg";
import gamingImage13 from "../images/hogwarts.jpg";
import gamingImage14 from "../images/ragnarok.jpg";
import gamingImage15 from "../images/royale.jpg";
import gamingImage16 from "../images/synced.jpg";
import gamingImage17 from "../images/us.jpg";
import gamingImage18 from "../images/warface.jpg";


export default function Games() {


  const gamesData = [
    {
      name: "Grand Theft Auto V",
      image: gamingImage1,
    },
    {
      name: "Red Dead Redemption 2",
      image: gamingImage2,
    },
    {
      name: "The Witcher 3",
      image: gamingImage3,
    },
    {
      name: "Forza Horizon 3",
      image: gamingImage4,
    },
    {
      name: "Call of Duty: Warzone",
      image: gamingImage5,
    },
    {
      name: "Assassin's Creed Unity",
      image: gamingImage6,
    },
    {
      name: "Hitman III",
      image: gamingImage7,
    },
    {
      name: "Valorant",
      image: gamingImage8,
    },
    {
      name: "Tekken 7",
      image: gamingImage9,
    },
    {
      name: "CyberPunk 2077",
      image: gamingImage10,
    },
    {
      name: "Fifa 23",
      image: gamingImage11,
    },
    {
      name: "Gear of War 4",
      image: gamingImage12,
    },
    {
      name: "Hogwarts Legacy",
      image: gamingImage13,
    },
    {
      name: "God of War: Ragnarok",
      image: gamingImage14,
    },
    {
      name: "Battle Royale",
      image: gamingImage15,
    },
    {
      name: "Synced",
      image: gamingImage16,
    },
    {
      name: "The Last of Us",
      image: gamingImage17,
    },
    {
      name: "Warface",
      image: gamingImage18,
    },
  ];
  







  const testimonials = [
    {
      text:
        "Grand Theft Auto V is an absolute masterpiece in the gaming world. The open-world environment, gripping storyline, and endless possibilities make it a must-play for all gamers.",
      author: 'John Doe',
    },
    {
      text:
        "Red Dead Redemption 2 is a breathtaking experience. The attention to detail, the immersive world, and the emotional depth of the characters make it a gaming gem.",
      author: 'Jane Smith',
    },
    {
      text:
        "The Witcher 3 is an epic adventure. The rich narrative, complex characters, and stunning visuals create a gaming experience that's simply unforgettable.",
      author: 'Michael Anderson',
    },
    {
      text:
        "Forza Horizon 3 is a racing dream come true. The beautiful Australian landscapes and the thrill of high-speed racing make it a must-play for car enthusiasts.",
      author: 'Emily Parker',
    },
    {
      text:
        "Call of Duty: Warzone offers intense action and thrilling battles. Join the fight and prove your skills in the ultimate battle royale experience.",
      author: 'Alex Johnson',
    },
    {
      text:
        "Assassin's Creed Unity takes you to historic Paris during the French Revolution. Explore the city, uncover secrets, and become a master assassin.",
      author: 'Sophia Adams',
    },
    {
      text:
        "Hitman III is the ultimate stealth experience. The creative assassinations, intricate level design, and immersive world make it a standout in the series.",
      author: 'Robert Mitchell',
    },
    {
      text:
        "Valorant is a tactical masterpiece. The teamwork, the strategy, and the intense battles make it one of the best FPS games out there.",
      author: 'Amanda Lee',
    },
    {
      text:
        "Tekken 7 is pure fighting excitement. The diverse roster of characters, the deep combat mechanics, and the competitive scene make it a fighting game legend.",
      author: 'Jessica Wong',
    },
    {
      text:
        "CyberPunk 2077 offers a dystopian future filled with intrigue and action. Explore Night City and make choices that shape your destiny.",
      author: 'David Wilson',
    },
    {
      text:
        "FIFA 23 sets the standard for sports gaming. The realistic gameplay, stunning graphics, and competitive multiplayer keep me hooked for hours.",
      author: 'David Ramirez',
    },
    {
      text:
        "Gear of War 4 offers intense third-person shooting action. Team up with friends, fight against monstrous enemies, and save humanity.",
      author: 'Sarah Davis',
    },
    {
      text:
        "Hogwarts Legacy lets you live the magic of the Harry Potter universe. Attend Hogwarts, learn spells, and uncover hidden secrets in this RPG adventure.",
      author: 'Emma Johnson',
    },
    {
      text:
        "God of War: Ragnarok continues the epic tale of Kratos. Join him on a new adventure filled with gods, monsters, and Norse mythology.",
      author: 'Chris Roberts',
    },
    {
      text:
        "Battle Royale offers fast-paced multiplayer action. Survive, eliminate your opponents, and be the last player standing in this intense game mode.",
      author: 'Samuel Lee',
    },
    {
      text:
        "Synced is a thrilling action game. Team up with other players and take on hordes of robotic enemies in a post-apocalyptic world.",
      author: 'Sophie Williams',
    },
    {
      text:
        "The Last of Us is a gripping story of survival in a post-apocalyptic world. Follow Ellie and Joel as they navigate danger and build a bond like no other.",
      author: 'Matthew Brown',
    },
    {
      text:
        "Warface offers intense online multiplayer battles. Choose your class, customize your gear, and fight in various game modes with friends.",
      author: 'Liam Smith',
    },
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };


  return (
    <>
       <section className="py-5 gaming-section">
        <div className="container">
          <h2 className="text-center text-dark mb-5">
            Explore Our Gaming World &#128293;
          </h2>
          <div className="row">
            {gamesData.map((game, index) => (
              <div className="col-md-4" key={index}>
                <div className="gaming-card">
                  <img src={game.image} alt={game.name} className="img-fluid mb-3" />
                  <div className="card-overlay">
                    <h5 className="card-title">{game.name}</h5>
                    <Link to="/Buying" className="btn btn-primary">
                      Play Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  




      <section className="testimonial-section">
        <div className="container">
          <h2 className="text-center display-5 fw-bold">Player Reviews</h2>
          <div className="testimonial-slider mt-5">
            {testimonials.map((testimonial, index) => (
              <div
              key={index}
              className={`testimonial-slide ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <div className="testimonial-content">
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-author">- {testimonial.author}</p>
              </div>
            </div>
            ))}
          </div>
          <div className="testimonial-controls text-center">
            <button id="prevBtn" className="btnn" onClick={prevSlide}>
              Previous
            </button>
            <button id="nextBtn" className="btnn" onClick={nextSlide}>
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
