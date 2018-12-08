import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import axios from "axios";

class ProjectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.nameRef = React.createRef();
    this.descriptionRef = React.createRef();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  addProject = async (name, description) => {
    try {
      const res = await axios.post(
        `https://team-manage-api.herokuapp.com/v1/project`,
        {
          name,
          description
        }
      );
      alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          <span className="mr-2">
            <i class="fas fa-user-plus" />
          </span>
          <strong>{this.props.buttonLabel}</strong>
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Member</ModalHeader>
          <Form>
            <ModalBody>
              <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="exampleName"
                  innerRef={node => (this.nameRef = node)}
                  placeholder="please enter your name ..."
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>

                <Input
                  type="textarea"
                  innerRef={node => (this.descriptionRef = node)}
                  name="text"
                  id="exampleText"
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={() =>
                  this.addProject(this.nameRef.value, this.descriptionRef.value)
                }
              >
                Add
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default ProjectModal;
