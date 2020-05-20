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

Fundamental to the functionality of the app are: Annotations, Likes, 

Annotations are core of the app. Users that are signed in are able to click and drag
their mouse to select what part of the transcript they wish to annotation. Upon releasing the mouse,
a text area is rendered where the user can input what they desire about the selected text and then
click save to add it to the page. 

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

The annotation functionality of the app was challenging to implement. In order
to work correctly, it required the unannotated paragraph element to be split 
into multiple elements upon the creation of an annotation. By utilizing the 
DOM methods that allow for grabbing information off the window like the index of 
a character within a paragraph as well as the characters themselves, you can 
directly add a class to the HTML element in order to give it a highlighted 
background as well as an onClick to display the description of the annotation 
selected as well the ability to edit, remove, upvote/downvote or add a comment 
to it. However the major challenge in this approach was that by wrapping the
now-annotated text into a new element (an anchor tag in this app) it splits the 
remaining text of the original paragraph into two separate strings, one comprised
of all the text before the annotation and one of the text after. This caused problems
now when trying to add additional annotations to the string of text after the 
original annotation as since it was a new string, its index restarted at 0 
and there was no reference to the amount of characters in the text before the 
annotation as well as in the annotation itself. To overcome this, each new element
that was created as result of adding annotation was giving an property that stored
the amount of characters that was in the elements before it. By storing this 
property on each element that was created by adding an annotation, the data could
be retrieved and then accounted for when creating a new annotation. 

The comments and upvote/downvote features of the app were implemented by using
Rails polymorphic association. By implementing a polymorphic association for these
two features, it allowed for more efficient code as now there was only the
requirement of one controller per feature that had actions that could be broadly
applied instead of requiring specific actions for if the comment was on an annotation
or if the comment was on a joke itself. Using Rails before_action method allowed
the app to first search for the specific object that the comment or like was 
being associated with and then create the desired comment/like.  

