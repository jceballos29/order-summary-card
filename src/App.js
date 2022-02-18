import "./App.css";

import hero from "./images/illustration-hero.svg";
import music from "./images/icon-music.svg";

import desktop from "./images/pattern-background-desktop.svg";
import mobile from "./images/pattern-background-mobile.svg";

function App() {
    
    const width = window.innerWidth;

    return (
        <div className="App" style={width <= 860 ? { backgroundImage: `url(${mobile})` } : { backgroundImage: `url(${desktop})` }}>
            <div className="card">
                <img
                    src={hero}
                    alt="Illustration Hero"
                    className="card__header"
                />
                <div className="card__body">
                    <h1>Order Summary</h1>
                    <p className="card__paragraph">
                        You can now listen to millions of songs, audiobooks, and
                        podcast on any device anywhere you like!
                    </p>
                    <div className="card__body__information">
                        <div className="card__body__icon">
                            <img src={music} alt="Music" />
                        </div>
                        <div className="card__body__plan">
                            <h4>Annual Plan</h4>
                            <p>$59.99/year</p>
                        </div>
                        <div className="card__body__change">
                            <span>Change</span>
                        </div>
                    </div>
                    <button className="card__body__button__payment">
                        Proceed to Payment
                    </button>
                    <span className="card__body__button__cancel">
                        Cancel Order
                    </span>
                </div>
            </div>
        </div>
    );
}

export default App;
