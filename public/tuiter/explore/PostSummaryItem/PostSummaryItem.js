const PostSummaryItem = (post) => {
  return (`
  <div class="list-group-item container">
  <div class="row">
    <div class="fg-color-grey col-4 px-0">${post.topic}</div>
    <div class="row">
      <div class="fg-color-white col-sm-1 px-0"><b>${post.userName}</b><i
          class="fa fa-check-circle px-0"></i></div>
      <div class="fg-color-grey col-4 px-0">- ${post.time}</div>
    </div>
    <div class="row">
      <div class="fg-color-white px-0 col-4">${post.title}</div>
  </div>
  </div>
</div>
 `);
}

export default PostSummaryItem;