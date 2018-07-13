import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class SelectedRequest extends Component {
  state = {
    request: {},
    responses: [],
    comment: ""
  };
 
  componentDidMount() {
    this.loadRequest()
    this.loadResponses(requestId)
  };
  
  loadRequest = () => {
    API.getRequest()
    .then(res => this.setState({ request: res.data }))
    .catch(err => console.log(err));
  };
  
  loadResponses = () => {
    let requestId = `${this.request._id}`;
    API.getResposes(requestId)
      .then(res =>this.setState({resposes: res.data}))
  };
  saveComment = event => {
    event.preventDefault();
    if (this.state.comment) {
      API.postComment({
      Response: this.state.comment
    })
      .then(res => this.loadBooks())
      .catch(err => console.log(err));   
    }
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
              <List>
                {this.state.resposes.map(responses => (
                  <ListItem key={request_id}>
                      <p>
                        {response.name} 
                      </p>
                      <p>
                        {response.body} 
                      </p>
                      <p>
                        {response.url} 
                      </p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No responses to Display</h3>
            )}
            <form>
              <Input name="name" placeholder="Name (required)" />
              <TextArea name="comment" placeholder="Comment (Optional)" />
              <FormBtn onClick = {(this.saveComment)}>Submit</FormBtn>
            </form>
          </Col>        
        </Row>
      </Container>
    );
  }
}

export default SelectedRequest;
