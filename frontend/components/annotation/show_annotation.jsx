import { render } from "react-dom"
import React from 'react';
import AnnotationEdit from './edit_annotation_container'
import CommentShow from '../comment/show_comment_container'
import LikeShow from '../likes/show_likes_container'

class AnnotationShow extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            edit: false,
        }
        this.displayEditForm = this.displayEditForm.bind(this);
        this.closeEditForm = this.closeEditForm.bind(this);
    }

    update(type) {
        (e) => this.setState({ [type]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.update
    }

    displayEditForm() {
        this.setState( {
            edit: true,
        })
    }

    closeEditForm() {
        this.setState( {
            edit: false,
        })
    }

    delete() {
        this.props.deleteAnnotation(this.props.annotation).then(() => this.props.closeAnnotation());
    }

    render () {     
        let annotationModify;
        if (this.state.edit) {
            annotationModify = <AnnotationEdit annotation={this.props.annotation} closeForm={this.closeEditForm} />
        } else if (this.props.currentUser === this.props.annotation.user_id) {
            annotationModify = 
                <div className='annotation-modify'>
                    <button className='annotation-button-edit' onClick={() => this.displayEditForm()}>Edit</button>
                    <button className='annotation-button-delete' onClick={() => this.delete()}>Remove</button>
                </div>
        } else {
            annotationModify = null;
        }
        return (
        <div className='annotation-showpage'>
            <div className='annotation-fixed'>
                <h2 className='annotation-showpage-user'>{this.props.annotation.username}</h2>
                <p className='annotation-showpage-description'>{this.props.annotation.description}</p>
                <div className='annotation-showpage-option'>{annotationModify}</div>
                <LikeShow 
                    likableType='Annotation'
                    likableId={this.props.annotation.id}
                    likes={this.props.annotation.likes}
                />
                <CommentShow 
                    commentableType='Annotation'
                    commentableId={this.props.annotation.id}
                />
            </div>
        </div>
    )}
}

export default AnnotationShow;