import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table';
import Form from './Form';

class MyFirstApp extends Component {
    state = {
        people : [],
    }

    removePerson = index => {
        const { people } = this.state
      
        this.setState({
          people: people.filter((person, i) => {
            return i !== index;
          }),
        })
    }

    handleSubmit = person => {
        this.setState({ people: [...this.state.people, person] })
    }

    render() {
        const {people} = this.state;

        return (
        <div className="container">
            <Table peopleData={people} removePerson={this.removePerson} />
            <Form handleSubmit={this.handleSubmit}/>
        </div>
        )
    }
  }

  componentDidMount() {
     axios.get('http://localhost:5000/users')
      .then(res => {
        const characters = res.data.users_list;
        this.setState({ characters });
      })
      .catch(function (error) {
        //Not handling the error. Just logging into the console.
        console.log(error);
      });
  }

  export default MyFirstApp;
