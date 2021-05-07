import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { Head } from '../client/pages/index';

const app = express();

app.get('*', (req, res) => {
  const reactStr = renderToString(<Head />);

  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title></title>
  </head>
  <body>
      <div id="root">${reactStr}</div>
  </body>
  </html>`;

  return res.send(html);
});

app.listen(3000, () => console.log('node listen 3000'));