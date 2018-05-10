<template lang="html">
  <div  class="col-12 col-md-9">
    <!-- data loading -->
    <div v-show='isArticleLoading'>
        <font-awesome-icon :icon="['fas','circle-notch']" :class="iconClass" class="mb-3" spin size="4x"/>
    </div>

    <!-- get Success -->
    <div v-show="isArticleSuccsee">
      <h2 class="font-weight-normal">{{getArticle}}</h2>
      <!-- <h2 class="font-weight-normal">{{$route.params.title}}</h2> -->
      <span class="text-primary"><font-awesome-icon :icon="['fas','clock']" :class="iconClass"/>{{articleTopDate}} ~ {{articleEndDate}}</span>
      <br/>
      <img :src="articleRelatedFileURL" v-on:error="error($event)" class="figure-img img-fluid rounded mt-3" style="width: 400px;">
      <p class="mt-3 lead">
          {{articleContent}}
      </p>
      <div class="my-5">
          <!-- <span class="badge p-2 badge-primary"><i class="fas fa-tag mr-2"></i>{{articleRelatedFileURL}}</span> -->
          <span class="badge p-2 badge-secondary">
            <font-awesome-icon :icon="['fas','link']" class="mr-2"/>
            <a :href="articleOriginalURL" class="text-white" target="_blank">原始資料</a>
          </span>
          <div class="d-flex justify-content-between mt-3">
              <span class="text-primary"><font-awesome-icon :icon="['fas','map-marker']" :class="iconClass"/>{{articlePlace}}</span>
              <span class="text-primary"><font-awesome-icon :icon="['fas','tag']" :class="iconClass"/>遊程編號：{{articleID}}</span></div>
      </div>
    </div>

    <!-- get Error -->
    <div v-show="isArticleError" style="color:red;">資料抓取錯誤</div>
  </div>
</template>

<script>
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import solid from "@fortawesome/fontawesome-free-solid";
import axios from "axios";
import { setTimeout } from 'timers';

fontawesome.library.add(solid);

export default {
  data() {
    return {
      getAjaxData: [],
      isArticleLoading: false,
      isArticleSuccsee: false,
      isArticleError: false,
      articleTitle: '',
      articleTopDate: '',
      articleEndDate: '',
      articleContent: '',
      articleRelatedFileURL: '',
      articleOriginalURL: '',
      articlePlace: '',
      articleID: '',
      iconClass: {
        'text-primary': true,
        'mr-2': true
      },
      delay: 1000
    }
  },
  // created() {
  //   this.reset();
  // },
  methods: {
      reset() {
        this.isArticleLoading = true;
        this.isArticleSuccsee = false;
        this.isArticleError = false;
      },
      getData(getTitle) {
        let self = this;
        console.log(getTitle);
        self.reset();
        axios.get('http://opendata.khcc.gov.tw/public/OD_kmfa_exhibition.ashx')
            .then(function (response){
              console.log('1 getExhibitionData success_contentInfo');
              self.getAjaxData = response.data;
            })
            .then(function(){
              // setTimeout(function(){
              //   self.isArticleSuccsee = true;
              //   self.showArticle(getTitle);
              // },self.delay);
              self.isArticleLoading = false;
              self.isArticleSuccsee = true;
              self.showArticle(getTitle);
            })
            .catch(function (error) {
              setTimeout(function(){
                  self.isArticleError = true;
              },self.delay);
              self.isArticleSuccsee = false;
              console.log('error');
            })
            .finally(function(){
              setTimeout(function(){
                  self.isArticleLoading = false;
              },self.delay)
            });
      },
      showArticle(getTitle) {
        let self = this;
        let dataLength = self.getAjaxData.length;
        for (let i = 0; i < dataLength; i++) {
          if (self.getAjaxData[i].Title === getTitle) {
            self.articleTopDate = self.getAjaxData[i].TopDate;
            self.articleEndDate = self.getAjaxData[i].EndDate;
            self.articleContent = self.getAjaxData[i].Content;
            self.articleRelatedFileURL = self.getAjaxData[i].RelatedFileURL;
            self.articleOriginalURL = self.getAjaxData[i].OriginalURL;
            self.articlePlace = self.getAjaxData[i].Place;
            self.articleID = self.getAjaxData[i].ID;
          }
        }
      },
      error(e) {
          // e.currentTarget.src = "https://goo.gl/4MbW5D"; // 顯示不太清楚
          e.currentTarget.src = "https://goo.gl/ccDYGK";
          console.log('img load error');
      }
  },
  computed: {
    getArticle() {
      this.articleTitle = this.$store.getters.getArticleTitle;
      if(this.articleTitle !== '' && this.articleTitle !== undefined){
        console.log(this.articleTitle);
        this.getData(this.articleTitle);
      }
      // this.getData($route.params);
      return this.$store.getters.getArticleTitle
    },
  },
  components: {
    FontAwesomeIcon,
  },
}
</script>

<style lang="css" scoped>
</style>
