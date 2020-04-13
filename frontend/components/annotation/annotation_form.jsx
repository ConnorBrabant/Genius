import React from 'react';

class AnnotationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.annotation.id,
            description: this.props.annotation.description,
            start_index: this.props.annotation.startIndex,
            end_index: this.props.annotation.endIndex,
            joke_id: this.props.annotation.jokeId,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(type) {
        return (e) => this.setState({ [type]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(() => this.props.closeForm())
    }
            
    render() {
        let textPlaceholder;
        if (this.props.formType === 'New') {
            textPlaceholder = "Don't just put the joke in your own words-drop some knowledge!";
        } else {
            textPlaceholder = this.state.description;
        }
        return (
            <div className='annotation-form'>
                <form className='a-form' onSubmit={this.handleSubmit} >
                <textarea 
                    id='a-description' 
                    onChange={this.update('description')} 
                    placeholder={textPlaceholder}
                    value={this.state.description}  />
                <div className='annotation-form-buttons'>
                    <button className='annotation-button-save' type='submit'>Save</button>
                    <button className='annotation-button-cancel' onClick={() => this.props.closeForm()}>Cancel</button>
                </div>
                </form>
            </div>  
        )
    } 
}

export default AnnotationForm;