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
                        <li>
                            <router-link :to="{ name: 'contentInfo' }" :class="leftMenuLink">2018高雄獎</router-link>
                        </li>
                        <li>
                            <a class="btn btn-outline-primary font-weight-light rounded-0 px-1 py-2 border-0 text-left" href="index.html" role="button">空間･詩･人：李光裕創作研究展</a>
                        </li>
                        <li>
                            <a class="btn btn-outline-primary font-weight-light rounded-0 px-1 py-2 border-0 text-left" href="index.html" role="button">蕭瑟 的浪漫 林鴻文</a>
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
      }
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
            })
            .catch(function (error) {
              console.log('error');
            });
      }
  },
  components: {
    appHeader,
    appFooter
  },
}
</script>
