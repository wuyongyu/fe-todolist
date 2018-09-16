import React from 'react';

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleLiDeleteClick = this.handleLiDeleteClick.bind(this);
  }

  handleLiDeleteClick() {
    const { handleLiClick, index } = this.props;
    handleLiClick(index);
  }

  render() {

    const { content } = this.props;

    return (
      <li onClick={this.handleLiDeleteClick}>
         {content}
      </li>
    )
  }
}

export default TodoItem;