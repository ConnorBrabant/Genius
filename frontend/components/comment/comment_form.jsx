import React from 'react';

class CommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            content: '',
            commentableType: this.props.commentableType,
            commentableId: this.props.commentableId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(type) {
        return (e) => this.setState({ [type]: e.target.value})
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state) 
    }

    render () {
        return (
            <form className='comment-form' onSubmit={this.handleSubmit} >
                <textarea placeholder='Add a comment' onChange={this.update('content')} value={this.state.content}></textarea>
                <button className='annotation-button-save comment-button' type='submit'>Submit</button>
            </form>  
        )
    }
}

export default CommentForm;