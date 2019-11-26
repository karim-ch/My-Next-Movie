import React from 'react';
import '../../style/Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: ''
    };
    this.changeInput = this.changeInput.bind(this);
    this.displayFilm = this.displayFilm.bind(this);
  }

  changeInput(e) {
    this.setState({
      inputData: e.target.value
    });
  }
  displayFilm(e) {}
  render() {
    const { inputData } = this.state;
    return (
      <div className="row home-intro">
        <div className="col-12 overlay">
          <div className="intro-data">
            <h1>
              {' '}
              Welcome To <span className="swap-logo">MovieApp</span>
            </h1>
            <h1 className="text-blur-out">
              {' '}
              Welcome To <span className="swap-logo">MovieApp</span>
            </h1>
            <div className="search-container">
              <input
                value={inputData}
                onChange={this.changeInput}
                placeholder="Search for a film"
              />
              <button onClick={this.displayFilm}>Search</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
