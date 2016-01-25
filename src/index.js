/* 
* @Author: Mike Reich
* @Date:   2016-01-24 09:29:54
* @Last Modified 2016-01-24
*/

'use strict';

import marked from 'marked'

export default class MdRenderer {
  
  constructor (app, loaded) {
    app.get('renderer').provide('renderer', 'md', this._render);
    app.get('renderer').provide('renderer', 'markdown', this._render);
  }

  _render (content, data, callback) {
    return marked(content);
  }
}

