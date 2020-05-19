import React from 'react';

class Likes extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            likableType: this.props.likableType,
            likableId: this.props.likableId,
            likes: 0,
            thumbColor: null,
            likeColor: null,
        }
        this.liked = this.liked.bind(this);
        this.likedByUser = this.likedByUser.bind(this);
        this.likeCount = this.likeCount.bind(this);
    }

    componentDidMount() {
       this.likeCount();
    }

    componentDidUpdate(prevProps) {
        if (prevProps != this.props) {
            this.likeCount();
        }
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
        let thumbColorRender;
        let likeColorRender;
        if (this.props.likes) {
            Object.values(this.props.likes).forEach(like => {
                likeCount += like.value
                if (like.user_id === this.props.currentUser) {
                    like.value > 0 ? 
                    thumbColorRender = 'green'
                    :
                    thumbColorRender = 'red'
                    }
            })
        }
        if (likeCount > 0) {
            likeColorRender = 'like-count-positive'
        } else if (likeCount < 0) {
            likeColorRender = 'like-count-negative'
        } else {
            likeCount = null;
        }
        this.setState({
            likableType: this.props.likableType,
            likableId: this.props.likableId,
            likes: likeCount,
            thumbColor: thumbColorRender,
            likeColor: likeColorRender
        })
    }


    render() { 
        let currentlyUpvoted;
        let currentlyDownvoted;
        if (this.state.thumbColor === 'green') { 
            currentlyUpvoted = 'like-count-positive' 
        } else if (this.state.thumbColor === 'red') {
            currentlyDownvoted = 'like-count-negative'
        }
        return (
            <div className='like-buttons'>
                <a className='thumbsup' onClick={() => this.liked(1)}><i className={`far fa-thumbs-up ${currentlyUpvoted}`}></i></a>
                <div className={this.state.likeColor}>{this.state.likes}</div>
                <a className='thumbsdown' onClick={() => this.liked(-1)}><i className={`far fa-thumbs-down ${currentlyDownvoted}`}></i></a>
            </div>
        )
    }
}

export default Likes;