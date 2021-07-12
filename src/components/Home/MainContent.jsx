import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Swal from 'sweetalert2'
import { getTweet, createTweet } from "../../store/Home/action";
import "../../styles/MainContent.scss";
import Button from "../Button";
import { banner } from "../../utils/image/index";
import ModalDelete from "../ModalDelete";
import ModalEdit from "../ModalEdit";

function MainContent() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.HomeReducer);
  const [tweet, setTweet] = useState("");
  const [err, setErr] = useState("");
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [dataTweet, setDataTweet] = useState({id:null, text:""});

  const postTweet = (event) => {
    event.preventDefault();
    createTweet(dispatch, { tweet_text: tweet }, setErr);
  };
  useEffect(() => {
    getTweet(dispatch);
  }, [dispatch]);

  return (
    <div className="mainContent-container">
      <ModalDelete
        data={dataTweet}
        show={showModalDelete}
        onButtonClick={(val) => {
          val ? setShowModalDelete(true) : setShowModalDelete(false);
        }}
      />
      <ModalEdit
        data={dataTweet}
        show={showModalEdit}
        onButtonClick={(val) => {
          val ? setShowModalEdit(true) : setShowModalEdit(false);
        }}
      />
      <div className="header">
        <h1>Home</h1>
      </div>
      <div className="wrapper">
        <div className="form-tweet">
          <img src={banner} alt="profile" className="profile-img" />
          <div className="input-group">
            <input
              type="text"
              placeholder="What's happening?"
              className="input-tweet"
              onChange={(event) => {
                setTweet(event.target.value);
              }}
            />
            <div className="bottom-input">
              <div className="icons">
                <i class="bi bi-image"></i>
                <i class="bi bi-emoji-smile"></i>
                <i class="bi bi-bar-chart-line"></i>
                <i class="bi bi-calendar-week"></i>
              </div>
              <div className="btn-wrapper">
                <Button textBtn="Tweet" action={postTweet} />
              </div>
            </div>
          </div>
        </div>

        <div className="card_group">
          {data && data.tweetData.length ? (
            data.tweetData.map((el, index) => {
              return (
                <div className="card" key={index}>
                  <img src={banner} alt="profile" className="profile-img" />
                  <div className="section-card">
                    <div className="header-section">
                      <h4>wiildan</h4>
                      <h5>@willdan</h5>
                      <h6>2hr</h6>
                      <DropdownButton title={<i class="bi bi-three-dots"></i>}>
                        <Dropdown.Item
                          onClick={(e) => {
                            e.preventDefault();
                            setDataTweet({...dataTweet, id:el.id, text:el.tweet_text});
                            setShowModalEdit(true);
                          }}
                        >
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={(e) => {
                            e.preventDefault();
                            setDataTweet({...dataTweet, id:el.id});
                            setShowModalDelete(true);
                          }}
                          className="text-delete"
                        >
                          Delete
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                    <div className="content-section">
                      <p>{el.tweet_text}</p>
                    </div>
                    <div className="icons-section">
                      <i class="bi bi-chat"></i>
                      <i class="bi bi-arrow-down-up"></i>
                      <i class="bi bi-heart"></i>
                      <i class="bi bi-box-arrow-up"></i>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Loading....</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
