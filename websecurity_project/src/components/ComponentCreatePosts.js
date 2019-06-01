import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { actionCreatePosts, actionCreatePostsFiles } from '../actions/postActions';

// let fileReader;

class ComponentCreatePosts extends Component {
  constructor(props) {
      super(props);
      this.state = {
          title: '',
          author: '',
          description: '',
          cover: '',
          file: ''
      };
      this.getFilepost = this.getFilepost.bind(this);
      this.setTextValue = this.setTextValue.bind(this);
      this.makePostReques = this.makePostReques.bind(this);
  }

//   test start
  getBookFiles = (ev) => {
      const fileName = ev.target.name;
      const fileValue = ev.target.files[0];

      this.setState({[fileName]: fileValue});
      console.log(fileName, fileValue);
  }

  postBookFiles = () => {
      let {
          title,
          author,
          description
      } = this.state;
      const cover = new FormData();
      cover.append('cover', this.state.cover);

      const file = new FormData(); 
      file.append('file', this.state.file);

      axios.post("http://localhost:9090/file", {
                title: title,
                author: author,
                description: description,
                file: file
            })
            .then(response => console.log("testupload__response", response))
            .catch(error => console.log("testerror", error))
      console.log(file, cover);
  }
//   test finish

    getFilepost = (ev) => {
        const file = ev.target.files[0];
        const inputName = ev.target.name;

        const dataFile = new FormData();
        dataFile.append('file', file, file.name);
        // http://pedros.tech:9090/file
        axios.post('http://localhost:9090/file', dataFile)
        .then(response => {
            this.setState({
                [inputName]: file,
                [`${inputName}path`]: response.path
            });
        })
        .catch(err => console.log('error file', err));


        // console.log("file before post: ", {dataFile});
    };

    setTextValue = (ev) => {
        const inputName = ev.target.name;
        const inputValue = ev.target.value;
        this.setState({ [inputName]: inputValue });
    };

    makePostReques = (ev) => {
        const data = new FormData()
        data.append('file', this.state.file)
        this.props.onCreatePosts({...this.state, file: data});
        this.props.actionCreatePostsFiles(this.state.cover)
    };

  render() {
    return (
      <div className="componentCreatePosts">
        <div className="componentCreatePosts__innernavigation">
            <button className="makeAPost" onClick={this.postBookFiles}>
                <svg>
                    <use href="./image/sprite.svg#icon-edit" />
                </svg>
                <span>Create Post</span>
            </button>
            <button className="addAnImage" onClick={(e) => this.bookCoverFile.click()}>
                <svg onClick={this.testCoverUpload}>
                    <use href="./image/sprite.svg#icon-image" />
                </svg>
                <span>Add Cover</span>
                <input
                    onChange={this.getBookFiles}
                    // onChange={this.getFilepost}
                    // onChange={this.testGetCover}
                    ref={(ref) => this.bookCoverFile = ref}
                    type="file"
                    id="bookCoverFile"
                    style={{ display: 'none' }}
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
                    onChange={this.getBookFiles}
                    // onChange={this.getFilepost}
                    ref={(ref) => this.bookPdfFile = ref}
                    type="file"
                    name="book"
                    // name="file"
                    id="bookPdfFile"
                    style={{ display: 'none' }}
                />
            </button>
        </div>
        <div className="componentCreatePosts__innercontent">
            <div className="componentCreatePosts__innercontent--wrapper">
                <div className="imgUsers">
                    <img src={
                      this.props.profileImage ? this.props.profileImage : "http://www.printpixelz.com/images/product/book-square-front-printpixelz.jpg"
                    } alt="profile__image" />
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
            dispatch(actionCreatePosts(post));
        },
        actionCreatePostsFiles: post => {
            dispatch(actionCreatePostsFiles(post))
        }
    }
};

const mapStateToProps = state => {
    return {
        profileImage: state.profileImage
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentCreatePosts);
