import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdd: true,
            id: "",
            name: "",
            phone: "",
            permission: "Admin"
        }
    }

    isAdd = () => {
        if (this.state.isAdd === true) {
            return <button type="button" onClick={() => this.clickEditStatus()} className="btn btn-success">Thêm Mới</button>


        } else {
            return (
                <div className="form-group">
                    <form>
                        <button type="button" onClick={() => this.clickEditStatus()} className="btn btn-secondary">Đóng</button>
                        <h4 className="card-title text-center">Thêm User</h4>
                        {/* Material input */}
                        <div className="md-form md-bg input-with-pre-icon">
                            <i className="fa fa-user input-prefix" />
                            <input onChange={(event) => this.getvalue(event)} type="text" id="prefixInside4" name="name" className="form-control" placeholder="Tên" />
                        </div>
                        <div className="md-form md-bg input-with-pre-icon">
                            <i className="fa fa-phone input-prefix" />
                            <input onChange={(event) => this.getvalue(event)} name="phone" type="text" id="prefixInside4" className="form-control" placeholder="Phone" />
                        </div>
                        <div className="md-form md-bg input-with-pre-icon">
                            <i className="fa fa-user-circle input-prefix" />
                            <select required onChange={(event) => this.getvalue(event)} name="permission" type="text" id="prefixInside4" className="form-control" >

                                <option>Admin</option>
                                <option>User</option>
                            </select>
                        </div>
                        <div className="md-form md-outline input-with-pre-icon">
                            <input onClick={(name, phone, permission) => this.props.setadd(this.state.name, this.state.phone, this.state.permission)} type="reset" className="btn btn-success" value="Thêm" />
                        </div>
                    </form>
                </div>
            )
        }
    }
    getvalue = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
        var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.phone = this.state.phone;
        item.permission = this.state.permission;

        // console.log(phone);
        // console.log(permission);

    }
    // getForm = (event) => {
    //     // var user = ""
    //     // user += "ten:" + this.state.ten
    //     // user += "phone:" + this.state.phone


    // }
    checkstatus = () => {
        if (this.props.show === true) {
            return (
                <div className="form-group">
                <form>
                    {/* <button type="button" onClick={() => this.clickEditStatus()} className="btn btn-secondary">Đóng</button> */}
                    <h4 className="card-title text-center">Thêm User</h4>
                    {/* Material input */}
                    <div className="md-form md-bg input-with-pre-icon">
                        <i className="fa fa-user input-prefix" />
                        <input onChange={(event) => this.getvalue(event)} type="text" id="prefixInside4" name="name" className="form-control" placeholder="Tên" />
                    </div>
                    <div className="md-form md-bg input-with-pre-icon">
                        <i className="fa fa-phone input-prefix" />
                        <input onChange={(event) => this.getvalue(event)} name="phone" type="text" id="prefixInside4" className="form-control" placeholder="Phone" />
                    </div>
                    <div className="md-form md-bg input-with-pre-icon">
                        <i className="fa fa-user-circle input-prefix" />
                        <select required onChange={(event) => this.getvalue(event)} name="permission" type="text" id="prefixInside4" className="form-control" >

                            <option>Admin</option>
                            <option>User</option>
                        </select>
                    </div>
                    <div className="md-form md-outline input-with-pre-icon">
                        <input onClick={(name, phone, permission) => this.props.setadd(this.state.name, this.state.phone, this.state.permission)} type="reset" className="btn btn-success" value="Thêm" />
                    </div>
                </form>
            </div>
            )
        }
    }
    clickEditStatus = () => {
        this.setState({ isAdd: !this.state.isAdd });
    }
    render() {


        return (
            <div className="col">
                {this.isAdd()}
                {this.checkstatus()}
            </div>
            //   {/* end col-4 add user */ }

        );
    }
}

export default AddUser;