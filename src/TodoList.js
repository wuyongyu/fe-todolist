import React from 'react';

class TodoList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
  }

  handleButtonClick(){
    this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
    })
  }

  handleInputChange(e){
    this.setState({
        inputValue: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
          <button onClick={this.handleButtonClick.bind(this)}>添加</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
