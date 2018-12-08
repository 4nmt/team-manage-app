import React from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import axios from "axios";

class RemoveModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  remove = async (userID, projectID) => {
    console.log(userID, projectID);

    try {
      const res = await axios.delete(
        `https://team-manage-api.herokuapp.com/v1/user_project/${userID}/${projectID}`
      );
      alert("remove user succesfully");
    } catch (err) {
      console.log(err);
    }

    this.toggle();
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Remove
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Do you really want to remove this user out of this project?
          </ModalHeader>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() =>
                this.remove(this.props.userID, this.props.projectID)
              }
            >
              Yes
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              No
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default RemoveModal;
