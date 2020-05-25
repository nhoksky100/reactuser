import React, { Component } from 'react';
import EditUser from './EditUser';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getvalueSearch: ''
         //   saveuser: {}
        }
    }

    setvalueSearch = (event) => {
        console.log('du lieu input search: ' + event.target.value);
        this.setState({
            getvalueSearch: event.target.value
        });
    }
    showUer = () => {
        if (this.props.show === true) {
            return <button type="button" onClick={() => this.props.ischangestatus()} className="btn btn-secondary">Đóng</button>
        } else {
            return <button className="btn btn-info" onClick={() => this.props.ischangestatus()} type="text">Thêm</button>
        }
    }
    getSaveUser = (save) => {  
        this.props.getsaveApp(save);  
     }
    edituser = () => {
        if (this.props.editUserStatus === true) {
            return (

                <EditUser
                   
                    getSaveUser ={(save)=>this.getSaveUser(save)}
                    setEditUser={this.props.setEditUser}
                    changeStausEdit={() => this.props.changeStausEdit()} />
            )
        }
    }
  
    render() {
        // var result = [];
        // this.props.tabledata.forEach((item) => {
        //   if (item.name.indexOf(this.state.getvalueSearch) !== -1) {
        //     result.push(item);

        //   }
        // })

        // console.log(result);


        return (
            <div className="searchForm">
                <div className="col-12">
                    <form className="form-inline mr-auto">
                        <input onChange={(event) => this.setvalueSearch(event)} className="form-control mark mr-sm-2" type="text" placeholder="Search" aria-label="Search" style={{ width: '500px' }} />
                        <div onClick={() => this.props.getSearch(this.state.getvalueSearch)} className="btn btn-info" type="submit">Tìm Kiếm</div>
                    </form>
                </div>
                <div className="col-12">
                    <hr />
                </div> {/* end search  */}
                {this.edituser()}
                {this.showUer()}

            </div>

        );
    }
}

