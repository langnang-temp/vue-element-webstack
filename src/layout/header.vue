<template>
  <el-header class="navbar user-info-navbar" role="navigation" style="height: unset;position: fixed;z-index: 99999;     width: calc(100vw - 300px);margin-left: 0;padding-top: 30px;padding-right:30px;">
    <ul class="user-info-menu left-links list-inline list-unstyled">
      <li class="hidden-sm hidden-xs">
        <a href="#" data-toggle="sidebar">
          <i class="fa-bars"></i>
        </a>
      </li>
      <li class="hidden-sm hidden-xs">
        <router-link to="/home">Home</router-link>
      </li>
      <li class="hidden-sm hidden-xs" v-for="(item, idx) in $store.state.app.branches" :key="idx">
        <router-link :to="'/public/' + item.slug.slice(7)">{{ item.name }}</router-link>
      </li>
    </ul>
    <ul class="user-info-menu right-links list-inline list-unstyled">
      <li class="hidden-sm hidden-xs">
        <a href="#" target="_blank">站点收录</a>
      </li>
      <li class="hidden-sm hidden-xs">
        <a href="#" target="_blank">登录</a>
      </li>
      <li class="hidden-sm hidden-xs">
        <a href="https://github.com/Anjaxs/WebStack-vue" target="_blank">
          <i class="fa-github"></i> GitHub
        </a>
      </li>
    </ul>
  </el-header>
</template>