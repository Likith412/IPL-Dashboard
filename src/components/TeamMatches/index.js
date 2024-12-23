// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {
    teamObj: {},
    isLoading: true,
  }

  componentDidMount() {
    this.FetchTeamDetails()
  }

  FetchTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches.map(eachMatch => ({
        id: eachMatch.id,
        competingTeamLogo: eachMatch.competing_team_logo,
        competingTeam: eachMatch.competing_team,
        result: eachMatch.result,
        matchStatus: eachMatch.match_status,
      })),
    }

    this.setState({teamObj: updatedData, isLoading: false})
  }

  render() {
    const {teamObj, isLoading} = this.state
    const {
      teamBannerUrl = '',
      latestMatchDetails = {},
      recentMatches = [],
    } = teamObj

    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`team-matches-container ${id.toLowerCase()}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="container">
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <h1 className="team-matches-heading">Latest Matches</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="team-matches-list-container">
              {recentMatches.map(eachMatch => (
                <MatchCard matchObj={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
