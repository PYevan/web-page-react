import React, { Component } from "react";
import "../assets/styles/Introduction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagic, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export default class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false, // Music playing state
      currentFactIndex: 0, // Fun fact index
    };
    this.audioRef = React.createRef(); // Reference for audio element
    this.magicContainerRef = React.createRef(); // Reference for the confetti container
    this.funFacts = [
      "I can make the best latte art!",
      "I once debugged code for 12 hours straight!",
      "I bench press bugs... and dumbbells!",
      "Coffee is my ultimate fuel!",
    ];
  }

  componentDidMount() {
    // Auto-rotate fun facts every 5 seconds
    this.factInterval = setInterval(() => {
      this.setState((prevState) => ({
        currentFactIndex: (prevState.currentFactIndex + 1) % this.funFacts.length,
      }));
    }, 5000);
  }

  componentWillUnmount() {
    // Clear the interval to prevent memory leaks
    clearInterval(this.factInterval);
  }

  toggleMusic = () => {
    const audio = this.audioRef.current;
    const { isPlaying } = this.state;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    this.setState({ isPlaying: !isPlaying });
  };

  triggerMagicEffect = () => {
    const magicContainer = this.magicContainerRef.current;

    // Create confetti elements
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.animationDelay = Math.random() * 1 + "s";
      confetti.style.backgroundColor =
        `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
      magicContainer.appendChild(confetti);

      // Remove confetti after animation
      setTimeout(() => {
        confetti.remove();
      }, 3000);
    }
  };

  render() {
    const { isPlaying, currentFactIndex } = this.state;

    return (
      <section id="introduction" className="intro-section">
        {/* Music Control */}
        <div className="music-control">
          <audio
            ref={this.audioRef}
            src="https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"
            loop
          />
          <button onClick={this.toggleMusic} className="music-btn">
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </button>
        </div>

        {/* Typing Greeting */}
        <div className="content">
          <h1 className="typing-greeting">
            Heyyy, <span className="name">Yuhang Lian</span>
            <span className="cursor">|</span>
          </h1>

          {/* Fun Fact */}
          <p className="fun-fact">💡 {this.funFacts[currentFactIndex]}</p>

          {/* Description List */}
          <p className="description">
            <span className="desc-item">
              <i className="fas fa-code"></i> Software Developer
            </span>
            <span className="desc-item">
              <i className="fas fa-dumbbell"></i> Fitness Enthusiast
            </span>
            <span className="desc-item">
              <i className="fas fa-coffee"></i> Coffee Lover
            </span>
            <span className="desc-item">
              <i className="fas fa-compass"></i> Explorer of New Things
            </span>
          </p>
        </div>

        {/* Magic Effect Container */}
        <div ref={this.magicContainerRef} className="magic-container"></div>

        {/* Magic Button */}
        <div className="magic-button">
          <button onClick={this.triggerMagicEffect} className="magic-btn">
            <FontAwesomeIcon icon={faMagic} />
          </button>
        </div>
      </section>
    );
  }
}
