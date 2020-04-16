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
        this.props.action(this.state).then(() => this.setState({ content: '' })) 
    }

    render () {
        // let errorsForJoke;
        // let errorsForAnnotation;
        // if (this.props.errors.length && this.props.commentableType === 'Joke') {
        //     errorsForJoke = 'PLEASE ENTER A COMMENT'
        // } else if (this.props.errors.length && this.props.commentableType === 'Annotation') {
        //     errorsForAnnotation = 'PLEASE ENTER A COMMENT'
        // }
        let errors;
        if (this.props.errors.length) {errors = 'PLEASE ENTER A COMMENT'}
        return (
            <form className='comment-form' onSubmit={this.handleSubmit} >
                <div className='comment-errors'>{errors}</div>
                <textarea placeholder='Add a comment' onChange={this.update('content')} value={this.state.content}></textarea>
                <button className='annotation-button-save comment-button' type='submit'>Submit</button>
            </form>  
        )
    }
}

export default CommentForm;