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
        this.showButton = this.showButton.bind(this);
    }

    update(type) {
        return (e) => this.setState({ [type]: e.target.value})
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(() => this.setState({ content: '' })) 
    }

    showButton() {
        let commentButton = this.props.commentableType === 'Joke' ? document.getElementById('comment-button') : document.getElementsByClassName('comment-button')[1] 
        commentButton.classList.add('comment-button-show');
        document.addEventListener('click', (e) => {
            if (e.target.id != 'comment-input')
            commentButton.classList.remove('comment-button-show')
        })
    }

    render () {
        let errors;
        if (this.props.errors.length) {errors = 'PLEASE ENTER A COMMENT'}
        return (
            <form className='comment-form' onSubmit={this.handleSubmit} >
                <div className='comment-errors'>{errors}</div>
                <textarea id='comment-input' placeholder='Add a comment' onClick={() => this.showButton()} onChange={this.update('content')} value={this.state.content}></textarea>
                <button id='comment-button' className='annotation-button-save comment-button' type='submit'>Submit</button>
            </form>  
        )
    }
}

export default CommentForm;