// Write your code here
import {Component} from 'react'
import './index.css'

const headsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossImage: headsImg,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossBtn = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImg = ''
    let updatedHeadsCount = headsCount
    let updatedTailsCount = tailsCount

    if (toss === 0) {
      tossImg = headsImg
      updatedHeadsCount += 1
    } else {
      tossImg = tailsImg
      updatedTailsCount += 1
    }

    this.setState({
      tossImage: tossImg,
      headsCount: updatedHeadsCount,
      tailsCount: updatedTailsCount,
    })
  }

  render() {
    const {tossImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="background">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="about">Heads (or) Tails</p>
          <img src={tossImage} className="toss-image" alt="toss result" />
          <button
            className="button"
            type="button"
            onClick={this.onClickTossBtn}
          >
            Toss Coin
          </button>
          <div className="points-container">
            <p className="total">Total: {totalCount}</p>
            <p className="heads">Heads: {headsCount}</p>
            <p className="tails">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
