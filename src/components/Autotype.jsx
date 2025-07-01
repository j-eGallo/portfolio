import { TypeAnimation } from 'react-type-animation';
import './autotype.css'

export default function Autotype() {
   return (
    <TypeAnimation
      sequence={[
        'JEAN-EMMANUEL GALLO',
        500,
        'DÉVELOPPEUR WEB',
        500,
        'DÉVELOPPEUR BACK-END',
        500,
        'DÉVELOPPEUR FULL-STACK',
        500,
        'DÉVELOPPEUR PASSIONNÉ',
        500
      ]}
      className='autotype'
      wrapper="span"
      speed={50}
      style={{ fontSize: '2.5em', display: 'inline-block', color: "white", zIndex: "9", fontWeight: "900", fontFamily: `"Roboto", sans-serif`}}
      repeat={Infinity}
    />
  );
}