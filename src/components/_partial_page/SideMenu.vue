<template>
    <div class="static-sidebar">
        <div class="sidebar">
          <div class="widget stay-on-collapse" id="widget-welcomebox">
            <div class="widget-body welcome-box tabular">
              <div class="tabular-row">
                <div class="tabular-cell welcome-avatar">
                  <a href="#"
                    ><img
                      src="http://placehold.it/300&amp;text=Placeholder"
                      class="avatar"
                  /></a>
                </div>
                <div class="tabular-cell welcome-options">
                  <span class="welcome-text">Welcome,</span>
                  <a href="#" class="name">Adekumbi Michael</a>
                </div>
              </div>
            </div>
          </div>
          <div class="widget stay-on-collapse" id="widget-sidebar">
            <nav role="navigation" class="widget-body">
              <ul class="acc-menu">
                <li class="nav-separator">Explore</li>
                <li>
                  <router-link to="/"
                    ><i class="fa fa-dashboard"></i
                    ><span>Dashboard</span></router-link
                  >
                </li>
                <li>
                  <a href="javascript:;"
                    ><i class="fa fa-users"></i><span>Manage Users</span></a
                  >
                  <ul class="acc-menu">
                    <li>
                      <router-link to="/employee/create">Add User</router-link>
                    </li>
                    <li><router-link to="/employee">View User</router-link></li>
                    <!-- <li>
                      <router-link to="/users/activate"
                        >Activate User Account</router-link
                      >
                    </li> -->
                  </ul>
                </li>
                <li>
                  <a href="javascript:;"
                    ><i class="fa fa-cogs "></i><span>Manage Customer</span></a
                  >
                  <ul class="acc-menu">
                    <li>
                      <router-link to="/">Add Customer</router-link>
                    </li>

                    <li>
                      <router-link to="/">View Customers</router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:;"
                    ><i class="fa fa-bank "></i><span>Manage Warehouse</span></a
                  >
                  <ul class="acc-menu">
                    <li>
                      <router-link to="/">Register Warehouse</router-link>
                    </li>

                    <li>
                      <router-link to="/">View Warehouse</router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:;"
                    ><i class="fa fa-briefcase"></i><span>Manage Product</span></a
                  >
                  <ul class="acc-menu">
                    <li>
                      <router-link to="/">Create Category</router-link>
                    </li>
                    <li>
                      <router-link to="/">View Category</router-link>
                    </li>
                    <li>
                      <router-link to="/">Add Product</router-link>
                    </li>
                    <li><router-link to="/">View Product</router-link></li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:;"
                    ><i class="fa fa-shopping-cart"></i><span>Manage Order</span></a
                  >
                  <ul class="acc-menu">
                    <li>
                      <router-link to="/">Request Item</router-link>
                    </li>
                    <li>
                      <router-link to="/">Checkout Item</router-link>
                    </li>
                    <li>
                      <router-link to="/">View All Purchase</router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
  </div>
</template>

<!-- <style scoped>
.static-sidebar-wrapper,
.static-sidebar {
  height: 600px;
}
</style> -->