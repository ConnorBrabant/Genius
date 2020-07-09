import React from 'react';
import CommentForm from './new_comment_container'
import LikesShow from '../likes/show_likes_container'
import { Link } from 'react-router-dom'

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
            let generatedComments = this.generateComments(Object.values(comments.comments), this.props.currentUser);
            this.setState({ comments: generatedComments })
        })
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(this.props.comments) !== JSON.stringify(prevProps.comments)) {
            let generatedComments;
            if (Object.keys(prevProps.comments).length) {
                let newCommentsSorted = [];
                let commentsLength = Object.keys(this.props.comments).length;
                for (let i = 0; i < commentsLength; i++) {
                    if (i < commentsLength - 1) {
                        newCommentsSorted.push(this.props.comments[i]);
                    } else {
                        newCommentsSorted.unshift(this.props.comments[i])
                    }
                }
                generatedComments = this.generateComments(Object.values(newCommentsSorted), this.props.currentUser);
            } else {
                generatedComments = this.generateComments(Object.values(this.props.comments), this.props.currentUser);
            }
            this.setState({ comments: generatedComments})
        }
    }

    generateComments(comments, currentUser) {
        let scopedComments = [];
        comments.map(comment => {
            if (comment.commentable_type === this.props.commentableType) {
                scopedComments.push(comment)
            }
        });
        const commentsLI = scopedComments.map((comment, idx) => {
            let deleteable = currentUser !== comment.user_id ? 
                null : <button className='comment-delete' onClick={() => this.props.deleteComment(comment)}>Delete</button>
            return (
            <li key={idx}>
                <span className='comment-username'>{comment.username.username}</span>
                <p className='comment-content'>{comment.content}</p>
                <div className='comment-interaction'>
                    <LikesShow 
                        likableType='Comment'
                        likableId={comment.id}
                        likes={comment.likes} 
                    />
                {deleteable}
                </div>
            </li>
            )
        });
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
        let commentForm = this.props.currentUser ? (
            <CommentForm 
                    commentableType={this.props.commentableType}
                    commentableId={this.props.commentableId}
                />
            ) : (
                <span>
                    <Link to='/login'>Sign In </Link>or 
                    <Link to='/signup'> Sign Up </Link>to Comment!
                </span>
            )
    return (
            <div className='comment-section'>
                {commentForm}
                <ul className='comment-list'>
                    {this.state.comments}
                </ul>
            </div>
        )
    }
}

export default CommentShow;