
import './ProfileCard.css';

const ProfileCard = ({ name, age, profilePicture, bio }) => (
  <div className="profile-card">
    <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
    <h2>{name}</h2>
    <p>Age: {age}</p>
    <p>{bio}</p>
  </div>
);

export default ProfileCard;
