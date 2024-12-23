// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchObj} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchObj

  return (
    <li className="list-item">
      <div className="match-card">
        <div className="match-competing-team-logo-container">
          <img
            src={competingTeamLogo}
            alt={`competing team ${competingTeam}`}
            className="match-competing-team-logo"
          />
        </div>
        <p className="match-competing-team-name">{competingTeam}</p>
        <p className="match-result">{result}</p>
        <p className={`match-status ${matchStatus.toLowerCase()}`}>
          {matchStatus}
        </p>
      </div>
    </li>
  )
}

export default MatchCard
