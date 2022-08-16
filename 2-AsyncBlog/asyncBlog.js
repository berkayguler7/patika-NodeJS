const listPosts = (posts) => {
    return new Promise((resolve, reject) => {
        if(posts.length > 0) {
            console.log("Listing posts...")
            posts.map((post) => {
                console.log(`${post.poster}: ${post.content}`);
            });
            resolve("End of the list");
        }
        else {
            reject("Error: listing posts.")
        }
    })
};

const createPost = (newPostDetails, posts) => {
    return new Promise((resolve, reject) => {
        if(newPostDetails.poster && newPostDetails.content) {
            posts.push(newPostDetails);
            resolve(posts);
        } else reject('---Missing data---')
    })
};

const process = async () => {
    const posts = [
        {poster: "p1", content: "content 1"},
        {poster: "p2", content: "content 2"},
        {poster: "p3", content: "content 3"},
        {poster: "p4", content: "content 4"}
    ];

    let newPostDetails = {poster: "p1", content: "p1's second post"};
    try {
        //these functions can all be chained
        await listPosts(posts).catch(err => console.log(err)); 
        await createPost(newPostDetails, posts).then(data => listPosts(data)).catch(err => console.log(err)); 
    }
    catch {
        console.log('ERROR');
    }
}

process();
