import './index.css'

const NavBar = props => {
  const {score, totalScore, isGameInProgress} = props
  return (
    <nav className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        className="nav-img"
        alt="emoji logo"
      />
      <h1 className="heading">Emoji Game</h1>
      <div className="score-container">
        {isGameInProgress && (
          <div>
            <p className="score">Score: {score}</p>
            <p className="score">Top Score: {totalScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
