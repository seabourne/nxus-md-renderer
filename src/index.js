/* 
* @Author: Mike Reich
* @Date:   2016-01-24 09:29:54
* @Last Modified 2016-01-24
*/

'use strict';

import marked from 'marked'

import {renderer} from 'nxus-templater/lib/modules/renderer'
import {NxusModule} from 'nxus-core'

class MdRenderer extends NxusModule{
  
  constructor () {
  	super()
    renderer.renderer('md', this._render);
    renderer.renderer('markdown', this._render);
  }

  _render (content, data, callback) {
    return marked(content);
  }
}

export default MdRenderer
export let mdRenderer = MdRenderer.getProxy()