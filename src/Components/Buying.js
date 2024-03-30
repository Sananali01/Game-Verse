import React from "react";
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
import { toast } from "react-toastify";

const gameGenres = {
  "GTA 5": { genres: "Action, Adventure", price: 59.99 },
  "Read Dead Redemption 2": { genres: "Action, Adventure", price: 59.99 },
  "Witcher 3": { genres: "Action, Adventure", price: 49.99 },
  "Forza Horzion 3": { genres: "Racing", price: 39.99 },
  "Call of Duty: Warzone": { genres: "Action, Adventure", price: 69.99 },
  "Assassin's Creed Unity": { genres: "Action, Adventure", price: 29.99 },
  "Hitman III": { genres: "Action, Adventure", price: 20.99 },
  Valorant: { genres: "Action, Adventure", price: 34.99 },
  "Tekekn 7": { genres: "Action, Adventure, Fighting", price: 39.99 },
  "CyberPunk 2077": { genres: "Action, Adventure", price: 59.99 },
  "Fifa 23": { genres: "Sports", price: 49.99 },
  "Gear of War 4": { genres: "Action, Adventure", price: 24.99 },
  "Hogwarts Legacy": { genres: "Action, Adventure, RPG", price: 59.99 },
  "God of War: Ragnarok": { genres: "Action, Adventure", price: 69.99 },
  Fortnite: { genres: "Action, Adventure", price: 89.99 },
  Synced: { genres: "Action", price: 39.99 },
  "Last of Us": { genres: "Action, Adventure", price: 39.99 },
  Warface: { genres: "Action", price: 29.99 },
};

const gameImages = {
  "GTA 5": gamingImage1,
  "Read Dead Redemption 2": gamingImage2,
  "Witcher 3": gamingImage3,
  "Forza Horzion 3": gamingImage4,
  "Call of Duty: Warzone": gamingImage5,
  "Assassin's Creed Unity": gamingImage6,
  "Hitman III": gamingImage7,
  Valorant: gamingImage8,
  "Tekekn 7": gamingImage9,
  "CyberPunk 2077": gamingImage10,
  "Fifa 23": gamingImage11,
  "Gear of War 4": gamingImage12,
  "Hogwarts Legacy": gamingImage13,
  "God of War: Ragnarok": gamingImage14,
  Fortnite: gamingImage15,
  Synced: gamingImage16,
  "Last of Us": gamingImage17,
  Warface: gamingImage18,
};

export default function Buying({ onAddToCart }) {
  const notifyItemAddedToCart = (itemName) => {
    toast.success(`${itemName} has been added to your cart`, {
      position: 'bottom-center', // Change the position
      autoClose: 1000,
      className: 'custom-toast',
    });
  };
  
  return (
    <div>
      <header className="header">
        <div className="container">
          <h6>EXPLORE THE GAMING WORLD</h6>
          <h1>Ultimate Gaming Experience</h1>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">
            Best Games of The Year! You Should Buy
          </h2>
          <div className="row">
            {Object.keys(gameGenres).map((gameName) => (
              <div className="col-md-4" key={gameName}>
                <div className="card buy-now-card">
                  <img
                    src={gameImages[gameName]}
                    alt={gameName}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-titles">{gameName}</h5>
                    <p className="card-text">{gameGenres[gameName].genres}</p>
                    <p className="card-text">${gameGenres[gameName].price}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        onAddToCart({
                          id: gameName,
                          name: gameName,
                          price: gameGenres[gameName].price,
                          image: gameImages[gameName],
                        });
                        notifyItemAddedToCart(gameName); // Notify when added to cart
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
