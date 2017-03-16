import React,{Component} from "react";
import {render} from "react-dom";

import Container from "components/layout/container.jsx";
import AddPost from "components/addPost.jsx";
import Post from "components/post.jsx";
import Store from "components/server/localStorage";

class Timeline extends Component {
    constructor() {
        super();
        this.state = {
            posts: Store.posts
        };
        this.addPostHandler = this.addPostHandler.bind(this);
        this.postEditHandler = this.postEditHandler.bind(this);
        this.postDeleteHandler = this.postDeleteHandler.bind(this);
    }
    addPostHandler(post){
        Store.addPost({title:"Title 1",desc:post.text},function(){
            this.setState({posts:Store.posts});
        });
    }
    postEditHandler(postId){
        console.log("edit post id=",postId);
    }
    postDeleteHandler(postId){
        console.log("delete post id=",postId);
    }
    render() {
        let posts = Store.posts;
        let postsView = posts.map((item,index)=>{
            let postObj = JSON.parse(item);
            let post = postObj[Object.keys(postObj)[0]];
            post.key = index;
            post.onEditHandler = this.postEditHandler;
            post.onDeleteHandler = this.postDeleteHandler;
            return <Post {...post} />
        })
        return(
            <div>
                <AddPost onPostAdd={this.addPostHandler} />
                {postsView}
            </div>
        );
    }
}

export default Timeline;
