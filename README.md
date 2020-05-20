Ludicrous is a clone of the website Genius.com. It's core functionality is allowing
users to upload joke transcripts and then add annotations 
that can be utilized to expand on jokes and explain them. Along with this, the 
app allows for users to leave comments on the jokes and annotations, and has an
upvote system for comments and annotations.

https://ludicrous.herokuapp.com/#/

### Technologies 

The app is structured using Ruby on Rails with PostgreSQL for the backend processes
with React/Redux to perform frontend functionality. The site is hosted on Heroku 
and images are stored via AWS S3.

### Features

Fundamental features to the app include: 
* Jokes
* Annotations
* Comments
* Votes

Annotations are core of the app. Users that are signed in are able to click and drag
their mouse to select what part of the transcript they wish to annotation. Upon releasing the mouse,
a text area is rendered where the user can input what they desire about the selected text and then
click save to add it to the page. 

![](./readme_visuals/annotation.gif)

The following code calculates the start and end index of a new annotation.

```javascript
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
```
On the window, the getSelection() function creates an object of the range of text the user has highlighted.
The functions anchorOffset and focusOffset called on this object return the start index and end
index of the object, respectively, in the text paragraph. the start and end indices of the 
annotation were determined. In order to make an annotation, the current paragraph element
storing the text of the transcript would be divided into three new elements: the first: a 
<p> element storing the text before the annotation, an <a> element containing the text chosen
to annotate, and an additional <p> element storing the text that succeeds the annotation. Both <p> 
elements are created with offset attribute stored on the HTML element that stores the index 
at which the <p> element would start in the original text if it had not been split into different elements. 
The offset attribute accounts for the amount of characters in any <p> or <a> elements that precede
that current element where the annotation is being created. The method getAttribute is called on both
the start and end elements of the annotation and then added to the variables containing the start and end
indices of the annotation in its current element (determined by anchorOffet and focusOffset). Combined,
this provides the of where the annotation occurs on the transcript text. This then allows for logic
determining that the annotation is valid in that it has valid positions.
        
The code following shows the process of creating the annotation once its indices are accounted for properly:
```javascript
        const { joke, annotations, startAnnotation, annotation, displayAnnotation } = this.props;
        let annotatedJoke = [];
        let prevIndex = 0;
        let key = 0; 
        let sorted = Object.values(annotations).sort((a, b) => {
            if (a.start_index < b.start_index) {
                return -1
            } else {
                return 1
            }
        });
        sorted.forEach((annotation, idx) => {
            const jokeSlice = joke.slice(annotation.start_index, annotation.end_index);
            let before = joke.slice(prevIndex, annotation.start_index)

            annotatedJoke.push(
                <span key={key++} data-offset={prevIndex}>{before}</span>
            )
            annotatedJoke.push(
                <a key={key++}
                    onClick={() => displayAnnotation(annotation) }
                    className='annotated'>
                    {jokeSlice}
                </a>
            )
            prevIndex = annotation.end_index;
            if (idx === Object.keys(annotations).length - 1) {
                annotatedJoke.push(
                    <span
                        key={key++}
                        data-offset={prevIndex}>
                        {joke.slice(prevIndex, joke.length)}
                    </span>
                )
            }

        })
```
Props are passed into this function from the joke component where the indicies are calculated. 
Joke is the text of the transcript without any annotations. Annotations are all previously created
annotations. startAnnotation is a method that is invoked a callback on a mouseDown event to set the start element of the annotation to retrieve its offset attribute. Similarly, Annotation is a method that is utilized on a mouseUp event to invoke the
first set of code explained above. Both of these are set DisplayAnnotation is an other method set on previously created
annotations that through an onClick event allows users to render the description of the annotation along with comments made
on it. In this code, annotations that previously existed are sorted based on their starting index in the joke transcipt. This sorting enables the comments to be looped through and determine their offset value that accounts for the annotations and text before it as well determine the actual text itself that comes before it. The sorting also allows the know what annotation comes
last in the text and thus properly add all remaining text left in the transcript to come after it. 

