import Button from "./Button";
import Card from "./Card";

function ProfileCard({name, role, location, bio}) {
  return (
    <div Card>
      <h2>{name}</h2>
      <p>{role} · {location}</p>
      <p>{bio}</p>
      <p>Building things with React one step at a time.</p>
      <Button label="Follow"/><br></br>
      <Button label="Message" color = "black"/>
    </div>
  );
}

export default ProfileCard;