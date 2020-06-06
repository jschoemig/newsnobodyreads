import React, { Component } from 'react';
import { Heart} from 'react-spinners-css';


class Loading extends Component{
    render(){

        return(
        <div    style={{display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '25px 0px 0px 0px',
                }}
        >
                
            <Heart color="#3090C7" size="60" />
        </div>
            );
    }
}

export default Loading;