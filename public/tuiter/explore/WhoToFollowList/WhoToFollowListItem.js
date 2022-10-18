const WhoToFollowListItem = (who) => {
  return (`
   <div class="container">
  <div class="row">
    <div class="col-1 px-0">
      <img src=${who.avatarIcon} class="rounded-circle img-fluid" alt=${who.handle}>
    </div>
    <div class="col-4 lp-0 d-flex align-items-center">
      <p class="fg-color-white"><b>${who.handle}</b><br>
      @${who.userName}</p>
    </div>
    <div class="col-1 px-6 d-flex align-items-center">
      <div class="rounded-pill bg-primary d-flex justify-content-around align-items-center" style="width: 80px; height: 40px;">
        <div class="fg-color-white">Follow</div>
      </div>
    </div>
  </div>
</div>
 `);
}

export default WhoToFollowListItem;