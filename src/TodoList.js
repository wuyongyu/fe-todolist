import React from 'react';
import TodoItem from "./TodoItem";

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
  }

  handleButtonClick() {
    this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
    })
  }

  handleInputChange(e) {
    this.setState({
        inputValue: e.target.value
    })
  }

  handleLiClick(index) {
    // 操作state推荐做法
    const list = [...this.state.list];
    // 去除数组中的某个值
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
              return <TodoItem key={index} index={index} content={item} handleLiClick={this.handleLiClick.bind(this)} />
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
