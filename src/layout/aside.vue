<template>
  <el-aside class="sidebar-menu toggle-others fixed">
    <div class="sidebar-menu-inner">
      <header class="logo-env">
        <!-- logo -->
        <div class="logo">
          <a href="#" class="logo-expanded">
            <img src="../assets/images/logo@2x.png" width="100%" alt />
          </a>
          <a href="#" class="logo-collapsed">
            <img src="../assets/images/logo-collapsed@2x.png" width="40" alt />
          </a>
        </div>
        <div class="mobile-menu-toggle visible-xs">
          <a href="#" data-toggle="user-info-menu">
            <i class="linecons-cog"></i>
          </a>
          <a href="#" data-toggle="mobile-menu">
            <i class="fa-bars"></i>
          </a>
        </div>
      </header>
      <!-- 侧边栏 -->
      <el-menu background-color="#2c2e2f" text-color="#979898" active-text-color="#ffd04b" unique-opened style="border: unset">
        <component v-for="(menu, idx) in $store.state.app.tree" :key="idx" :index="menu.name" :is="menu.children ? 'el-submenu' : 'el-menu-item'">
          <template slot="title">
            <a :href="'#' + $store.state.app.prefix + menu.name" class="smooth">
              <i :class="menu.icon"></i>
              <span class="title">{{ menu.name }}</span>
            </a>
          </template>
          <el-menu-item v-for="(submenu, idx) in menu.children" :key="idx" :index="submenu.name">
            <a :href="'#' + $store.state.app.prefix + submenu.name" class="smooth">
              <i :class="submenu.icon"></i>
              <span class="title">{{ submenu.name }}</span>
              <span v-show="submenu.is_hot" class="label label-pink pull-right hidden-collapsed">Hot</span>
            </a>
          </el-menu-item>
        </component>
        <el-menu-item>
          <router-link to="/about" class="smooth" index="about">
            <i class="linecons-heart"></i>
            <span class="tooltip-blue">关于本站</span>
            <span class="label label-primary pull-right hidden-collapsed">♥︎</span>
          </router-link>
        </el-menu-item>
      </el-menu>
    </div>
  </el-aside>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "LayoutAside",
  data() {
    return {};
  },
  computed: {
    ...mapState(["tree", "prefix"]),
  },
  created() { },
  methods: {
    transName(webItem) {
      return this.lang.key === "en" ? webItem.en_name : webItem.name;
    },
  },
};
</script>

<style scoped lang="scss">
.el-menu-item a,
.el-submenu__title a {
  color: #979898;
  text-decoration: none;
  display: block;
  border-bottom: 1px solid #313437;

  i {
    display: inline-block;
    margin-right: 10px;
    width: 20px;
  }

  .pull-right {
    margin-top: 21px;
  }
}
</style>
