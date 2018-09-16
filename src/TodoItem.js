import React from 'react';

class TodoItem extends React.Component {

    handleLiClick() {
        this.props.handleLiClick(this.props.index)
    }

    render() {
        return (
            <li onClick={this.handleLiClick.bind(this)}>
                {this.props.content}
            </li>
        )
    }
}

export default TodoItem;