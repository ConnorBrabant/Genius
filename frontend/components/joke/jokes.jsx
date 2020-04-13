import React from 'react';
import AnnotatedJoke from './joke_annotated'
import AnnotationForm from '../annotation/new_annotation_container'
import AnnotationShow from '../annotation/show_annotation_container'

class Joke extends React.Component {
   
    constructor (props) { 
        super(props)
        this.state = {
            joke: {
                image: '',
                title: '',
                comedian: '',
                joke: '',
                annotations: [],
            },
            startIndex: 0,
            endIndex: 0,
            annotation: false,
            showingAnnotation: false,
        }
        this.annotation = this.annotation.bind(this);
        this.startAnnotation = this.startAnnotation.bind(this);
        this.closeAnnotation = this.closeAnnotation.bind(this);
        this.displayAnnotation = this.displayAnnotation.bind(this)
    }

    componentDidMount() {
        if (!localStorage.getItem('joke')) {
            localStorage.setItem('joke', JSON.stringify(this.props.joke));
            this.setState({ joke: this.props.joke })
        } else {
            this.setState({ joke: JSON.parse(localStorage.getItem('joke')) })
        }
        if (this.props.joke) {
            this.props.fetchJoke(this.props.joke.id);
        }
    }

    // componentDidUpdate(prevProps) {

    //     if (prevProps.annotations !== this.props.annotations) {
    //         this.props.fetchJoke(this.props.joke.id)
    //     }
        // document.getElementById('formatJoke').innerHTML = this.state.joke.joke;
    //}



    // script to remove all the <a> in order to determine index //
    // calculate offset and use that but joke is now modified to have <a> //
    // iterate through current innerHTML to find 

    startAnnotation(e) {
        this.setState({
            startElement: e.target
        })
    }

    annotation(e) {
        e.preventDefault();
        console.log(this.state.startElement.offsetParent);
        const highlighted = window.getSelection();
        const startIndex = highlighted.anchorOffset;
        const endIndex = highlighted.focusOffset;
        const startOffset = parseInt(this.state.startElement.getAttribute('data-offset'))
        const endOffset = parseInt(e.target.getAttribute('data-offset'))
        const startPosition = startIndex + startOffset;
        const endPosition = endIndex + endOffset;
        if ( !this.props.currentUser ||Boolean(startPosition) === false || Boolean(endPosition) === false || endPosition <= startPosition) {
            this.closeAnnotation()
        } else {  
            this.setState({
                startIndex: startPosition,
                endIndex: endPosition,
                annotation: true,
            }
        )}
    }

    closeAnnotation() {
        this.setState({
            startIndex: null,
            endIndex: null,
            annotation: false,
            showingAnnotation: false,
        })
    }

    displayAnnotation(annotation) {
        this.setState({
            showingAnnotation: annotation
        })
    }

    render () {
    let comments;
    if (this.state.annotation === true) {
        comments = <AnnotationForm 
                    joke={this.state.joke.id}
                    startIndex={this.state.startIndex}
                    endIndex={this.state.endIndex}
                    closeForm={this.closeAnnotation} />
    } else if (this.state.showingAnnotation) {
        comments = <AnnotationShow 
                    closeAnnotation={this.closeAnnotation}
                    annotation={this.state.showingAnnotation} />
    } else {
        comments = <p> 
            Drag and Click to begin a new annotation or select one on the page
            to read its description
        </p>
    }
    let currentAnnotations;
    if (this.props.annotations) {
        currentAnnotations = this.props.annotations
    } else if (this.state.joke.annotations) {
        currentAnnotations = this.state.joke.annotations;
    } else {
        currentAnnotations = [];
    }
    currentAnnotations.sort((a,b) => {
        if (a.start_index < b.start_index) {
            return -1 
        } else {
            return 1
    }});
    return (
        <div className='show-whole'> 
            <div className='show-header'>
                <img className='show-image' src={this.state.joke.image}></img>
                <div className='show-info'>
                    <div className='show-title'>{this.state.joke.title}</div>
                    <div className='show-comedian'>{this.state.joke.comedian.name}</div>
                </div>
            </div>
            <div className='show-content'>
                <AnnotatedJoke 
                    joke={this.state.joke.joke}
                    annotations={currentAnnotations}
                    startAnnotation={this.startAnnotation}
                    annotation={this.annotation}
                    displayAnnotation={this.displayAnnotation}
                />
                <div className='show-comments'>
                    {comments}
                </div>

            </div>
        </div>
    )
    }
}

export default Joke;