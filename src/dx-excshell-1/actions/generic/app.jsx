import React from 'react';
import * as ReactDOMServer from 'react-dom/server';

export function App() {
    return (<p> Hello World </p>);
}

export function render() {
    return ReactDOMServer.renderToString(< App />)
}