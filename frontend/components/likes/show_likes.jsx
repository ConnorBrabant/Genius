import React from 'react';

class Likes extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            likableType: this.props.likableType,
            likableId: this.props.likableId,
        }
        this.liked = this.liked.bind(this);
        this.likedByUser = this.likedByUser.bind(this);
        this.likeCount = this.likeCount.bind(this);
    }


    likedByUser() {
        let postLikedByUser = false;
        if (this.props.likes) {
            Object.values(this.props.likes).forEach(ele => {
                if (ele.user_id === this.props.currentUser) { postLikedByUser = ele }
            })
        }
        return postLikedByUser;
    }

    liked(vote) {
        let like = this.likedByUser();
        if (!like) {
            if (vote === 1) {
                (this.state.likableType === 'Comment') ? (
                    this.props.postCommentLike(Object.assign({}, this.state, { value: 1 }))
                ) : (
                    this.props.postAnnotationLike(Object.assign({}, this.state, { value: 1 }))
                )
            } else {
                (this.state.likableType === 'Comment') ? (
                    this.props.postCommentLike(Object.assign({}, this.state, { value: -1 }))
                ) : (
                    this.props.postAnnotationLike(Object.assign({}, this.state, { value: -1 }))
                )
            }
        } else if (vote === like.value) {
            this.state.likableType === 'Comment' ? this.props.deleteCommentLike(like.id) : this.props.deleteAnnotationLike(like.id)
        } else {
            this.state.likableType === 'Comment' ? this.props.updateCommentLike(like.id) : this.props.updateAnnotationLike(like.id)
        }
    }

    likeCount() {
        let likeCount = 0;
        if (this.props.likes) {
            Object.values(this.props.likes).forEach(like => likeCount += like.value)
        }
        if (likeCount) {
            let likeClass = likeCount > 0 ? 'like-count-positive' : 'like-count-negative';
            return <div className={likeClass}>{likeCount}</div>
        } else {
            return null;
        }
        
    }

    render() {
        return (
            <div className='like-buttons'>
                <a className='thumbsup' onClick={() => this.liked(1)}><i className="far fa-thumbs-up"></i></a>
                {this.likeCount()}
                <a className='thumbsdown' onClick={() => this.liked(-1)}><i className="far fa-thumbs-down"></i></a>
            </div>
        )
    }
}

export default Likes;