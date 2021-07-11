import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { editTweet } from "../store/Home/action";
import { useDispatch } from "react-redux";
import "../styles/modalDelete.scss";
function ModalEdit({ data, show, onButtonClick }) {
  const dispatch = useDispatch();
  const [tweet_text, setTweet_text]= useState('')
  function handleClick(e, val) {
    onButtonClick(val);
  }
  function handleEdit(event) {
    event.preventDefault();
    handleClick(false)
    editTweet(dispatch, data.id, {tweet_text});
  }
  return (
    <>
      <Modal
        show={show}
        onHide={() => handleClick(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Tweet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control as="textarea" placeholder={data.text} onChange={(event)=>{
              setTweet_text(event.target.value)
          }} />
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-close" onClick={() => handleClick(false)}>
            Close
          </Button>
          <Button className="btn-delete" onClick={handleEdit}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEdit;
