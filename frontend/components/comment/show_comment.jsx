// WHen more than 5 comments it doesnt load correctly and doesnt assign 
// the likes to the right one
// delete comments isnt re-rendering 

import React from 'react';
import CommentForm from './new_comment_container'
import LikesShow from '../likes/show_likes_container'

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
            let generatedComments = this.generateComments(Object.values(comments.comments));
            this.setState({ comments: generatedComments })
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.comments !== prevProps.comments) {
            let generatedComments;
            if (Object.keys(prevProps.comments).length) {
                let newCommentsSorted = [];
                let commentsLength = Object.keys(this.props.comments).length;
                for (let i = 0; i < commentsLength; i++) {
                    if (i < 5) {
                        newCommentsSorted.push(this.props.comments[i]);
                    } else {
                        newCommentsSorted.unshift(this.props.comments[i])
                    }
                }
                generatedComments = this.generateComments(Object.values(newCommentsSorted));
            } else {
                generatedComments = this.generateComments(Object.values(this.props.comments));
            }
            this.setState({ comments: generatedComments})
        }
    }

    generateComments(comments) {
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
                <div className='comment-interaction'>
                    <LikesShow 
                        likableType='Comment'
                        likableId={comment.id}
                        likes={comment.likes} 
                    />
                    <button className='comment-delete' onClick={() => this.props.deleteComment(comment)}>Delete</button>
                </div>
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
        let commentForm = this.props.currentUser ? (
            <CommentForm 
                    commentableType={this.props.commentableType}
                    commentableId={this.props.commentableId}
                />
            ) : (
                <span>Sign In or Sign Up to Comment!</span>
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