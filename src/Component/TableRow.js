import React, { Component } from 'react';

class TableRow extends Component {
  

    editRow = () => {
        this.props.changeStausEdit();
        this.props.editrow();
        
    }
   deleteUserRow  = (deleteUser)=>{
        this.props.deleteUserTable(deleteUser)
   }
    render() {
        return (
            <tr>
                <td >{this.props.stt + 1}</td>
                <td>{this.props.username}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.permission}</td>
                <td>
                    <div className="btn-group">
                        <div onClick={() => this.editRow()} className="btn btn-warning sua"><i className="fa fa-edit" /> Sửa</div>
                        <div onClick={(deleteUser)=>this.deleteUserRow(this.props.id)} className="btn btn-danger xoa"><i className="fa fa-trash" aria-hidden="true" /> Xoa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableRow;