
import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

globalStyle('h1, h2, h3, h4, h5, h6, p', {
  margin: 0,
});

globalStyle('ul, ol', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

globalStyle('button, input, textarea, select', {
  font: 'inherit',
  color: 'inherit',
});

globalStyle('button', {
  border: 'none',
  padding: 0,
  background: 'none',
  cursor: 'pointer',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('input, textarea', {
  minWidth: 0,
});
