import React from 'react';
import CommentForm from './new_comment_container'

class CommentShow extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            comments: [],
        }
        this.loadMoreComments = this.loadMoreComments.bind(this);
    }

    componentDidMount() {
        const commentInfo = {
            commentableId: this.props.commentableId,
            commentableType: this.props.commentableType
        }
        this.props.fetchComments(commentInfo, 0).then((comments) => {
            debugger
            let generatedComments = this.generateComments(Object.values(comments.comments));
            this.setState({ comments: generatedComments })
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.comments !== prevProps.comments) {
            debugger
            let generatedComments = this.generateComments(Object.values(this.props.comments));
            this.setState({ comments: generatedComments })
        }
    }

    generateComments(comments) {
        debugger
        let scopedComments = [];
        comments.map(comment => {
            if (comment.commentable_type === this.props.commentableType) {
                scopedComments.push(comment)
            }
        });
        const commentsLI = scopedComments.map((comment, idx) => (
            <li key={idx}>
                <span className='comment-username'>{comment.username.username}</span>
                <p className='comment-content'>{comment.content}</p>
                <button className='comment-delete' onClick={() => this.props.deleteComment(comment)}>Delete</button>
            </li>
        ));
        return commentsLI;
    }

    loadMoreComments() {
        const commentInfo = {
            commentableId: this.props.commentableId,
            commentableType: this.props.commentableType
        }
        this.props.fetchComments(commentInfo, this.state.comments.length).then((comments) => {
            let generatedComments = this.generateComments(comments.comments);
            this.setState({ comments: this.state.comments.concat(generatedComments) })
        });
    }

    render () {
    return (
            <div className='comment-section'>
                <CommentForm 
                    commentableType={this.props.commentableType}
                    commentableId={this.props.commentableId}
                />
                <ul className='comment-list'>
                    {this.state.comments}
                </ul>
                <button className='comment-load' onClick={this.loadMoreComments}>SHOW MORE</button>
            </div>
        )
    }
}

export default CommentShow;