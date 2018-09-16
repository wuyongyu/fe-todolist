import React from 'react';

class TodoList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  handleButtonClick(){
    this.setState({
        list: [...this.state.list, 'hello']
    })
  }

  render() {
    return (
      <div>
        <div>
          <input type="text"/>
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
