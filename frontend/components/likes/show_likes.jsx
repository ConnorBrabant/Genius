import React from 'react';

class Likes extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            likableType: this.props.likableType,
            likableId: this.props.likableId,
        }
        this.liked = this.liked.bind(this);
    }


    liked(vote) {
        if (vote === 'up') {
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
    }

    render() {
        let likeCount = 0;
        if (this.props.likes) {
            Object.values(this.props.likes).forEach(like => likeCount += like.value)
        }
        return (
            <div className='like-buttons'>
                <a className='thumbsup' onClick={() => this.liked('up')}><i class="far fa-thumbs-up"></i></a>
                <div className='like-count'>{likeCount}</div>
                <a className='thumbsdown' onClick={() => this.liked('down')}><i class="far fa-thumbs-down"></i></a>
            </div>
        )
    }
}

export default Likes;