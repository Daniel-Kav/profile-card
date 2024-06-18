import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';

const App = () => {
  const profiles = [
    {
      name: "Eva Jones",
      age: 25,
      profilePicture: "https://i.pravatar.cc/150?img=32",
      bio: "Eva is a software engineer from Kenya.",
    },
    {
      name: "Dan Doe  ",
      age: 28,
      profilePicture: "https://i.pravatar.cc/150?img=12",
      bio: "Dan  is a graphic designer from Kenya.",
    },
    {
      name: "John Doe",
      age: 30,
      profilePicture: "https://i.pravatar.cc/150?img=3",
      bio: "John is a project manager from Kenya.",
    },
  ];

  return (
    <div>
      <h1>Profile Cards</h1>
      <div className="profile-cards-container">
        {profiles.map((profile, index) => (
          <ProfileCard 
            key={index}
            name={profile.name}
            age={profile.age}
            profilePicture={profile.profilePicture}
            bio={profile.bio}
          />
        ))}
      </div> 
    </div>
  );
};

export default App;
