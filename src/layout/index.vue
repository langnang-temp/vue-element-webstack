<template>
  <el-container class="page-container">
    <LayoutAside />
    <el-container class="main-content" style="padding:30px 10px;">
      <el-header class="navbar user-info-navbar" role="navigation" style="height: unset;position: fixed;z-index: 99999;     width: calc(100vw - 300px);margin-left: 0;">
        <ul class="user-info-menu left-links list-inline list-unstyled">
          <li class="hidden-sm hidden-xs">
            <a href="#" data-toggle="sidebar">
              <i class="fa-bars"></i>
            </a>
          </li>
          <li class="dropdown hover-line language-switcher">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img :src="lang.flag" />
              {{ lang.name }}
            </a>
            <ul class="dropdown-menu languages">
              <li :class="{ active: langItem.key === lang.key }" v-for="langItem in langList" :key="langItem.key">
                <a href="#" @click="lang = langItem">
                  <img :src="langItem.flag" />
                  {{ langItem.name }}
                </a>
              </li>
            </ul>
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
            <a href="https://github.com/Anjaxs/WebStack-vue" target="_blank">
              <i class="fa-github"></i> GitHub
            </a>
          </li>
        </ul>
      </el-header>
      <el-main style="padding: 0 0 70px 0; ">
        <router-view></router-view>
      </el-main>
      <LayoutFooter />
    </el-container>
  </el-container>
</template>

<script>
import WebItem from "../components/WebItem.vue";
import LayoutFooter from "./footer.vue";
import LayoutAside from "./aside.vue";
import itemsData from "../assets/designer.json";
export default {
  name: "Layout",
  components: { LayoutAside, LayoutFooter },
  data() {
    return {
      items: itemsData,
      lang: {},
      langList: [
        {
          key: "zh",
          name: "简体中文",
          flag: "./assets/images/flags/flag-cn.png",
        },
        {
          key: "en",
          name: "English",
          flag: "./assets/images/flags/flag-us.png",
        },
      ],
    };
  },
  created() {
    this.lang = this.langList[0];
    this.$store.dispatch('app/getBranchList')
    // loadJs();
  },
  mounted() {
    console.log(this);
  },
  methods: {
    transName(webItem) {
      return this.lang.key === "en" ? webItem.en_name : webItem.name;
    },
  },
};
</script>
