import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

/**
 * Server-side render entry point used by the prerender script.
 * @param {string} url - The pathname to render (e.g. '/', '/privacy', '/terms')
 */
export function render(url) {
  return renderToString(
    React.createElement(App, { url })
  );
}
