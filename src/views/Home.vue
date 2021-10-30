<template>
  <div class="page-content">
    <BreadCrumb moduleTitle="Home" subModuleTitle="Dashboard" />
    <div class="page-heading mb0">
      <h1>Dashboard</h1>
    </div>
    <div class="container-fluid">
      <div data-widget-group="group1">
        <div class="row">
          <CardBoard />
        </div>
        <div class="row">
          <div class="col-md-6">
            <TodoList />
          </div>
          <div class="col-md-6">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import * as externalData from "../_helpers/externals"
import Calendar from "../components/dashboard/Calendar.vue"
import CardBoard from "../components/dashboard/CardBoard.vue"
import TodoList from "../components/dashboard/TodoList.vue"
import BreadCrumb from "../components/_partial_page/BreadCrumb.vue"
export default {
  name: "Home",
  components: {
    Calendar,
    CardBoard,
    TodoList,
    BreadCrumb,
  },
  // mounted() {
  //   this.$forceUpdate()
  //   externalData.head_link(
  //     "../assets/plugins/form-daterangepicker/daterangepicker-bs3.css"
  //   )
  //   externalData.head_link(
  //     "../assets/plugins/fullcalendar/fullcalendar.css"
  //   )
  //   externalData.head_link(
  //     "../assets/plugins/charts-chartistjs/chartist.min.css"
  //   )
  //   externalData.body_script(
  //     "../assets/plugins/fullcalendar/fullcalendar.min.js"
  //   )
  //   externalData.body_script(
  //     "../assets/plugins/wijets/wijets.js"
  //   )
  //   externalData.body_script(
  //     "../assets/plugins/charts-chartistjs/chartist.min.js"
  //   )
  //   // externalData.body_script(
  //   //   "http://localhost:3030/assets/plugins/charts-chartistjs/chartist-plugin-tooltip.js"
  //   // )
  //   externalData.body_script(
  //     "../assets/plugins/form-daterangepicker/moment.min.js"
  //   )
  //   externalData.body_script(
  //     "../assets/plugins/form-daterangepicker/daterangepicker.js"
  //   )
  //   externalData.body_script("../assets/demo/demo-index.js")
  // },
}
</script>