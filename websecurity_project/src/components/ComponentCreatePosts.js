import React, { Component } from 'react'
import axios from "axios";

class ComponentCreatePosts extends Component {
  constructor(props) {
      super(props)
      this.state = {
          title: "",
          author: "",
          cover: ""
      }
      this.testCoverUpload = this.testCoverUpload.bind(this)
  }

  testCoverUpload = (ev) => {
    console.log(this.ref.coverFileUploader);
  }
  componentDidMount() {
    console.log("post");
    axios.post("https://localhost:8080/post", {
        title: "x"
    }).then(res => console.log("post some: ", res))
      .catch(err => console.log("error-post request: ", err))
  }
  render() {
    return (
      <div className="componentCreatePosts">
        <div className="componentCreatePosts__innernavigation">
            <button className="makeAPost">
                <svg>
                    <use href="./image/sprite.svg#icon-edit"></use>
                </svg>
                <span>Create Post</span>
            </button>
            <button className="addAnImage">
                <svg onClick={this.testCoverUpload}>
                    <use href="./image/sprite.svg#icon-image"></use>
                </svg>
                <span>Add Cover</span>
                <input ref="coverFileUploader" style={{display:"none"}} type="file" />
            </button>
            <button className="addAFile">
                <svg>
                    <use href="./image/sprite.svg#icon-file-text"></use>
                </svg>
                <span>Add Book file</span>
                <input style={{display:"none"}} type="file" />
            </button>
        </div>
        <div className="componentCreatePosts__innercontent">
            <div className="componentCreatePosts__innercontent--wrapper">
                <div className="imgUsers">
                    <img src="./image/profile__image.jpg" alt="profile__image" />
                </div>
                <div className="bookDatas">
                    <label>Add Title</label>
                    <input type="text" />
                    <label>Add Author</label>
                    <input type="text" />
                    <label>Add Description</label>
                    <textarea value="" onChange={() => {}}>Write a short description of your posts</textarea>
                </div>
            </div>
        </div>
        {/* <div className="componentCreatePosts__innercontent"></div> */}
        {/* ComponentCreatePosts */}
      </div>
    )
  }
}

export default ComponentCreatePosts;