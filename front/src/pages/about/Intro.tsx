import React from 'react';
import intro1 from '../images2/info1@2x.png';
import intro15 from '../images2/info1.5@2x.png';
import intro2 from '../images2/info2@2x.png';
import intro3 from '../images2/info3@2x.png';
const Intro = () => {
    return (
        <div className="intro_wrapper">
            <img
                className="image_intro1"
                src={intro1}
                alt='intro image' />
            <img
                className="image_intro15"
                src={intro15}
                alt='intro image' />
            <img
                className="image_intro2"
                src={intro2}
                alt='intro image' />
            <img
                className="image_intro3"
                src={intro3}
                alt='intro image' />


        </div>
    )
}

export default Intro;