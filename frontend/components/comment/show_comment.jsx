import React from 'react';
import CommentForm from './new_comment_container'

class CommentShow extends React.Component {
    constructor (props) {
        debugger
        super(props);
    }

    

    render () {
        const comments = this.props.comments.map((comment, idx) => (
            <li key={idx}>{comment.content}</li>
        ));
    return (
        // let comments = this.props.comments.map()    return (
            <div className='comment-section'>
                <CommentForm 
                    commentableType={this.props.commentableType}
                    commentableId={this.props.commentableId}
                />
                <ul className='comment-list'>
                    {comments}
                </ul>
            </div>
        )
    }
}

export default CommentShow;