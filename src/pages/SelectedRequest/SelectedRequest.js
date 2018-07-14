import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class SelectedRequest extends Component {
  state = {
    requests: {},
    response:{},
    name: "",
    url: "",
    body: ""
  };
 
  componentDidMount() {
    this.loadRequest()
  };
  
  loadRequest = () => {
    API.getRequest(this.props.request._id)
    .then(res => this.setState({ requests: res.data }))
    .catch(err => console.log(err));
  };
  
  loadResponse = () => {
    let requestId = `${this.requests._id}`;
    API.getRespose(requestId)
      .then(res =>this.setState({respose: res.data}))
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.comment) {
      API.saveRespose({
        name: this.state.name,
        url: this.state.url,
        body: this.state.body
    })
      .then(res => this.loadRespose())
      .catch(err => console.log(err));   
    }
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h2>The Current Request is: ${this.state.request}</h2>
            </Jumbotron>
            {this.state.request ? (
              
               <form>
                 <Input
                   value={this.state.name}
                   onChange={this.handleInputChange}
                   name="name"
                   placeholder="Name (required)"
                 />
                 <Input
                   value={this.state.url}
                   onChange={this.handleInputChange}
                   name="url"
                   placeholder="url"
                 />
                 <TextArea
                   value={this.state.body}
                   onChange={this.handleInputChange}
                   name="body"
                   placeholder="Description (Optional)"
                 />
                 <FormBtn
                   disabled={!(this.state.name && this.state.body)}
                   onClick={this.handleFormSubmit}
                 >
                   Submit Book
                 </FormBtn>
               </form>
            ) : (
              <h3>No Requests to Display</h3>
            )}
           
          </Col>        
        </Row>
      </Container>
    );
  }
}

export default SelectedRequest;
