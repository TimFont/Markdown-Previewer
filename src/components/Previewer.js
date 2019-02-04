import React, { Component } from 'react';
import marked from 'marked';

marked.setOptions({
    breaks: true,
  });

  
export default class Previewer extends Component{

    render(){
        const renderer = new marked.Renderer();
        renderer.link = function (href, title, text) {
            return `<a target="_blank" href="${href}">${text}` + '</a>';
        }
        
        return(
            <div className="card">
                <h5 className="card-header">Previewer</h5>
                <div id='preview' className="card-body"  dangerouslySetInnerHTML={{__html: marked(this.props.mark, { renderer: renderer })}}>
                </div>
            </div>
        );
    }
}