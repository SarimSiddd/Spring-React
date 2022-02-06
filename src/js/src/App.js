import { Component } from 'react';
import './App.css';
import { getAllStudents } from './client';
import Clock from './Clock';
import Toggle from './Button';
import {
  Table
} from 'antd';


class App extends Component {


  state = {
    students: []
  }

  componentDidMount() {
    this.fetchStudents();
  }

  fetchStudents = () => {
    getAllStudents()
      .then(res => res.json()
        .then(students => {
          console.log(students);
          this.setState({
            students
          });
        }));
  }

  FirstName = 'Sarim Siddiqui';
  Element = <h1>Hello, {this.FirstName}</h1>

  render() {

    const user = {
      firstName: "Sarim",
      lastName: "Siddiqui"
    };

    function format(user) {
      return user.firstName + ' ' + user.lastName;
    }

    let printUser10Times = () => {

      let array = [];

      for (let i = 0; i < 10; i++) {
        array.push(<h1 key={i}>{format(user)}</h1>);
      }

      console.log(array);
      return array;
    }

    const element2 = <div>
      {printUser10Times()}
    </div>;


    const element = <h1>Hello {format(user)}!</h1>;

    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>
    }

    const welcomeElement = <Welcome name="Sarim" />;

    // return (
    //   <div>
    //    {element2}
    //    {element}
    //    {welcomeElement}
    //    <Clock/> 
    //    <Toggle/>
    //   </div>
    // );
    //return this.Element;

    const { students } = this.state;

    if (students && students.length) {

      const columns = [{

        title: 'Student Id',
        dataIndex: 'studentId',
        key: 'studentId'

      },
      {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName'
      },
      {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName'
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender'
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
      }
      ];

      return (
        <Table
          dataSource={students}
          columns={columns}
          rowKey='studentId' />
      );

    }

    return <h1>No students found</h1>
  }
}

export default App;
