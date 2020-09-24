import React, { Component } from 'react';
import classes from './App.css';

import AllNotes from './../Components/AllNotes/AllNotes';
import AddNote from './../Components/AddNote/AddNote';

import axios from 'axios';

class App extends Component {
        state = {
            allPost: [],
            newPost:{
              title: "",
              message: "",
              date: null
            },
            first: true,
            isdisable: true
          };

        componentDidMount(){
          if(this.state.first){
            axios.get('https://my-burger-builder-8fe87.firebaseio.com/leaveanote.json')
            .then(Response=>{
              const posts = [];
                  if(Response.data){Response.data.forEach(ele=>{
                    posts.push(ele);
                  })}
              this.setState({allPost: posts,first: false,isdisable:false});
            })
          }
        }

        componentDidUpdate(){
          //console.log("[Updating ....]")
          const updatedPosts = [...this.state.allPost];
          axios.put('https://my-burger-builder-8fe87.firebaseio.com/leaveanote.json',updatedPosts)
          .catch(err=>{
            alert("Something Fishy happend Please reload!");
          })
        }
        
        shouldComponentUpdate(nextProps,nextState){
          return nextState.allPost!==this.state.allPost;
        }

        onTitleChangeHandler = (e) =>{
          const currNewPost = {
            ...this.state.newPost
          };
          const value = e.target.value;
          currNewPost.title = value;
          this.setState({newPost: currNewPost});
        };

        onMessageChangeHandler = (e) =>{
          const currNewPost = {
            ...this.state.newPost
          };
          const value = e.target.value;
          currNewPost.message = value;
          this.setState({newPost: currNewPost});
        };

        addPostHandler = ()=>{
          const post = {
            ...this.state.newPost
          }
          const currdate = new Date().toLocaleString();
          post.date = currdate;
          if(post.title===""||post.title===" ")post.title="Message";
          if(post.message===""||post.message===" ")post.message="This Message was left empty intentionally";
          const newPosts = [...this.state.allPost];
          newPosts.push(post);
          const resetNewPost = {
            title: "",
            message: "",
            date: null
          }
          this.setState({allPost: newPosts});
          this.setState({newPost: resetNewPost})
        }

        deletePostHandler = (id) =>{
          const allPst = [...this.state.allPost];
          if(id==="XXX"){
            return;
          }
          allPst.splice(id,1);
          this.setState({allPost: allPst});
        }

      render() {
        
        let allPosts = [...this.state.allPost];
        let allPostss;
        if(allPosts.length===0){
          allPostss = (<AllNotes delete={this.deletePostHandler} id={"XXX"} key={"XXX"} title={"No Notes"} message={"No messages to Show"} date={"DD-MM-YYYY 00:00:00"}/>);
        }else{
          allPostss = allPosts.map((ele,i)=>{
            return <AllNotes delete={this.deletePostHandler} id={i} key={i} title={ele.title} message={ele.message} date={ele.date}/>
          });
        }   
        let style = {
          height: allPosts.length<7?"100vh":"min-content"
        }

        return (
          <div className={classes.App} style={style}>
            <h1 className={classes.heading}>Leave A Note</h1>
            <div className={classes.Posts}>
              {allPostss}
            </div>
            <AddNote isdisable={this.state.isdisable} addPost={this.addPostHandler} titleChange={this.onTitleChangeHandler} messageChange={this.onMessageChangeHandler}/>
          </div>
        );
      }
}

export default App;






