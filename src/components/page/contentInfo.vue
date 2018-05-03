<template lang="html">
  <div  class="col-12 col-md-9">
    <div v-if='isArticleLoading'>
        <font-awesome-icon :icon="['fas','circle-notch']" :class="iconClass" class="mb-3" spin size="4x"/>
    </div>
    <div v-if="true">
    <!-- <div v-if="isArticleInfo"> -->
      <h2 class="font-weight-normal">{{getArticle}}</h2>
      <!-- <h2 class="font-weight-normal">{{$route.params.title}}</h2> -->
      <span class="text-primary"><font-awesome-icon :icon="['fas','clock']" :class="iconClass"/>{{articleTopDate}} ~ {{articleEndDate}}</span>
      <!-- <img :src="articleRelatedFileURL" class="figure-img img-fluid rounded mt-3" style="width: 400px;"> -->
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
  </div>
</template>

<script>
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import solid from "@fortawesome/fontawesome-free-solid";
import axios from "axios";

fontawesome.library.add(solid);

export default {
  data() {
    return {
      getAjaxData: [],
      isArticleLoading: true,
      isArticleInfo: false,
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
      }
    }
  },
  mounted() {
    this.reset();
  },
  methods: {
      reset() {
        this.isArticleLoading = true;
        this.isArticleInfo = false;
        console.log('1 reset -----');
      },
      getData(getTitle) {
        let self = this;
        console.log(getTitle);
        axios.get('http://opendata.khcc.gov.tw/public/OD_kmfa_exhibition.ashx')
            .then(function (response){
              console.log('1 getExhibitionData success_contentInfo');
              console.log('3 axios -----');
              self.getAjaxData = response.data;
              self.showArticle(getTitle);
            })
            .then(function(){
              self.isArticleLoading = false;
              self.isArticleInfo = true;
              console.log('5 then -----');
            })
            .catch(function (error) {
              console.log('error');
            });
      },
      showArticle(getTitle) {
        console.log('4 showArticle -----');
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
  },
  computed: {
    getArticle() {
      this.articleTitle = this.$store.getters.getArticleTitle;
      if(this.articleTitle !== ''){
        this.getData(this.articleTitle);
      }
      console.log('2 getArticle -----');

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
