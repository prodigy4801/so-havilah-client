<template>
  <div>
    <div class="col-md-3">
      <div class="amazo-tile tile-success">
        <div class="tile-heading">
          <div class="title">Total Purchase</div>
          <div class="secondary">past 30 days</div>
        </div>
        <div class="tile-body">
          <div class="content">#750,800.98</div>
        </div>
        <div class="tile-footer">
          <span class="info-text text-right"
            >0.49% <i class="fa fa-level-up"></i
          ></span>
          <div id="sparkline-revenue" class="sparkline-line"></div>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="amazo-tile tile-info" href="#">
        <div class="tile-heading">
          <div class="title">Order</div>
          <div class="secondary">orders this month</div>
        </div>
        <div class="tile-body">
          <div class="content">3,200</div>
        </div>
        <div class="tile-footer">
          <span class="info-text text-right">18% of 5,600</span>
          <div class="progress">
            <div class="progress-bar" style="width: 12%"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="amazo-tile tile-white">
        <div class="tile-heading">
          <div class="title">Items</div>
          <div class="secondary">past 30 days</div>
        </div>
        <div class="tile-body">
          <span class="content">2,300</span>
        </div>
        <div class="tile-footer text-center">
          <span class="info-text text-right" style="color: #f04743"
            >8.4% <i class="fa fa-level-down"></i
          ></span>
          <div id="sparkline-item" class="sparkline-bar"></div>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="amazo-tile tile-white">
        <div class="tile-heading">
          <span class="title">Commision</span>
          <span class="secondary">past 30 days</span>
        </div>
        <div class="tile-body">
          <span class="content">#19,500</span>
        </div>
        <div class="tile-footer">
          <span class="info-text text-right" style="color: #94c355"
            >4.2% <i class="fa fa-level-up"></i
          ></span>
          <div id="sparkline-commission" class="sparkline"></div>
        </div>
      </div>
    </div>
  </div>
</template>
