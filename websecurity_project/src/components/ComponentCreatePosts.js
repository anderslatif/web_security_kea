import React, { Component } from 'react'
import axios from "axios";

class ComponentCreatePosts extends Component {
  constructor(props) {
      super(props)
      this.state = {
          title: "",
          author: "",
          description: "",
          cover: "",
          file: ""
      }
      this.testCoverUpload = this.testCoverUpload.bind(this);
      this.setPostDatas = this.setPostDatas.bind(this);
      this.uploadFile = this.uploadFile.bind(this);
      this.setTextPost = this.setTextPost.bind(this);
  }
  setPostDatas = (ev) => {
    let datas = ev.target.value;
    let type = ev.target.name;
    let fileDocument = ev.target.files[0];

    this.setState(() => {
        if(type === "file") {
            return {
                file: fileDocument
                // [type]: datas
            }
        }
    })
  }
  setTextPost = (ev) => {
    let dataValue = ev.target.value;
    let dataType = ev.target.name;

    this.setState({[dataType]: dataValue})
  }
  uploadFile = () => {
      axios.post("http://localhost:8080/post", {
          title: this.state.title,
          description: this.state.description,
          author: this.state.author,
          cover: "tests",
          file: this.state.file
      }).then(res => console.log("post successful: ", res))
        .catch(error => console.log("post error: ", error))
  }
  testCoverUpload = (ev) => {
    console.log(this.ref.coverFileUploader);
  }
  componentDidMount() {
    console.log("post");
    // axios()
    // axios.post("https://localhost:8080/post", {
    //     title: "x"
    // }).then(res => console.log("post some: ", res))
    //   .catch(err => console.log("error-post request: ", err))
  }
  render() {
    return (
      <div className="componentCreatePosts">
        <div className="componentCreatePosts__innernavigation">
            <button className="makeAPost" onClick={this.uploadFile}>
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
                <input ref="coverFileUploader" type="file" />
            </button>
            <button className="addAFile">
                <svg>
                    <use href="./image/sprite.svg#icon-file-text"></use>
                </svg>
                {/* <span>Add Book file</span> */}
                <input type="file" name="file" onChange={this.setPostDatas} />
            </button>
        </div>
        <div className="componentCreatePosts__innercontent">
            <div className="componentCreatePosts__innercontent--wrapper">
                <div className="imgUsers">
                    <img src="./image/profile__image.jpg" alt="profile__image" />
                </div>
                <div className="bookDatas">
                    <label>Add Title</label>
                    <input type="text" name="title" onChange={this.setTextPost} />
                    <label>Add Author</label>
                    <input type="text" name="author" onChange={this.setTextPost} />
                    <label>Add Description</label>
                    <textarea value={this.state.description} name="description" onChange={this.setTextPost}>Write a short description of your posts</textarea>
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