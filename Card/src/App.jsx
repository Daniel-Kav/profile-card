import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';

const App = () => {
  const profiles = [
    {
      name: "Eva Jones",
      age: 25,
      profilePicture: "https://i.pravatar.cc/150?img=32",
      bio: "Eva is a software engineer from Kenya. She specializes in full-stack development and enjoys working with React and Node.js. In her free time, Eva loves hiking and exploring nature.",
    },
    {
      name: "Dan Doe",
      age: 28,
      profilePicture: "https://i.pravatar.cc/150?img=12",
      bio: "Dan is a graphic designer from Kenya with a keen eye for detail. He has worked on various high-profile projects and is passionate about creating visually appealing designs. Dan is also an avid photographer.",
    },
    {
      name: "John Doe",
      age: 30,
      profilePicture: "https://i.pravatar.cc/150?img=3",
      bio: "John is a project manager from Kenya with over 8 years of experience in the tech industry. He excels at team coordination and project execution. Outside of work, John enjoys playing chess and mentoring young professionals.",
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
