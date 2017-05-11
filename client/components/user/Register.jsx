import React from 'react'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux'
import { imageUpload } from '../../redux/actions/upload'
import { register } from '../../redux/actions/user'

function mapStateToProps(state, ownProps) {
    return {
        uploadContent: state.get('rootReducer').get('uploadReducer').get('uploadContent'),
        registerContent: state.get('rootReducer').get('userReducer').get('registerContent')
    }
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        upload: function (params) {
            dispatch(imageUpload(params))
        },
        register: function (params) {
            dispatch(register(params,ownProps))
        }
    }
}


class Register extends React.Component {
    constructor(props) {
        super(props)
        this.onImageDrop = this.onImageDrop.bind(this)
        this.handleImageUpload = this.handleImageUpload.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            uploadedFile: '',
            name: '',
            password: ''
        }
    }
    onSubmit() {
        const { uploadedFile, name, password } = this.state
        const { register } = this.props
        register({ name: name, password: password })
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
        return (
            <div className="container-fluid">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="name" className="col-md-2 col-md-offset-2 control-label" >姓名</label>
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="请输入" value={name} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="col-md-2 col-md-offset-2 control-label" >密码</label>
                        <div className="col-md-4">
                            <input type="password" className="form-control" value={password} placeholder="请输入" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="col-md-2 col-md-offset-2 control-label">头像</label>
                        <div className="col-md-4">
                            <Dropzone
                                multiple={false}
                                accept="image/*"
                                onDrop={this.onImageDrop.bind(this)}>
                                <p>Drop an image or click to select a file to upload.</p>
                            </Dropzone>
                        </div>
                    </div>
                    <div className="col-md-offset-4 col-md-4">
                        <button type="button" className="btn btn-primary" onClick={this.onSubmit}>提交</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)