import React, { Component } from 'react';
import axios from 'axios';
import PokeEntry from './components/PokeEntry';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      selectedType: null
    }

  }
  componentDidMount() {
    axios.get('/pokemon').then(result => { this.setState({ pokemon: result.data }) })
  }

  render() {
    return (
      <div>
        <h1>Pokemon!</h1>
        <button onClick={() => { this.setState({selectedType: null})}}>Show All</button>
        <select id="type" onChange={(e) => { this.setState({ selectedType: e.target.value }) }}>
          <option>Sort by Type</option>
          <option>Grass</option>
          <option>Fire</option>
          <option>Water</option>
          <option>Normal</option>
          <option>Poison</option>
          <option>Electric</option>
          <option>Ground</option>
          <option>Fighting</option>
          <option>Psychic</option>
          <option>Rock</option>
          <option>Ghost</option>
          <option>Dragon</option>
        </select>
        <button>INSERT</button>
        {this.state.pokemon.map(eachMon => {
          if ( this.state.selectedType === null) {
            return <PokeEntry pokemon={eachMon} key={eachMon._id} />
          }
          if (this.state.selectedType === eachMon.type) {
            return <PokeEntry pokemon={eachMon} key={eachMon._id} />
          }
        })
        }


      </div>
    );
  }
}

export default App;