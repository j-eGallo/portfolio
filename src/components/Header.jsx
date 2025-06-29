import './header.css';
import { useMemo } from 'react';
import Autotype from './Autotype';

const keywords = [
  "FRONT-END", "SQL", "BACK-END", "GITHUB", "DOCKERS", "NODE JS"
];

export default function Header() {
  const words = useMemo(() => {
    return Array.from({ length: 90 }).map((_, i) => {
      const word = keywords[Math.floor(Math.random() * keywords.length)];
      const x = Math.random() * 110;
      const y = Math.random() * 100;
      const size = Math.random() * 1.2 + 0.8;
      const delay = Math.random() * 1; 

      return {
        id: i,
        word,
        x,
        y,
        size,
        delay,
      };
    });
  }, []); // une seule fois à l'affichage

  return (
    <div className="header">
      <div className="keywords-container">
        {words.map(({ id, word, x, y, size, delay }) => (
          <span
            key={id}
            className="keyword"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              fontSize: `clamp(0.6rem, ${size}rem, 1.8rem)`,
              animationDelay: `${delay}s`,
            }}
          >
            {word}
          </span>
        ))}
      </div>
      <div className="autotype-container">
        <Autotype />
      </div>
    </div>
  );
}
