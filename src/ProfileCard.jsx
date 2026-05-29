function ProfileCard({name, role, location, bio}) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{role} · {location}</p>
      <p>{bio}</p>
      <p>Building things with React one component at a time.</p>
      <button className="prof-btn">Follow</button><br></br>
      <button className="prof-btn">Message</button>
    </div>
  );
}

export default ProfileCard;