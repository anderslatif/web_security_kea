import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { actionCreatePosts } from '../actions/postActions';

let fileReader;

class ComponentCreatePosts extends Component {
  constructor(props) {
      super(props);
      this.state = {
          title: "",
          author: "",
          description: "",
          cover: "",
          file: ""
      }
      this.getFilepost = this.getFilepost.bind(this);
      this.setTextValue = this.setTextValue.bind(this);
      this.makePostReques = this.makePostReques.bind(this);
  }
    getFilepost = (ev) => {
        const file = ev.target.files[0];
        const inputName = ev.target.name;
        const dataFile = new FormData();
        dataFile.append("file", file)
        this.setState({[inputName]: dataFile})

        // if(file) {
        //     const filereader = new FileReader();
        //     filereader.onload = (e) => {
        //         this.setState({[inputName]: e.target.result})
        //     }
        //     filereader.readAsText(file);
        // }
        axios.post("http://localhost:9090/book", {file})
        .then(responese => console.log("resonse file", responese))
        .catch(err => console.log("error file", err))
        console.log("file before post: ", {file});
    }
    setTextValue = (ev) => {
        let inputName = ev.target.name;
        let inputValue = ev.target.value;
        this.setState({[inputName]: inputValue})
    }
    makePostReques = (ev) => {
        this.props.onCreatePosts(this.state);
    //     let { title, description, author, cover, file } = this.state;
    //     axios.post("http://localhost:8080/post", {
    //         title,
    //         description, 
    //         author,
    //         cover,
    //         file
    //     }).then(res => console.log("post success: ", res))
    //       .catch(error => console.log("post error: ", error));
    }
  render() {
    return (
      <div className="componentCreatePosts">
        <div className="componentCreatePosts__innernavigation">
            <button className="makeAPost" onClick={this.makePostReques}>
                <svg>
                    <use href="./image/sprite.svg#icon-edit" />
                </svg>
                <span>Create Post</span>
            </button>
            <button className="addAnImage" onClick={(e) => this.bookCoverFile.click() }>
                <svg onClick={this.testCoverUpload}>
                    <use href="./image/sprite.svg#icon-image" />
                </svg>
                <span>Add Cover</span>
                <input 
                    onChange={this.getFilepost}
                    // onChange={this.testGetCover} 
                    ref={(ref) => this.bookCoverFile = ref} 
                    type="file" id="bookCoverFile" 
                    style={{display: "none"}}
                    name="cover"
                    // value={this.state.file}
                />
            </button>
            <button className="addAFile" onClick={(e) => this.bookPdfFile.click()}>
                <svg>
                    <use href="./image/sprite.svg#icon-file-text" />
                </svg>
                <span>Add Book file</span>
                <input
                    onChange={this.getFilepost} 
                    ref={(ref) => this.bookPdfFile = ref}
                    type="file" 
                    name="file" 
                    id="bookPdfFile" 
                    style={{display: "none"}} 
                />
            </button>
        </div>
        <div className="componentCreatePosts__innercontent">
            <div className="componentCreatePosts__innercontent--wrapper">
                <div className="imgUsers">
                    <img src="./image/profile__image.jpg" alt="profile__image" />
                </div>
                <div className="bookDatas">
                    <label>Add Title</label>
                    <input type="text" name="title" onChange={this.setTextValue} />
                    <label>Add Author</label>
                    <input type="text" name="author" onChange={this.setTextValue} />
                    <label>Add Description</label>
                    <textarea value={this.state.description} name="description" onChange={this.setTextValue}>Write a short description of your posts</textarea>
                </div>
            </div>
        </div>
        {/* <div className="componentCreatePosts__innercontent"></div> */}
        {/* ComponentCreatePosts */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreatePosts: post => {
            dispatch(actionCreatePosts(post))
        }
    }
}

export default connect(null, mapDispatchToProps)(ComponentCreatePosts);
