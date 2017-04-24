import React from 'react'
import marked from 'marked'

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code, lang) {
        if (!lang) return code;
        try {
            return peacock.highlight(code);
        } catch (e) {
            return code;
        }
    }
});

export default class MarkdownShow extends React.Component {
    constructor(props) {
        super(props)
        this.createMarkup = this.createMarkup.bind(this)
    }
    createMarkup() {
        const { content } = this.props
        return { __html: marked(content) };
    }
    render() {
        return (
            <span dangerouslySetInnerHTML={this.createMarkup()}></span>
        )
    }
}
