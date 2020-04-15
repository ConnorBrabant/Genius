import { render } from "react-dom"
import React from 'react';
import AnnotationEdit from './edit_annotation_container'
import CommentShow from '../comment/show_comment_container'

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

    // doesnt edit the form but instead adds another edit with the new info //
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
                    <button className='annotation-button-delete' onClick={() => this.delete()}>Remove</button>
                </div>
        } else {
            annotationModify = null;
        }
        return (
        <div className='annotation-showpage'>
            <div className='annotation-fixed'>
                <h2 className='annotation-showpage-user'>{this.props.annotation.user}</h2>
                <p className='annotation-showpage-description'>{this.props.annotation.description}</p>
                <div className='annotation-showpage-option'>{annotationModify}</div>
                <div className=''></div>
                <CommentShow 
                    commentableType='Annotation'
                    commentableId={this.props.annotation.id}
                />
            </div>
        </div>
    )}
}

export default AnnotationShow;