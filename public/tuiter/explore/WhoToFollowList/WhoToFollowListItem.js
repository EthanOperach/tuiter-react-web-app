const WhoToFollowListItem = (who) => {
  return (`
  <div class="list-group-item">
  <div class="row">
    <div class="col-2 px-0">
      <img src=${who.avatarIcon} class="rounded-circle img-fluid" style="height: 50px; width: 50px;" alt=${who.handle}>
    </div>
    <div class="col-8 px-0 d-flex align-items-center">
      <p class="fg-color-white"><b>${who.userName}</b>
          <i class="fa fa-check-circle"></i>
          <br>
      @${who.handle}</p>
    </div>
    <div class="col-2 px-0 d-flex align-items-center">
      <div class="rounded-pill bg-primary d-flex justify-content-around align-items-center" style="width: 200px; height: 40px;">
        <div class="fg-color-white">Follow</div>
      </div>
    </div>
  </div>
</div>
 `);
}

export default WhoToFollowListItem;