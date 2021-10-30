<template>
  <div class="panel panel-default" data-widget="">
    <div class="panel-heading">
      <h2>Calendar</h2>
      <div
        class="panel-ctrls button-icon-bg"
        data-actions-container=""
        data-action-collapse='{"target": ".panel-body"}'
        data-action-edit=""
      >
        <a href="#" class="button-icon custom-icon has-bg"
          ><i class="fa fa-cog"></i
        ></a>
      </div>
    </div>
    <div class="panel-editbox" data-widget-controls=""></div>
    <div class="panel-body">
      <div id="calendar-drag"></div>
    </div>
  </div>
</template>
