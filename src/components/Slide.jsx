import Slider from 'react-infinite-logo-slider'
import Symfony from '../assets/symfony.png'
import Ts from '../assets/typescript.png'
import Reactp from '../assets/react.png'
import Mongo from '../assets/mongodb.svg'
import node from '../assets/node.png'
import php from '../assets/php.png'
import Docker from '../assets/docker.png'
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
                <img src={Symfony} alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Ts} alt="any3" className='w-36' />
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
                <img src={Mongo} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={wordpress} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Docker} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={git} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Symfony} alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Ts} alt="any3" className='w-36' />
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
                <img src={Mongo} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={wordpress} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Docker} alt="any3" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={git} alt="any3" className='w-36' />
            </Slider.Slide>
        </Slider>
    )
}              
                     
