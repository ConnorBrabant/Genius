import React from 'react';
import AnnotatedJoke from './joke_annotated'
import AnnotationForm from '../annotation/new_annotation_container'
import AnnotationShow from '../annotation/show_annotation_container'
import CommentShow from '../comment/show_comment_container'

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
            currentAnnotations: []
        }
        this.annotation = this.annotation.bind(this);
        this.startAnnotation = this.startAnnotation.bind(this);
        this.closeAnnotation = this.closeAnnotation.bind(this);
        this.displayAnnotation = this.displayAnnotation.bind(this)
    }

    componentDidMount() {
        if (!localStorage.getItem('joke')) {
            localStorage.setItem('joke', JSON.stringify(this.props.joke));
            this.props.fetchAnnotations(this.props.joke.id).then(annotations => {
                this.setState({ 
                    joke: this.props.joke,
                    currentAnnotations: annotations.annotations
                })
            });
        } else {
            let jokeStored = JSON.parse(localStorage.getItem('joke'));
            this.props.fetchJoke(jokeStored.id).then(joke => {
                this.props.fetchAnnotations(jokeStored.id).then(annotations => {
                    this.setState({ 
                        joke: Object.values(joke.joke)[0],
                        currentAnnotations: annotations.annotations
                    })
            });
        })
    }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.annotations !== this.props.annotations) {
            this.setState({ currentAnnotations: this.props.annotations})
        }
    }


    startAnnotation(e) {
        this.setState({
            startElement: e.target
        })
    }

    annotation(e) {
        e.preventDefault();
        const highlighted = window.getSelection();
        const startIndex = highlighted.anchorOffset;
        const endIndex = highlighted.focusOffset;
        const startOffset = parseInt(this.state.startElement.getAttribute('data-offset'))
        const endOffset = parseInt(e.target.getAttribute('data-offset'))
        const startPosition = startIndex + startOffset;
        const endPosition = endIndex + endOffset;
        if ( !this.props.currentUser || Boolean(startPosition) === false || Boolean(endPosition) === false || endPosition <= startPosition) {
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
                    annotation={this.state.showingAnnotation.id} />
    } else if (!this.props.currentUser)  {
        comments = <p>
            Please Sign in or Sign up to create annotations!
        </p>
    }
    else {
        comments = <p> 
            Drag and Click to begin a new annotation or select one on the page
            to read its description
        </p>
    }
    let commentShow;
    if (typeof this.state.joke.id === 'number') {
        commentShow = <CommentShow
            commentableType='Joke'
            commentableId={this.state.joke.id}
        />
    } else {
        commentShow = null;
    }
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
                <div className='show-content-left'>
                    <AnnotatedJoke 
                        joke={this.state.joke.joke}
                        annotations={this.state.currentAnnotations}
                        startAnnotation={this.startAnnotation}
                        annotation={this.annotation}
                        displayAnnotation={this.displayAnnotation}
                    />
                    {commentShow}
                </div>
                <div className='show-comments'>
                    <div className='comment-showbar'>
                        {comments}
                    </div>
                </div>

            </div>
        </div>
    )
    }
}

export default Joke;