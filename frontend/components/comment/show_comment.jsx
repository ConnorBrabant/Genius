import React from 'react';
import CommentForm from './new_comment_container'

class CommentShow extends React.Component {
    constructor (props) {
        super(props);
    }



    render () {
        // let comments = this.props.comments.map()
        return (
            <div className='comment-section'>
                <CommentForm />
                <ul className='comment-list'>
                </ul>
            </div>
        )
    }
}

export default CommentShow;