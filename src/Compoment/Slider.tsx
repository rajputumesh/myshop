import React, { FC } from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const slider: FC = () => {

    return (
        <AwesomeSlider
            media={[
                {
                source: 'https://rukminim1.flixcart.com/flap/1688/280/image/c114e26bce72191d.jpg?q=50',
                },
                {
                source: 'https://rukminim1.flixcart.com/flap/1688/280/image/08675e90338e98af.jpg?q=50',
                },
                {
                source: 'https://rukminim1.flixcart.com/flap/1688/280/image/1b4cc9f62ac9ee97.jpg?q=50',
                },
            ]}
        />
    )
}

export default slider;
