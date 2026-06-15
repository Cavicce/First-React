import ProfileCard from './components/ProfileCard';
import Card from './components/Card';
import "./App.css";

function App() {
  return (
    <div className='cont'> 
      <Card>
        <ProfileCard
          name = "Mickey Mouse"
          role = "Entertainer"
          location = "San Diego"
          bio = "Funny and Friendly"
        />
      </Card>
      <Card>
        <ProfileCard 
          name = "Davis Ngugi"
          role = "Frontend Developer"
          location = "Nairobi, Kenya"
          bio = "Open to Learn new skills and Passionate"
        />
      </Card>
      <Card>
        <ProfileCard
          name = "Lewis Njuguna"
          role = "U/I Designer"
          location = "Nairobi, Kenya"
          bio = "Consistent and a team player"
        />
      </Card>
      <Card>
        <ProfileCard
          name = "Lionard Decaprio"
          role = "BackEnd Development"
          location = "Thika, Kenya"
          bio = "Motivated"
        />
      </Card>
      <Card>
        <ProfileCard
          name = "Chupapi Muchacho"
          role = "Data Analyst"
          location = "Hong Kong"
          bio = ""
        />
      </Card>
    </div>
  );
}

export default App;