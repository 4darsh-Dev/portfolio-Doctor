console.log("I am working!");


const author = "Adarsh Maurya!";

console.log(`Developer ${author}`);

fetch("https://ayurupchar.onionreads.com/wp-json/wp/v2/posts")
  .then(response => response.json())
  .then(posts => {
    // Process and display posts data
    const postsContainer = document.getElementById("wp-posts");

    // Limit the number of posts to display (up to a maximum of 3)
    const postsToDisplay = Math.min(posts.length, 3);

    for (let i = 0; i < postsToDisplay; i++) {
      const post = posts[i];
      const postPreview = document.createElement("div");
      postPreview.classList.add("post-preview"); // You can add a class for styling

      // Create and populate HTML elements with post data
      const postImage = document.createElement("img");

      // Adding fallback image and URL configuration
      if (post.featured_image_src) {
        postImage.src = post.featured_image_src;
      } else {
        postImage.src = "/img/sample-blog.webp";
      }
      // console.log(post.featured_image_src);
      // postImage.src = post.featured_image_src;

      const postHeading = document.createElement("h2");
      postHeading.innerHTML = post.title.rendered;
      postHeading.classList.add("post-heading");

      const MAX_DESCRIPTION_WORDS = 80;

      // Create and populate HTML elements with post data
      const postDescription = document.createElement("p");

      // Split the excerpt into words
      const excerptWords = post.excerpt.rendered.split(" ");

      // Check if the excerpt has more words than the limit
      if (excerptWords.length > MAX_DESCRIPTION_WORDS) {
        // Join the first MAX_DESCRIPTION_WORDS words and add an ellipsis
        const limitedExcerpt = excerptWords.slice(0, MAX_DESCRIPTION_WORDS).join(" ");
        postDescription.innerHTML = `${limitedExcerpt}...`;
      } else {
        // If the excerpt is within the limit, use it as is
        postDescription.innerHTML = post.excerpt.rendered;
      }

      // ...

      const readMorePost = document.createElement("a");
      readMorePost.innerHTML = "Read more <i class='bx bxs-chevrons-right'></i>";

      readMorePost.classList.add("read-more-link");

      // Set the link to the full post on the WordPress website
      readMorePost.setAttribute("href", post.link);
      readMorePost.setAttribute("target", "_blank");

      // Append image, heading, and description elements to the post preview block
      postPreview.appendChild(postImage);
      postPreview.appendChild(postHeading);
      postPreview.appendChild(postDescription);
      postPreview.appendChild(readMorePost);

      // Append the post preview block to the main posts container
      postsContainer.appendChild(postPreview);
    }

  })
  .catch(error => {
    console.error("Error fetching posts:", error);
  });





  let menuBtnCond = true;
  let checkLabel = document.getElementById("check-label");
  
  const menuBtnChanger = function(){
  
      if (menuBtnCond){
          checkLabel.innerHTML = `<i class='bx bx-x'></i>`;
          menuBtnCond = false;
      }
  
      else{
          checkLabel.innerHTML = `<i class='bx bx-menu'></i>`;
  
          menuBtnCond = true;
      }
  
  }
  
  let menuBtn = document.getElementById("check");
  menuBtn.addEventListener("click", menuBtnChanger);