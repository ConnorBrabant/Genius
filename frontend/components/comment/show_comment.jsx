import React from 'react';
import CommentForm from './new_comment_container'

class CommentShow extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            comments: []
        }
        this.loadMoreComments = this.loadMoreComments.bind(this);
    }

    componentDidMount() {
        this.props.fetchComments(this.props.commentableId, 0).then((comments) => {
            let generatedComments = this.generateComments(comments);
            this.setState({ comments: generatedComments })
        })
    }

    generateComments(comments) {
        const commentsLI = comments.map((comment, idx) => (
            <li key={idx}>
                <span className='comment-username'>{comment.username.username}</span>
                <p className='comment-content'>{comment.content}</p>
            </li>
        ));
        return commentsLI;
    }

    loadMoreComments() {
        this.props.fetchComments(this.props.commentableId, this.state.comments.length).then((comments) => {
            let generatedComments = this.generateComments(comments);
            this.setState({ comments: generatedComments })
        });
    }

    render () {
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
                <button className='comment-load' onClick={this.loadMoreComments}>SHOW MORE</button>
            </div>
        )
    }
}

export default CommentShow;