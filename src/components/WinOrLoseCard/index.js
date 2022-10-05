import './index.css'

const LOSE_IMG = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMG = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLossCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imgUrl = isWon ? WON_IMG : LOSE_IMG
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-loss-card">
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score-value">{score}/12</p>
        <button
          className="play-again-btn"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img src={imgUrl} className="win-loss-img" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLossCard
