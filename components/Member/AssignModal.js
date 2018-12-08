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
  Input,
  CustomInput
} from "reactstrap";

import axios from "axios";

class AssignModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      checkboxes: []
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount = async () => {
    const proCheckboxes = Object.values(this.props.projects).map(obj => {
      return {
        id: obj.id,
        isCheck: false
      };
    });

    this.setState({
      checkboxes: proCheckboxes
    });
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleInputChange(event, id) {
    const isCheck = event.target.checked;
    const checkboxes = this.state.checkboxes.slice();

    const proCheckboxes = checkboxes.map(obj =>
      obj.id === id ? { ...obj, isCheck } : obj
    );

    this.setState({
      checkboxes: proCheckboxes
    });
  }

  assign = () => {
    const checkboxes = this.state.checkboxes.slice();
    let success = true;
    checkboxes
      .filter(obj => obj.isCheck)
      .forEach(async val => {
        try {
          const res = await axios.post(
            `https://team-manage-api.herokuapp.com/v1/user_project`,
            {
              user_id: this.props.userID,
              project_id: val.id
            }
          );
        } catch (err) {
          success = false;
          console.log(err);
        }
      });

    if (success) {
      alert("Assign succesfully");
    } else {
      alert("Assign failed");
    }
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
          Assign
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Assign member to projects
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleCheckbox">Project List</Label>
                <div>
                  {this.props.projects.map(project => {
                    return (
                      <CustomInput
                        key={project.id}
                        type="checkbox"
                        id={`exampleCustomCheckbox${project.id}`}
                        label={project.name}
                        onChange={e => this.handleInputChange(e, project.id)}
                      />
                    );
                  })}
                </div>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.assign()}>
              Assign
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AssignModal;
