import React, { Component } from "react";
import "../assets/styles/Introduction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export default class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
    this.audioRef = React.createRef();
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

  render() {
    const { isPlaying } = this.state;

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

        {/* Introduction Content */}
        <div className="content">
          <h1>
            Heyyy, <span className="name">Yuhang Lian</span>
          </h1>
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
          <a
            href="/Yuhang_CV.pdf"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>

        {/* Background Decoration */}
        <div className="background-decor">
          <i className="fas fa-coffee"></i>
          <i className="fas fa-dumbbell"></i>
          <i className="fas fa-code"></i>
          <i className="fas fa-laptop-code"></i>
        </div>
      </section>
    );
  }
}
