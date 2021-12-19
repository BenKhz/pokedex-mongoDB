import React from 'react';

class PokeEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
      val: ''
    }
  }
  toggleView() {
    this.setState({ toggled: !this.state.toggled })
  }

  render() {
    const { name, img, _id } = this.props.pokemon;
    return (
      <div>
        <h3>{name}</h3>
        {this.state.toggled &&
          <>
            <input onChange={(e) => { this.setState({ val: e.target.value }) }} placeholder="Name this Pokemon?"></input>
            <button name={_id} value={this.state.val} onClick={(e) => { this.props.handleAction(e, "RENAME") }}>Rename!</button>
            <button name={_id} value={this.state.val} onClick={(e) => { this.props.handleAction(e, "DELETE") }}>Delete!</button>
          </>}
        <img src={img} onClick={this.toggleView.bind(this)} />
      </div>
    );
  }
};

export default PokeEntry;