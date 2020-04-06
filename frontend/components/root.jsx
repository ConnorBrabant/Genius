import React from 'react';
import { HashRoute } from 'react-router-dom';

export default (store) => {
    render () {
        return (
            <Provider store={store} >
                <HashRoute>
                    <App />
                </HashRoute>
            </Provider>
        )
    }
} 
