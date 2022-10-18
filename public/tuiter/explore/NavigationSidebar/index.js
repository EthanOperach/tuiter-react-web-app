const NavigationSidebar = () => {
  return (`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter fa-fw"></i></a>
     <a class="list-group-item" href="/">
       <i class="fa fa-home fa-fw"></i>Home</a>
     <a class="list-group-item" href="/">
       <i class="fa fa-hashtag fa-fw"></i>Explore</a>
     <a class="list-group-item" href="/">
       <i class="fa fa-bell fa-fw"></i>Notifications</a>
     <a class="list-group-item" href="/">
       <i class="fa fa-envelope fa-fw"></i>Messages</a>
     <a class="list-group-item" href="/">
       <i class="fa fa-bookmark fa-fw"></i>Bookmarks</a>
     <a class="list-group-item" href="/">
       <i class="fa fa-list fa-fw"></i>Lists</a>
     <a class="list-group-item" href="/">
       <i class="fa fa-user fa-fw"></i>Profile</a>
     <a class="list-group-item" href="/">
       <i class="fa fa-circle fa-fw"></i>More</a>
      
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;