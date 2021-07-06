import React from 'react';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';


const Person = ({name,profession, bio, imgSrc }) =>{
    return (
      <div>
        <p>{name}</p>
        <p>{profession}</p>
        <p>{bio}</p>
        <img src={imgSrc}/>
        
      </div>
        );
};


export default Person;