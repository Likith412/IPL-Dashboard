// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.fetchTeams()
  }

  fetchTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({
      teamsList: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="home-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="container">
            <div className="home-logo-container">
              <img
                className="home-logo-img"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="home-logo-text">IPL DASHBOARD</h1>
            </div>

            <ul className="teams-list-container">
              {teamsList.map(eachItem => (
                <TeamCard teamObj={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
