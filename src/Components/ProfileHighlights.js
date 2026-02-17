import messages from '../Data/Messages.json';
import './profileHighlights.css';

function ProfileHighlights(props) {
  return (
    <div ref={props.ref_to_use} className="highlights-root-container">
      <h1 className="blue-header">SKILLS & AWARDS</h1>
      <div className="highlights-grid">
        <div className="highlights-card">
          <h3>Skills & Technologies</h3>
          {messages.Skills.map((skill) => (
            <p key={skill.category}>
              <strong>{skill.category}:</strong> {skill.items}
            </p>
          ))}
        </div>
        <div className="highlights-card">
          <h3>Awards & Achievements</h3>
          <ul>
            {messages.Awards.map((award) => (
              <li key={award}>{award}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileHighlights;
