import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import TableUser from './TableUser';
import AddUser from './AddUser';
import data from './data.json';
import { v4 as uuidv4 } from 'uuid';


// export default App;


class App extends Component {
  //connectSearch = ()=>{alert('connect success')}

  constructor(props) {
    super(props);
    this.state = {
      status: false,
      dataUser: data,
      searchText: '',
      getname: '',
      editUserStatus: false,
      setEditUser: {},setsave:{}
    }
  }
  
  componentWillMount() {
    if(localStorage.getItem('userData')===null || localStorage.getItem('userData')==='undefined'){ //kiem tra lay, neu du lieu khong co thi 
      localStorage.setItem('userData',JSON.stringify(data)); // tao lai du lieu trong localStorage truyền vào file json và chuyển đổi thành string
    }else{//
    
      
        var temp =JSON.parse(localStorage.getItem('userData')); // có du liệu rồi thì đổ vào biến tạm stringify chuyển lại thành JSON.parse
        this.setState({
            dataUser:temp//cập nhât vào data setstate
        });
       
        
    }
  }
  
  getsaveApp = (save) => {
  this.state.dataUser.forEach((value) => {
    if(value.id===save.id){
      value.name = save.name;
      value.phone = save.phone;
      value.permission= save.permission;   
    }
    localStorage.setItem('userData',JSON.stringify(this.state.dataUser));
  })}
  deleteUserApp = (deleteUser)=>{
   // var a=[2,3,4,5,6,7];a= a.filter(i=>i==2); console.log(a);
    //filter or delete |
    // filter là duyệt tất cả phần tử sau đó chỉ định ra trùng pt nào đã cho or không trùng pt đã cho
   
    var datadeleteUser= this.state.dataUser.filter(item=>item.id!==deleteUser);
    
    this.setState({
        dataUser:datadeleteUser // cập nhật lại data
    });
    //đổ du lieu vào localStorage
    localStorage.setItem('userData',JSON.stringify(datadeleteUser));
}
  getValueSearch = (dt) => {
    // alert('cha đã nhận từ con là:' + dt);
    this.setState({
      searchText: dt
    })
    //cha truyền cho component con từ props, mà con truyền sang C cha là truyền tham số

  }
  getadd = (name, phone, permission) => {

    var item = {};
    var items = this.state.dataUser;
    item.id = uuidv4();
    item.name = name;
    item.phone = phone;
    item.permission = permission;
    items.push(item);

    this.setState({
      dataUser: items
    })
    localStorage.setItem('userData',JSON.stringify(items));
    
    // console.log(this.state.dataUser);
  }
  ischangeStatus = () => { this.setState({ status: !this.state.status }) } // status them
  changeStausEdit = () => { this.setState({ editUserStatus: !this.state.editUserStatus }) } //status edit
  editapp = (user) => {

    this.setState({
      setEditUser: user
    })
    // console.log(user); //get datauser
  }



  render() {
    var result = [];  
    this.state.dataUser.forEach((item) => {
      // console.log(this.state.searchText);
      if (item.name.indexOf(this.state.searchText) !== -1) {
        result.push(item);
      }

    })
    return (
      <div>
        <Header />
        <div className="container">

          <div className="row">
            <Search
              getsaveApp={(save) => this.getsaveApp(save)}
              setEditUser={this.state.setEditUser}
              changeStausEdit={() => this.changeStausEdit()}
              editUserStatus={this.state.editUserStatus}
              tabledata={this.state.dataUser}
              getSearch={(dt) => this.getValueSearch(dt)}
              ischangestatus={() => this.ischangeStatus()} show={this.state.status} />
            <TableUser
              deleteUserApp = {(deleteUser)=>this.deleteUserApp(deleteUser)}
              changeStausEdit={() => this.changeStausEdit()}
              // editUserStatus ={this.state.editUserStatus}
              edittable={(user) => this.editapp(user)} tabledata={result}  />
            <AddUser setadd={(name, phone, permission) => this.getadd(name, phone, permission)} show={this.state.status} />
          </div>
        </div>
      </div>
      // tương tac bằng props kết nối giữa component ngang cấp vs nhau


    );
  }
}

export default App;
