import React from 'react'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux'
import { imageUpload } from '../../redux/actions/upload'

function mapStateToProps(state, ownProps) {
    return {
        content: state.get('rootReducer').get('uploadReducer').get('uploadContent').get('data')
    }
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        upload: function (params) {
            dispatch(imageUpload(params))
        }
    }
}


class Register extends React.Component {
    constructor(props) {
        super(props)
        this.onImageDrop = this.onImageDrop.bind(this)
        this.handleImageUpload = this.handleImageUpload.bind(this)
        this.state = {
            uploadedFile: '',
            name: '',
            password: ''
        }
        this.style = {
            width: 200,
            height: 100,
            borderWidth: 2,
            borderColor: '#666',
            borderStyle: 'dashed',
            borderRadius: 5
        };
        this.activeStyle = {
            borderStyle: 'solid',
            borderColor: '#6c6',
            backgroundColor: '#eee'
        };
        this.rejectStyle = {
            borderStyle: 'solid',
            borderColor: '#c66',
            backgroundColor: '#eee'
        };
    }
    handleImageUpload(file) {
        const { upload } = this.props
        upload({ file: file })
    }
    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });
        this.handleImageUpload(files[0]);
    }
    render() {
        const { uploadedFile, name, password } = this.state
        const { content } = this.props
        const imageStyle = connect.displayUrl != '' ? { display: 'inline-block', width: '100%' } : { display: 'none', width: '100%' }
        return (
            <div className="container-fluid">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="name" className="col-md-2 col-md-offset-2 control-label" value={name}>姓名</label>
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="请输入" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="col-md-2 col-md-offset-2 control-label" value={password}>密码</label>
                        <div className="col-md-4">
                            <input type="password" className="form-control" placeholder="请输入" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="col-md-2 col-md-offset-2 control-label">头像</label>
                        <div className="col-md-4">
                            <div className="col-md-6">
                                <Dropzone
                                    multiple={false}
                                    accept="image/*"
                                    style={this.style}
                                    activeStyle={this.activeStyle}
                                    rejectStyle={this.rejectStyle}
                                    onDrop={this.onImageDrop.bind(this)}>
                                    <p>将图片拖拽此区域</p>
                                </Dropzone>
                            </div>
                            <div className="col-md-6">
                                <img src={content.displayUrl} style={imageStyle}></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-md-offset-4">
                        <button className="btn btn-primary" type="button">确定</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)