

const store = function(){
    let items = [
        {title:"Title 1",desc:"Description 1"},
        {title:"Title 2",desc:"Description 2"}
    ];

    // items.forEach(function(item){
    //     addPost(item);
    // })

    function addPost(post,callback){
        let postIdArr = localStorage.getItem("postIds")?JSON.parse(localStorage.getItem("postIds")):[];
        let postArr = localStorage.getItem("posts")?JSON.parse(localStorage.getItem("posts")):[];
        let postId = Date.now();
        let postObj = {};
        postObj[postId] = post;
        postIdArr.unshift(postId);
        localStorage.setItem("postIds",JSON.stringify(postIdArr));
        postArr.unshift(JSON.stringify(postObj));
        localStorage.setItem("posts",JSON.stringify(postArr));
        console.log("post add requested!!");
        callback(postId);
    }
    function getPosts(){
        let postArr = localStorage.getItem("posts")?JSON.parse(localStorage.getItem("posts")):[];
        postArr.map((post)=>{
            return JSON.parse(post)
        });
        return postArr.length?postArr:[];
    }

    return {
        addPost: addPost,
        posts: getPosts()
    };
}
export default store();
