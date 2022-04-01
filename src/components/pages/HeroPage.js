import React from 'react';
import WaveSvg from '../svg/AnimatedWaveSvg';
import './hero-styles.css';

export default function Hero() {
  return (
    <div className="hero">
      <WaveSvg />
      <div id="hero-search-bar">
        <input type="text" placeholder="Arama yap..." />
        <button id="search-button">
          <svg id="search-svg-icon" viewBox="0 0 20 20">
            <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
          </svg>
        </button>
      </div>
      <div id="hero-options">
        <button>Evler</button>
        <button>Arsalar</button>
        <button>Kiralık</button>
        <button>Satılık</button>
        <button>Diğer Hizmetlerimiz</button>
        <button>Tümü</button>
      </div>
      <div id="hero-scroll-down">
        <span>Daha fazla</span>
        <svg class="svg-icon" id="down-arrow" viewBox="0 0 20 20">
          <path
            fill="none"
            d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
