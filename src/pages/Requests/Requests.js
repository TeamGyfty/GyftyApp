import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import {List, ListItem} from '../../components/List';
// import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';

class Requests extends Component {
  constructor(props) {
    state = {
      requests: []
    };
  }
  componentDidMount() {
    this.loadRequests();
  }

  getRequests = () => {

  API.gyfty()
    .then(res => {
  // console.log(res);
      this.setState({
      requests: res.data.response.docs
      });
    })
    .catch(err => console.log(err));
   };

  loadRequests = () => {
    API.getRequests()
      .then(res => {
        console.log(res.data);
        this.setState({
          articles: res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteRequest = id => {
    API.deleteRequest(id)
      .then(res => this.loadRequests())
      .catch(err => console.log(err));
  };

  render() {
    return (
        <Row>
          <Col size="md-12">
            {this.state.requests.length ? (
              <List>
                {this.state.requests.map(requests => (
                  <ListItem key={requests._id}>
                      <strong>{requests.title}</strong>
                      <strong>{requests.name}</strong>
                      <strong>{requests.body}</strong>

                    <br />

                    <button
                      className="btn btn-danger"
                      style={{ float: 'right' }}
                      onClick={() => this.deleteRequest(requests._id)}
                    >
                      Delete Request
                    </button>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Saved Requests to Display</h3>
            )}
          </Col>
        </Row>
    );
  }
}

export default Requests;