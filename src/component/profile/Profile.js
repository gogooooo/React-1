import React from 'react';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';


const Profile = ({name,profession, bio, handleName,children }) =>{
    handleName(name)
    return (
     <div>
            <p>{name}</p>
        <p>{profession}</p>
        <p>{bio}</p>
        <img src={children}/>
       
     </div>
        );
};

Profile.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.string,

  };
export default Profile;