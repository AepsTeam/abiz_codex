import React from 'react'
import Dropzone from 'react-dropzone'

export default class Login extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <form>
                    <div className="form-group">
                        <label htmlFor="name" className="col-md-2 col-md-offset-2">姓名</label>
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="请输入" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="col-md-2 col-md-offset-2">密码</label>
                        <div className="col-md-4">
                            <input type="password" className="form-control" placeholder="请输入" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="col-md-2 col-md-offset-2">头像</label>
                        <div className="col-md-4">
                            <Dropzone
                                multiple={false}
                                accept="image/*"
                                onDrop={this.onImageDrop.bind(this)}>
                                <p>Drop an image or click to select a file to upload.</p>
                            </Dropzone>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}