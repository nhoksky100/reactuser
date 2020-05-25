import React, { Component } from 'react';
import TableRow from './TableRow';

class TableUser extends Component {
   dataUserRow = ()=>this.props.tabledata.map((value,key)=>(
            <TableRow
            deleteUserTable  = {(deleteUser)=>this.props.deleteUserApp(deleteUser)}
            changeStausEdit ={()=>this.props.changeStausEdit()}
            //editUserStatus ={()=>this.state.editUserStatus} 
            editrow={()=>this.props.edittable(value)}
             username={value.name} key={key}  stt={key} phone={value.phone} permission={value.permission} id={value.id}/>
    ))
    
    render() {
        //console.log(this.props.tabledata);
        
        return (
            
               
                  <div className="col-9">
                <table  className="table table-hover   table-inverse table-responsive" style={{ textAlign: 'center' }}>
                    <thead className="thead-inverse" style={{ textAlign: 'center' }}>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện Thoại</th>
                            <th>Quyền</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                           {this.dataUserRow()}
                    </tbody>
                </table>
            </div>
            
            
          

        );
    }
}

export default TableUser;