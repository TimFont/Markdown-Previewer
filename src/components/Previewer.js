import React, { Component } from 'react';
import marked from 'marked';


export default class Previewer extends Component{
    constructor(props){
        super(props);
        this.teste = this.teste.bind(this);

    }
    componentDidMount(){
        console.log(marked(this.props.mark));
    }

    teste(){
        console.log(marked(this.props.mark));
    }

    render(){
        const renderer = new marked.Renderer();
        renderer.link = function (href, title, text) {
            return `<a target="_blank" href="${href}">${text}` + '</a>';
        }
        
        return(
            <div className="card">
                <h5 className="card-header">Previewer</h5>
                <div className="card-body"  dangerouslySetInnerHTML={{__html: marked(this.props.mark, { renderer: renderer })}}>
                </div>
            </div>
        );
    }
}