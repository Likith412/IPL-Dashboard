// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedLatestMatchDetails = {
    id: latestMatchDetails.id,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    result: latestMatchDetails.result,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    umpires: latestMatchDetails.umpires,
  }

  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = updatedLatestMatchDetails

  return (
    <div className="latest-match-details-container">
      <div className="latest-match-details-top">
        <div className="top-left">
          <p className="latest-match-competing-team-name">{competingTeam}</p>
          <p className="latest-match-date">{date}</p>
          <p className="latest-match-venue">{venue}</p>
          <p className="latest-match-result">{result}</p>
        </div>
        <div className="top-right">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-match-competing-team-logo"
          />
        </div>
      </div>
      <hr className="seperator" />
      <div className="latest-match-details-bottom">
        <p className="bottom-heading">First Innings</p>
        <p className="bottom-sub-heading">{firstInnings}</p>
        <p className="bottom-heading">Second Innings</p>
        <p className="bottom-sub-heading">{secondInnings}</p>
        <p className="bottom-heading">Man Of the Match</p>
        <p className="bottom-sub-heading">{manOfTheMatch}</p>
        <p className="bottom-heading">Umpires</p>
        <p className="bottom-sub-heading">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
