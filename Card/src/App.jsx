import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';

const App = () => {
  const profiles = [
    {
      name: "Kevin Comba",
      age: 25,
      profilePicture: "https://i.pravatar.cc/150?img=1",
      bio: "Kevin is a software engineer from Argentina.",
    },
    {
      name: "Jane Comba",
      age: 28,
      profilePicture: "https://i.pravatar.cc/150?img=2",
      bio: "Jane is a graphic designer from Argentina.",
    },
    {
      name: "John Doe",
      age: 30,
      profilePicture: "https://i.pravatar.cc/150?img=3",
      bio: "John is a project manager from Argentina.",
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
