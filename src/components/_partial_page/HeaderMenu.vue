<template>
    <div>
        <span id="trigger-sidebar" class="toolbar-trigger toolbar-icon-bg">
          <a data-toggle="tooltips" data-placement="right" title="Toggle Sidebar"
            ><span class="icon-bg"><i class="fa fa-fw fa-bars"></i></span
          ></a>
        </span>
        <!-- <a class="navbar-brand" href="#">So Havilah</a> -->
        <span id="trigger-infobar" class="toolbar-trigger toolbar-icon-bg">
          <a data-toggle="tooltips" data-placement="left" title="Toggle Infobar"
            ><span class="icon-bg"><i class="fa fa-fw fa-bars"></i></span
          ></a>
        </span>
        <div class="yamm navbar-left navbar-collapse collapse in">
          <ul class="nav navbar-nav">
            <li class="dropdown" id="widget-classicmenu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                >Home<span class="caret"></span
              ></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Home 1</a></li>
                <li><a href="#">Home 2</a></li>
                <li><a href="#">Home 3</a></li>
              </ul>
            </li>
            <li><a href="#" target="_blank">Contact Us</a></li>
            <li><a href="#" target="_blank">Blog</a></li>
          </ul>
        </div>
        <ul class="nav navbar-nav toolbar pull-right">
          <li class="dropdown toolbar-icon-bg">
            <a
              href="#"
              id="navbar-links-toggle"
              data-toggle="collapse"
              data-target="header>.navbar-collapse"
            >
              <span class="icon-bg">
                <i class="fa fa-fw fa-ellipsis-h"></i>
              </span>
            </a>
          </li>

          <li class="dropdown toolbar-icon-bg demo-search-hidden">
            <a href="#" class="dropdown-toggle tooltips" data-toggle="dropdown"
              ><span class="icon-bg"><i class="fa fa-fw fa-search"></i></span
            ></a>

            <div
              class="dropdown-menu dropdown-alternate arrow search dropdown-menu-form"
            >
              <div class="dd-header">
                <span>Search</span>
                <span><a href="#">Advanced search</a></span>
              </div>
              <div class="input-group">
                <input type="text" class="form-control" placeholder="" />

                <span class="input-group-btn">
                  <a class="btn btn-primary" href="#">Search</a>
                </span>
              </div>
            </div>
          </li>

          <li class="dropdown toolbar-icon-bg">
            <a
              href="#"
              class="hasnotifications dropdown-toggle"
              data-toggle="dropdown"
              ><span class="icon-bg"><i class="fa fa-fw fa-bell"></i></span
              ><span class="badge badge-info">2</span></a
            >
            <div class="dropdown-menu dropdown-alternate notifications arrow">
              <div class="dd-header">
                <span>Notifications</span>
                <span><a href="#">Settings</a></span>
              </div>
              <div class="scrollthis scroll-pane">
                <ul class="scroll-content">
                  <li class="">
                    <a href="#" class="notification-info">
                      <div class="notification-icon">
                        <i class="fa fa-user fa-fw"></i>
                      </div>
                      <div class="notification-content">
                        Profile Page has been updated
                      </div>
                      <div class="notification-time">2m</div>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="notification-success">
                      <div class="notification-icon">
                        <i class="fa fa-check fa-fw"></i>
                      </div>
                      <div class="notification-content">
                        Updates pushed successfully
                      </div>
                      <div class="notification-time">12m</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="dd-footer">
                <a href="#">View all notifications</a>
              </div>
            </div>
          </li>
          <li class="dropdown toolbar-icon-bg hidden-xs">
            <a
              href="#"
              class="hasnotifications dropdown-toggle"
              data-toggle="dropdown"
              ><span class="icon-bg"><i class="fa fa-fw fa-envelope"></i></span
            ></a>
            <div class="dropdown-menu dropdown-alternate messages arrow">
              <div class="dd-header">
                <span>Messages</span>
                <span><a href="#">Settings</a></span>
              </div>
              <div class="scrollthis scroll-pane">
                <ul class="scroll-content">
                  <li class="">
                    <a href="#">
                      <img
                        class="msg-avatar"
                        src="assets/demo/avatar/avatar_09.png"
                        alt="avatar"
                      />
                      <div class="msg-content">
                        <span class="name">Steven Shipe</span>
                        <span class="msg">Nonummy nibh epismod lorem ipsum</span>
                      </div>
                      <span class="msg-time">30s</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        class="msg-avatar"
                        src="assets/demo/avatar/avatar_01.png"
                        alt="avatar"
                      />
                      <div class="msg-content">
                        <span class="name"
                          >Roxann Hollingworth
                          <i class="fa fa-paperclip attachment"></i
                        ></span>
                        <span class="msg"
                          >Lorem ipsum dolor sit amet consectetur adipisicing
                          elit</span
                        >
                      </div>
                      <span class="msg-time">5m</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="dd-footer"><a href="#">View all messages</a></div>
            </div>
          </li>
          <li class="dropdown toolbar-icon-bg">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"
              ><span class="icon-bg"><i class="fa fa-fw fa-user"></i></span
            ></a>
            <ul class="dropdown-menu userinfo arrow">
              <li>
                <a href="#"
                  ><span class="pull-left">Profile</span>
                  <span class="badge badge-info">80%</span></a
                >
              </li>
              <li>
                <a href="#"
                  ><span class="pull-left">Account</span>
                  <i class="pull-right fa fa-user"></i
                ></a>
              </li>
              <li>
                <a href="#"
                  ><span class="pull-left">Settings</span>
                  <i class="pull-right fa fa-cog"></i
                ></a>
              </li>
              <li class="divider"></li>
              <li>
                <a href="#"
                  ><span class="pull-left">Earnings</span>
                  <i class="pull-right fa fa-line-chart"></i
                ></a>
              </li>
              <li>
                <a href="#"
                  ><span class="pull-left">Statement</span>
                  <i class="pull-right fa fa-list-alt"></i
                ></a>
              </li>
              <li>
                <a href="#"
                  ><span class="pull-left">Withdrawals</span>
                  <i class="pull-right fa fa-dollar"></i
                ></a>
              </li>
              <li class="divider"></li>
              <li>
                <a href="#"
                  ><span class="pull-left">Sign Out</span>
                  <i class="pull-right fa fa-sign-out"></i
                ></a>
              </li>
            </ul>
          </li>
        </ul>
  </div>
</template>