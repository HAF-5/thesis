import React from 'react';

// import VideoPlayer from 'react-videoplayer';
// import 'react-videoplayer/lib/index.css';
import sample from '../img/loader.mp4';
import '../Loader/Loader.css'

class Loader extends React.Component {

    render() {
        return (
            <div>
                <video className='videoTag' autoPlay loop muted style={{margin:"auto"}}>
                    <source src={sample} type='video/mp4' />
                </video>
            </div>
        );
    }
}

export default Loader;

