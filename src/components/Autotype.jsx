import { TypeAnimation } from 'react-type-animation';
import './autotype.css'

export default function Autotype() {
   return (
    <TypeAnimation
      sequence={[
        'JEAN-EMMANUEL GALLO',
        9000,
        'DÉVELOPPEUR WEB',
        9000,
        'DÉVELOPPEUR BACK-END',
        9000,
        'DÉVELOPPEUR FULL-STACK',
        9000,
        'DÉVELOPPEUR PASSIONNÉ',
        9000
      ]}
      className='autotype'
      wrapper="span"
      speed={50}
      style={{ fontSize: '2.5em', display: 'inline-block', color: "white", zIndex: "9", fontWeight: "900", fontFamily: `"Roboto", sans-serif`}}
      repeat={Infinity}
    />
  );
}