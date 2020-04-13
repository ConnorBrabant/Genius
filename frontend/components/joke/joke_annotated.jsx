import React from 'react';

class AnnotatedJoke extends React.Component {

    //  formatJoke(joke) {
    //     const structureJoke = joke.split(" ");
    //     const jokeWithBreaks = []
    //     for (let i = 0; i < structureJoke.length; i++) {
    //         if (structureJoke[i].includes('.')) {
    //             jokeWithBreaks.push(structureJoke[i]);
    //             jokeWithBreaks.push("<br></br>");
    //         } else {
    //             jokeWithBreaks.push(structureJoke[i])
    //         }
    //     }
    //     let formattedJoke = jokeWithBreaks.join(" ");;
    //     return formattedJoke
    // }

    render() {
        const { joke, annotations, startAnnotation, annotation, displayAnnotation } = this.props;
        let annotatedJoke = [];
        let prevIndex = 0;
        let key = 0;
        annotations.forEach((annotation, idx) => {
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
            if (idx === annotations.length - 1) {
                annotatedJoke.push(
                    <span
                        key={key++}
                        data-offset={prevIndex}>
                        {joke.slice(prevIndex, joke.length)}
                    </span>
                )
            }

        })
        // let displayJoke = this.formatJoke(joke);
        if (annotatedJoke.length) {
            return (
                <p className='show-description' onMouseDown={startAnnotation} onMouseUp={annotation}>
                    {annotatedJoke}
                </p>
            )
        } else {
            return (
                <p className='show-description' onMouseDown={startAnnotation} onMouseUp={annotation} data-offset={0}>
                    {joke}
                </p>
            )
        }
    }
}

export default AnnotatedJoke;