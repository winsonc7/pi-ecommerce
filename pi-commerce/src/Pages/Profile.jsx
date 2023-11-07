import React from 'react';
import profile from '../Components/Assets/profile.png'
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile-container">
      <img src={profile} alt="" className="profile-image"/>
      <h2>Name: Edward Cullen</h2>
      <p>Email: notavampire@gmail.com</p>
      <p>Phone: 123-456-7890</p>
      <button className="button">Update Profile</button>
      <button className="button">Add Business</button>
    </div>
  );
};

export default Profile;