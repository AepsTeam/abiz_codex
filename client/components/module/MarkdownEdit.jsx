import React from 'react'
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/markdown'
import 'brace/theme/monokai'
import MarkDownShow from './MarkdownShow'


export default class extends React.Component {
    constructor(props) {
        super(props)
        this.editContent = this.content
    }
    onChange(newValue) {
        this.editContent = this.newValue
    }
    render() {
        const { content } = this.props
        this.editContent = content
        return (
            <section>
                <AceEditor
                    mode="markdown"
                    theme="monokai"
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                    value={this.editContent}
                    onChange={this.onChange}
                />
                <MarkDownShow content={this.content} ></MarkDownShow>
            </section>
        )
    }
}