<style lang="css" scoped>



</style>

<template lang="html">

<div>
    <appHeader/>
    <div class="container">
        <div class="row pl-3 spancingContent">
            <div class="col-12 col-md-3">
                <h2 class="font-weight-normal">當期展覽</h2>
                <div class="btn-group-vertical mt-3">
                    <ul class="list-unstyled">
                        <li v-for="title in menu" id="btnWhiteSpaceNormal">
                            <a href="#" :class='leftMenuLink' @click='showArticle(title)'>{{title}}</a>
                            <!-- <router-link :to="{ name: 'contentInfo' }" :class="leftMenuLink">2018高雄獎</router-link> -->
                        </li>
                    </ul>
                </div>
            </div>
            <router-view/>
        </div>
    </div>
    <appFooter/>
</div>

</template>

<script>
import appHeader from '@/components/layout/header.vue'
import appFooter from '@/components/layout/footer.vue'

import axios from "axios";

export default {
  data() {
    return {
      leftMenuLink: {
        btn: true,
        'btn-outline-primary': true,
        'font-weight-light': true,
        'rounded-0': true,
        'px-1': true,
        'py-2': true,
        'border-0': true,
        'text-left': true,
        // btnWhiteSpaceNormal: true
      },
      menu: [],
    }
  },
  mounted() {
      this.getData();
  },
  methods: {
      getData() {
          let self = this;
          axios.get('http://opendata.khcc.gov.tw/public/OD_kmfa_exhibition.ashx')
            .then(function (response){
                console.log('success');
                console.log(response.data);
                self.menuData(response.data);
            })
            .catch(function (error) {
              console.log('error');
            });
      },
      menuData(getData) {
        let self = this;
        self.menu = getData.map(function (value) {
            return value.Title;
        });
      },
      showArticle(getTitle){
        this.$store.dispatch('updateArticle', getTitle).then(()=>{
            this.$router.replace({ name: 'contentInfo' });
        })
      }
  },
  components: {
    appHeader,
    appFooter
  },
}
</script>
