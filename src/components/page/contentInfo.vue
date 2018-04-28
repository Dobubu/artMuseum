<template lang="html">
  <div class="col-12 col-md-9">
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
          <span class="badge p-2 badge-secondary"><i class="fas fa-link mr-2"></i><a :href="articleOriginalURL" :target="_blank" class="text-white">原始資料</a></span>
          <div class="d-flex justify-content-between mt-3">
              <span><i class="fas fa-map-marker mr-2"></i>{{articlePlace}}</span>
              <span>遊程編號：{{articleID}}</span></div>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      getAjaxData: [],
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
  mounted() {
      this.getData();
  },
  methods: {
      getData() {
          let self = this;
          axios.get('http://opendata.khcc.gov.tw/public/OD_kmfa_exhibition.ashx')
            .then(function (response){
                console.log('success');
                self.getAjaxData = response.data;
            })
            .catch(function (error) {
              console.log('error');
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
            // self.articleRelatedFileURL = `<img src="${self.getAjaxData[i].RelatedFileURL} class="figure-img img-fluid rounded mt-5"`;
            self.articleOriginalURL = self.getAjaxData[i].OriginalURL;
            self.articlePlace = self.getAjaxData[i].Place;
            self.articleID = self.getAjaxData[i].ID;
          }
        }
      }
  },
  computed: {
    getArticle() {
      this.articleTitle = this.$store.getters.getArticleTitle;
      this.showArticle(this.articleTitle);
      return this.$store.getters.getArticleTitle
    },
  },
}
</script>

<style lang="css" scoped>
</style>
