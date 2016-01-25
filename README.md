# Nxus Markdown Renderer

This module provides a Nxus module for rendering Markdown Content.

Don't know Nxus? [Learn about it](http://gonxus.org).

## Installation

```bash
> npm install nxus-md-renderer --save
```

## Usage

In order to use the renderer, request the Renderer.render method with either 'md' or 'markdown' as the type.

```javascript
var renderer = app.get('renderer')
renderer.request('render', 'md', '### Some Markdown Content').then((content) => {
  console.log(content)
})
```