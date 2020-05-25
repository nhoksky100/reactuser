import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: this.props.setEditUser.id,
            name: this.props.setEditUser.name,
            phone: this.props.setEditUser.phone,
            permission: this.props.setEditUser.permission,
        }
    }
    isChangeEdit  = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]:value});


    }
    saveUser = ()=>{
        var save ={};
        save.id= this.state.id;
        save.name= this.state.name;
        save.phone= this.state.phone;
        save.permission= this.state.permission;
        this.props.getSaveUser(save);
        this.props.changeStausEdit();
        
    }
    render() {
        //console.log(this.state);
        
        return (
            <div className="form-group">
                <form>
                    {/* <button type="button" onClick={() => this.clickEditStatus()} className="btn btn-secondary">Đóng</button> */}
                    <h4 className="card-title text-center">Edit User</h4>
                    {/* Material input */}
                    <div className="md-form md-bg input-with-pre-icon">
                        <i className="fa fa-user input-prefix" />
                        <input onChange={(e)=>this.isChangeEdit(e)} defaultValue={this.props.setEditUser.name} type="text" id="prefixInside4" name="name" className="form-control" placeholder="Tên" />
                    </div>
                    <div className="md-form md-bg input-with-pre-icon">
                        <i className="fa fa-phone input-prefix" />
                        <input onChange={(e)=>this.isChangeEdit(e)} defaultValue={this.props.setEditUser.phone} name="phone" type="text" id="prefixInside4" className="form-control" placeholder="Phone" />
                    </div>
                    <div className="md-form md-bg input-with-pre-icon">
                        <i className="fa fa-user-circle input-prefix" />
                        <select onChange={(e)=>this.isChangeEdit(e)} defaultValue={this.props.setEditUser.permission} required name="permission" type="text" id="prefixInside4" className="form-control" >

                            <option>Admin</option>
                            <option>User</option>
                        </select>
                    </div>
                    <div className="md-form md-outline input-with-pre-icon text-center">
                        <input  onClick={()=> this.saveUser()}  type="button" className="btn btn-success" value="Lưu" />
                        <div type="button" onClick={()=> this.props.changeStausEdit()} className="btn btn-secondary">Đóng</div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;