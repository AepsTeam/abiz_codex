import React from 'react'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux'

function mapStateToProps(state, ownProps) {
    return {
    }
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        upload: function (params) {
            dispatch(imageUpload(params))
        }
    }
}


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: ''
        }
    }
    render() {
        const { uploadedFile, name, password } = this.state
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
                    <div className="col-md-2 col-md-offset-4">
                        <button className="btn btn-primary" type="button">确定</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)