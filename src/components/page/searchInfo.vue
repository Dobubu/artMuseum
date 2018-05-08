<template lang="html">
  <div>
    <appHeader/>
    <div class="d-flex flex-column" style="height:90vh;">
      <!-- <div v-for="val in titleSubject" class="mb-5"> -->
      <div class="w-75 mx-auto mt-0 mb-5 flex1">
        <div class="d-flex align-items-center flex-row">
          <!-- <h3 class="mr-3 textSpac">{{val.title}}</h3> -->
          <h3 class="mr-3 textSpac">當期展覽篩選</h3>
          <button type="button" class="btn btn-outline-primary btn-sm mr-3" @click="infoThisMon">目前可參加</button>
          <button type="button" class="btn btn-outline-primary btn-sm mr-3" @click="infoThisYear">今年開始</button>
          <button type="button" class="btn btn-outline-primary btn-sm mr-3" @click="infoLastYear">去年開始</button>
          <h3 class="ml-auto textSpac">{{yearNum}}</h3>
        </div>
        <div class="infoWrap mt-3">
          <div class="text-center">
            <div class="row border-top p-2 border-bottom">
              <div class="col-2">標題</div>
              <div class="col-3">展覽時間</div>
              <div class="col-2">地點</div>
              <div class="col-5">簡介</div>
            </div>
            <!-- data loading -->
            <div v-show='isLoading'>
                <font-awesome-icon :icon="['fas','circle-notch']" class="my-3 text-primary" spin size="3x"/>
            </div>
            <!-- get Success -->
            <div v-show='isSuccess' class="row border-top p-2 infoBar" v-for="info in yearData">
              <div class="col-2">{{info.Title}}</div>
              <div class="col-3">{{info.TopDate}} ~ {{info.EndDate}}</div>
              <div class="col-2">{{info.Place}}</div>
              <div class="col-5 text-truncate textTruncate100">{{info.Content}}</div>
            </div>
            <!-- get Error -->
            <div v-show="isError" class="my-3" style="color:red;">資料抓取錯誤</div>
          </div>
        </div>
      </div>
      <appFooter/>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/layout/header.vue'
import appFooter from '@/components/layout/footer.vue'
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import solid from "@fortawesome/fontawesome-free-solid";
import axios from "axios";

fontawesome.library.add(solid);

export default {
  data() {
    return {
      isLoading: false,
      isSuccess: false,
      isError: false,
      delay: 1000,
      getAjaxData: [],
      titleSubject: [
        {
          title: '當期展覽篩選'
        },{
          title: '最新消息篩選'
        }
      ],
      thisYear: 0,
      lastYear: 0,
      thisMon: 0,
      yearData: [],
      yearNum: ''
    }
  },
  methods: {
    init() {
      // this.getData();
      this.getDate();
    },
    getData() {
      let self = this;
      self.isLoading = true
      axios.get('http://opendata.khcc.gov.tw/public/OD_kmfa_exhibition.ashx')
          .then(function (response){
            console.log('1 getExhibitionData success_searchInfo');
            self.getAjaxData = response.data;
          })
          .catch(function (error) {
            setTimeout(function(){
                self.isError = true;
            },self.delay);
            console.log('error');
          })
          .finally(function(){
            setTimeout(function(){
                self.isLoading = false;
            },self.delay)
          });
    },
    getDate() {
      let self = this;
      let moment = require('moment');
      self.thisYear = moment().startOf('Y').format('YYYY/MM/DD'); // 2018/01/01
      // self.thisYear = moment().format('YYYY');                 // 2018
      self.lastYear = moment().subtract(1,'years').startOf('Y').format('YYYY/MM/DD'); // 2017/01/01
      self.thisMon = moment().startOf('M').format('YYYY/MM/DD');  // 2018/05/01
    },
    dataReset() {
      let self = this;
      self.isLoading = true;
      self.isSuccess = false;
      self.yearNum = '';
    },
    infoThisYear() {
      let self = this;
      self.dataReset();
      axios.get('http://opendata.khcc.gov.tw/public/OD_kmfa_exhibition.ashx')
          .then(function (response){
            console.log('1 getExhibitionData success_searchInfo');
            self.getAjaxData = response.data;
          })
          .then(function(){
            setTimeout(function(){
                self.isSuccess = true;
                self.yearData = self.getAjaxData.filter(function(item, index, array) {
                  return item.TopDate > self.thisYear
                })
                self.yearNum = `今年開始共${self.yearData.length}筆`;
            },self.delay);
            self.isLoading = true;
          })
          .catch(function (error) {
            setTimeout(function(){
                self.isError = true;
            },self.delay);
            self.isSuccess = false;
            console.log('error');
          })
          .finally(function(){
            setTimeout(function(){
                self.isLoading = false;
            },self.delay)
          });
    },
    infoLastYear() {
      let self = this;
      self.dataReset();
      axios.get('http://opendata.khcc.gov.tw/public/OD_kmfa_exhibition.ashx')
          .then(function (response){
            console.log('1 getExhibitionData success_searchInfo');
            self.getAjaxData = response.data;
          })
          .then(function(){
            setTimeout(function(){
                self.isSuccess = true;
                self.yearData = self.getAjaxData.filter(function(item, index, array){
                  return self.thisYear > item.TopDate
                })
                self.yearNum = `去年開始共${self.yearData.length}筆`;
            },self.delay);
            self.isLoading = true;
          })
          .catch(function (error) {
            setTimeout(function(){
                self.isError = true;
            },self.delay);
            self.isSuccess = false;
            console.log('error');
          })
          .finally(function(){
            setTimeout(function(){
                self.isLoading = false;
            },self.delay)
          });
    },
    infoThisMon() {
      let self = this;
      let moment = require('moment');
      self.dataReset();
      axios.get('http://opendata.khcc.gov.tw/public/OD_kmfa_exhibition.ashx')
          .then(function (response){
            console.log('1 getExhibitionData success_searchInfo');
            self.getAjaxData = response.data;
          })
          .then(function(){
            setTimeout(function(){
                self.isSuccess = true;
                self.yearData = self.getAjaxData.filter(function(item, index, array){
                  return item.EndDate >= self.thisMon;
                })
                self.yearNum = `目前可參加共${self.yearData.length}筆`;
            },self.delay);
            self.isLoading = true;
          })
          .catch(function (error) {
            setTimeout(function(){
                self.isError = true;
            },self.delay);
            self.isSuccess = false;
            console.log('error');
          })
          .finally(function(){
            setTimeout(function(){
                self.isLoading = false;
            },self.delay)
          });
    }
  },
  created() {
    this.init();
  },
  components: {
    appHeader,
    appFooter,
    FontAwesomeIcon,
  },
};

</script>

<style lang="scss" scoped>

.wrap {
    margin: 0 auto;
    width: 960px;
    padding: 20px;
}

.flex1 {
  flex-grow: 1;
}

.textSpac {
  letter-spacing: 2px;
}
.infoBar {
  transition: all .5s;
  &:hover {
    background: lighten(#007bff, 30%);
  }
  &:last-child {
    border-bottom: 1px solid #dee2e6;
  }
}

</style>