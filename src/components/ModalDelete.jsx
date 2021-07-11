import React, { useState} from "react";
import { Modal, Button } from "react-bootstrap";
import {deleteTweet} from '../store/Home/action'
import {useDispatch} from 'react-redux'
import '../styles/modalDelete.scss'
function ModalDelete({data, show, onButtonClick}) {
  const dispatch = useDispatch();
  function handleClick(e, val) {
    onButtonClick(val);
  }

  function handleDelete(){
      handleClick(false)
      deleteTweet(dispatch, data.id)
  }
  return (
    <>
      <Modal show={show} onHide={()=> handleClick(false)}  aria-labelledby="contained-modal-title-vcenter"  centered>
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">Delete Tweet?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from Twitter search results.</Modal.Body>
        <Modal.Footer>
          <Button className="btn-close" onClick={()=> handleClick(false)}>
            Close
          </Button>
          <Button className="btn-delete" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDelete;
