import ProfileCard from './ProfileCard';
import "./App.css";

function App() {
  return (
    <div className='cont'>
      <ProfileCard 
      name = "Davis Ngugi"
      role = "Frontend Developer"
      location = "Nairobi, Kenya"
      bio = "Open to Learn new skills and Passionate"
      />
      <ProfileCard
      name = "Lewis Njuguna"
      role = "U/I Designer"
      location = "Nairobi, Kenya"
      bio = "Consistent and a team player"
      />
       <ProfileCard
      name = "Mickey Mouse"
      role = "Entertainer"
      location = "San Diego"
      bio = "Funny and Friendly"
      />
    </div>
  );
}

export default App;