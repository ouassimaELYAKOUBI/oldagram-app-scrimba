const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21492,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 12502,
        liked: false
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 15137,
        liked: false
    }
];

for (let i = 0; i < posts.length; i++) {
    // Create user info section container
    const userInfoSect = document.createElement("div");
    userInfoSect.setAttribute("class", "userInfo-section");
    
    // Create user info container
    const userInfo = document.createElement("div");
    userInfo.setAttribute("class", "userInfo");
    
    // Create user info header container
    const userInfoHeader = document.createElement("div");
    userInfoHeader.setAttribute("class", "userInfo-header");
    
    // Create user avatar image
    const userImg = document.createElement("img");
    userImg.setAttribute("src", posts[i].avatar);
    userImg.setAttribute("class", "user-img");
    
    // Append user image to user info header
    userInfo.appendChild(userImg);
    
    // Create user name and location elements
    const userName = document.createElement("h2");
    userName.textContent = posts[i].name;
    
    const userLocation = document.createElement("p");
    userLocation.textContent = posts[i].location;
    
    // Append name and location to user info header
    userInfoHeader.appendChild(userName);
    userInfoHeader.appendChild(userLocation);
    
    // Append user info header to the main user info container
    userInfo.appendChild(userInfoHeader);

    // Create post image
    const postImg = document.createElement("img");
    postImg.setAttribute("src", posts[i].post);
    postImg.setAttribute("class", "post-img");

    // Create icons section
    const iconDiv = document.createElement("div");
    iconDiv.setAttribute("class", "icon-section");

    const heartIcon = document.createElement("img");
    heartIcon.setAttribute("src", "images/icon-heart.png");
    heartIcon.setAttribute("class", "icon-img");
    heartIcon.setAttribute("data-post-index", i); // Store index in a custom data attribute for later use.

    const commentIcon = document.createElement("img");
    commentIcon.setAttribute("src", "images/icon-comment.png");
    commentIcon.setAttribute("class", "icon-img");

    const dmIcon = document.createElement("img");
    dmIcon.setAttribute("src", "images/icon-dm.png");
    dmIcon.setAttribute("class", "icon-img");

    iconDiv.appendChild(heartIcon);
    iconDiv.appendChild(commentIcon);
    iconDiv.appendChild(dmIcon);

    // Create likes section
    const postLikes = document.createElement("p");
    postLikes.setAttribute("class", "likes-para");
    postLikes.innerHTML = `<span>${posts[i].likes.toLocaleString('en-US')} likes</span>`;

    // Create post comment
    const postComment = document.createElement("p");
    postComment.setAttribute("class", "comment-para");
    postComment.innerHTML = `<span>${posts[i].username}</span> ${posts[i].comment}`;

    // Append user info to the main container
    document.getElementById("container").appendChild(userInfoSect);
    userInfoSect.appendChild(userInfo);

    // Append post image, comment, and likes to user info container
    userInfoSect.appendChild(postImg);
    userInfoSect.appendChild(iconDiv);
    userInfoSect.appendChild(postLikes);
    userInfoSect.appendChild(postComment);

    // Select heart icon and manage like count
    const heartIconElement = heartIcon;
    function toggleLike(){    
        const postIndex = heartIconElement.getAttribute("data-post-index"); // Get the index of the post
        const post = posts[postIndex];

        post.liked = !post.liked
        post.likes += post.liked ? 1 : -1
        postLikes.innerHTML = `<span>${post.likes.toLocaleString('en-US')} likes</span>`;
        heartIcon.setAttribute("src", post.liked ? "images/icon-heart-filled.png" : "images/icon-heart.png");
    }

    heartIconElement.addEventListener("click",toggleLike)
    postImg.addEventListener("dblclick",toggleLike)

}
