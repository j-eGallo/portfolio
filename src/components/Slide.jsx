import Slider from 'react-infinite-logo-slider'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Js from '../assets/js.png'
import Reactp from '../assets/react.png'
import node from '../assets/node.png'
import php from '../assets/php.png'
import wordpress from '../assets/wordpress.png'
import git from '../assets/git.png'

import './slide.css'


export default function Slide()  {
    
    return (
        <Slider
            width="150px"
            duration={20}
            pauseOnHover={false}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
            <Slider.Slide>
                <img src={Html} alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Css} alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Js} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Reactp} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={node} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={php} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={wordpress} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={git} alt="any3" className='w-36' />
            </Slider.Slide>
                        <Slider.Slide>
                <img src={Html} alt="any" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Css} alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Js} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Reactp} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={node} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={php} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={wordpress} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={git} alt="any3" className='w-36' />
            </Slider.Slide>
        </Slider>
    )
}              
                     
