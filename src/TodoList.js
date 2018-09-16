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

  handleLiClick(index){
    // 操作state推荐做法
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
        list
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
              return <li key={index} onClick={this.handleLiClick.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
