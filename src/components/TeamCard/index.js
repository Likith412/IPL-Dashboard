// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamObj} = props
  const {id, name, teamImageUrl} = teamObj

  return (
    <li className="teams-list-item">
      <Link to={`/team-matches/${id}`} className="team-card">
        <div className="team-img-container">
          <img src={teamImageUrl} alt={name} className="team-img" />
        </div>
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
