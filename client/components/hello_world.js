import React, {PropTypes} from 'react'

const HelloWorld = () => {
  constructor(props) {
    super(props);
    this.name = {name: props.name};
    this.state = {count: props.initCount}
  }

  static defaultProps = {
    initCount: 0
  }

  static propTypes = {
    text: React.PropTypes.string
  }

  clickHandler = (e) =>  {
    console.log("this worked")
    this.setState({count: this.state.count + 1})
  }

  render () {
    return (
      <div onClick={this.clickHandler}>
        <div>Text: {this.props.text} Count: {this.state.count}</div>
      </div>
    );
  }
}

export default HelloWorld
