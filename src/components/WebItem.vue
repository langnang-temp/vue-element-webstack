<template>
  <div :id="prefix + transName(item)" style="margin-bottom: -70px; padding-top: 90px">
    <el-card :body-style="{ 'padding': '0 10px 10px 10px' }">
      <template slot="header" style="padding:10px">
        <h4 class="text-gray">
          <i class="linecons-tag"></i>
          {{ transName(item) }}
        </h4>
      </template>

      <el-row :gutter="20">
        <el-col :span="6" v-for="(web, idx) in item.web" :key="idx">
          <el-tooltip effect="dark" :content="web.url" placement="bottom">
            <el-card shadow="hover" @click.native="openweb(web.url)" style="margin: 10px 0 0 0; height: 86px; cursor: pointer">
              <div class="xe-comment-entry">
                <div class="xe-user-img">
                  <img :src="web.logo" style="width: 40px; height: 40px" class="lozad img-circle" width="40" />
                </div>
                <div class="xe-comment" style="margin-left: 40px;">
                  <a href="#" class="xe-user-name overflowClip_1">
                    <strong>{{ web.title }}</strong>
                  </a>
                  <p class="overflowClip_2">{{ web.desc }}</p>
                </div>
              </div>
            </el-card>
          </el-tooltip></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "WebItem",
  props: {
    item: Object,
    transName: Function,
    prefix: String,
  },
  methods: {
    openweb(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep {
  .el-card__header {
    padding: 8px 10px
  }
}

i {
  margin-right: 7px;
}
</style>
