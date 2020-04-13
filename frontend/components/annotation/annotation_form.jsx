import React from 'react';

class AnnotationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            start_index: this.props.startIndex,
            end_index: this.props.endIndex,
            joke_id: this.props.joke,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(type) {
        return (e) => this.setState({ [type]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.postAnnotation(this.state).then(() => this.props.closeAnnotation())
    }
            
    render() {
        return (
            <div className='annotation-form'>
                <form className='a-form' onSubmit={this.handleSubmit} >
                <textarea 
                    id='a-description' 
                    onChange={this.update('description')} 
                    placeholder="Don't just put the joke in your own words-drop some knowledge!"
                    value={this.state.description}  />
                <div className='annotation-form-buttons'>
                    <button className='annotation-button-save' type='submit'>Save</button>
                    <button className='annotation-button-cancel' onClick={() => this.props.closeAnnotation()}>Cancel</button>
                </div>
                </form>
            </div>  
        )
    } 
}

export default AnnotationForm;