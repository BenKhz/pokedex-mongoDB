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

  handleAction(e, action) {
    if (action === "RENAME") {
      const newName = this.state.pokemon.map(each => {
        if (e.target.name === each._id) {
          each.name = e.target.value;
        }
        return each;
      })
      this.setState({ pokemon: newName })
    }
    if (action === "DELETE") {
      const filtered = this.state.pokemon.filter(each => e.target.name !== each._id)
      this.setState({ pokemon: filtered })
    }
    if (action === "INSERT") {
      var name = prompt("Pokemon Name?")
      var type = "Normal";
      var img = "https://fontmeme.com/images/Pokemon-Logo.jpg"
      var payload = {name, type, img};
      axios.post('/pokemon', payload)
        .catch(err => { console.error(err) })
    }
  }
  render() {
    return (
      <div>
        <h1>Pokemon!</h1>
        <button onClick={() => { this.setState({ selectedType: null }) }}>Show All</button>
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
        <button onClick={(e) => {this.handleAction(e, "INSERT")}}>INSERT</button>
        <div className="pokeFlex">
          {this.state.pokemon.map(eachMon => {
            if (this.state.selectedType === null) {
              return <PokeEntry pokemon={eachMon} key={eachMon._id} handleAction={this.handleAction.bind(this)} />
            }
            if (this.state.selectedType === eachMon.type) {
              return <PokeEntry pokemon={eachMon} key={eachMon._id} handleAction={this.handleAction.bind(this)} />
            }
          })
          }
        </div>

      </div>
    );
  }
}

export default App;