<template lang="html">
  <div  class="col-12 col-md-9">
    <div v-if='isArticleLoading'>
        <font-awesome-icon :icon="['fas','circle-notch']" class="text-primary mb-3" spin size="4x"/>
    </div>
    <div v-if="isArticleInfo">
      <h2 class="font-weight-normal">{{getArticle}}</h2>
      <span class="text-primary"><i class="fas fa-clock mr-2"></i>{{articleTopDate}} ~ {{articleEndDate}}</span>
      <br>
      <!-- {{articleRelatedFileURL}} -->
      <img :src="articleRelatedFileURL" class="figure-img img-fluid rounded mt-5" style="height: 450px;">
      <p class="mt-3 lead">
          {{articleContent}}
      </p>
      <div class="my-5">
          <!-- <span class="badge p-2 badge-primary"><i class="fas fa-tag mr-2"></i>{{articleRelatedFileURL}}</span> -->
          <span class="badge p-2 badge-secondary"><i class="fas fa-link mr-2"></i><a :href="articleOriginalURL" class="text-white">原始資料</a></span>
          <div class="d-flex justify-content-between mt-3">
              <span><i class="fas fa-map-marker mr-2"></i>{{articlePlace}}</span>
              <span>遊程編號：{{articleID}}</span></div>
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
    }
  },
  methods: {
      getData(getTitle) {
        let self = this;
        axios.get('http://opendata.khcc.gov.tw/public/OD_kmfa_exhibition.ashx')
            .then(function (response){
              console.log('1 getExhibitionData success_contentInfo');
              self.getAjaxData = response.data;
              // self.showArticle(getTitle);
            })
            .then(function(){
              console.log('then 2')
              self.isArticleLoading = false;
              self.isArticleInfo = true;
            })
            .catch(function (error) {
              console.log('error');
            });
      },
      // showArticle(getTitle) {
      //   console.log('showAriticle 3');
      //   let self = this;
      //   let dataLength = self.getAjaxData.length;
      //   for (let i = 0; i < dataLength; i++) {
      //     if (self.getAjaxData[i].Title === getTitle) {
      //       self.articleTopDate = self.getAjaxData[i].TopDate;
      //       self.articleEndDate = self.getAjaxData[i].EndDate;
      //       self.articleContent = self.getAjaxData[i].Content;
      //       self.articleRelatedFileURL = self.getAjaxData[i].RelatedFileURL;
      //       self.articleOriginalURL = self.getAjaxData[i].OriginalURL;
      //       self.articlePlace = self.getAjaxData[i].Place;
      //       self.articleID = self.getAjaxData[i].ID;
      //     }
      //   }
      // },
  },
  computed: {
    getArticle() {
      this.articleTitle = this.$store.getters.getArticleTitle;
      this.getData(this.articleTitle);
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
