import React from 'react'
import { Link } from 'react-router'
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/markdown'
import 'brace/theme/monokai'
import MarkdownPreview from './MarkdownPreview'



export default class extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            editContent: props.content
        }
    }
    onChange(newValue) {
        this.setState({ editContent: newValue })
    }
    onSubmit() {
        const { editContent } = this.state
        const { saveHandle, path } = this.props
        saveHandle({ pathname: path, content: editContent })
    }
    componentWillReceiveProps(nextProps) {
        const { content } = nextProps
        const { editContent } = this.state
        if (editContent == '') {
            this.setState({ editContent: content })
        }
    }
    render() {
        const { editContent } = this.state
        const { path } = this.props
        return (
            <section className="markdown-form">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <AceEditor
                                mode="markdown"
                                theme="monokai"
                                name="UNIQUE_ID_OF_DIV"
                                editorProps={{ $blockScrolling: true }}
                                value={editContent}
                                onChange={this.onChange}
                                height='800px'
                                width="100%"
                            />
                        </div>
                        <div className="col-md-6">
                            <MarkdownPreview content={editContent} ></MarkdownPreview>
                        </div>
                    </div>
                    <div className="row fixed">
                        <button onClick={this.onSubmit} className="btn btn-primary btn-md" type="button">提交</button>
                        <Link to={path} className="btn btn-default btn-md" role="button">取消</Link>
                    </div>
                </div>
            </section>
        )
    }
}