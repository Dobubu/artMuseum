<template lang="html">
    <div>
        <appHeader/>
        <div class="container-fluid header text-white" style="margin-top: -3rem;">
            <div class="container pt-4">
                <div class="jumbotron rounded-0" style="background: transparent;">
                    <h1 class="display-4 spancingJumbotron">MORBI ELEIFEND SEMPER</h1>
                    <p class="lead">Urna eget tincidunt nam tincidunt viverra semper suspendisse in bibendum diam quisque.</p>
                    <!-- <a class="btn p-2 btn-outline-primary font-weight-light rounded-0" href="#" role="button">Learn more</a> -->
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col text-center py-5">
                    <h3 class="font-weight-bold" style="font-size:40px;">當期展覽</h3>
                </div>
            </div>
            <div class="row">
                <div v-if='isCurrentLoading' class="my-0 mx-auto">
                    <font-awesome-icon :icon="['fas','circle-notch']" class="text-primary mb-3" spin size="4x"/>
                </div>
                <div v-if='isCurrentInfo' class="col-12 col-md-6 mb-4 mb-md-0">
                    <p class="mb-0">{{currentInfoTopDate_1}}</p>
                    <h5 class="mb-4 text-primary">{{currentInfoTitle_1}}</h5>
                    <p class="text-truncate textTruncate150">{{currentInfoContent_1}}</p>
                    <a class="btn p-2 btn-primary font-weight-light rounded-0 text-uppercase"  v-on:click='contentPage(currentInfoTitle_1)' href="#" role="button">read more »</a>
                </div>
                <div v-if='isCurrentInfo' class="col-12 col-md-6 d-flex flex-wrap">
                    <div class="row">
                        <div :class='currentCard' v-for='info in currentInfo'>
                            <p class="mb-0">{{info.TopDate}}</p>
                            <a href="#" class="text-primary font-weight-normal mb-3 text-truncate" style="white-space: normal;" v-on:click='contentPage(info.Title)'>{{info.Title}}</a>
                            <p class="text-truncate textTruncate100">{{info.Content}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid contentBanner2 my-5 text-white">
            <div class="container text-center py-5">
                <h5>MAURIS VOLUTPAT AT ETIAM</h5>
                <p>
                    Tellus pharetra faucibus nisi non commodo orci quisque
                </p>
                <a class="btn p-2 btn-outline-primary font-weight-light rounded-0 text-uppercase" href="#" role="button">Get in Contact »</a>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col text-center py-5">
                    <h3 class="font-weight-bold" style="font-size:40px;">最新消息</h3>
                </div>
            </div>
            <div class="row mb-4 d-flex flex-wrap">
                <div v-if='isLastesLoading' class="my-0 mx-auto">
                    <font-awesome-icon :icon="['fas','circle-notch']" class="text-primary mb-3" spin size="4x"/>
                </div>
                <div v-if='isLastesInfo' :class='latestCard' v-for='info in lastesInfo'>
                    <div class="card h-100">
                        <div class="latestImg">
                        <img class="card-img-top" :src='info.RelatedFileURL' :alt='info.Title'></div>
                        <div class="card-body" style="background: #fff;">
                            <a href="layout.html" class="text-primary font-weight-normal" style="font-size:18px;">{{info.Title}}</a>
                            <p class="card-text text-truncate textTruncate100 mt-1">{{info.Content}}</p>
                            <p class="mb-0 text-right text-primary"><font-awesome-icon :icon="['fas','clock']" class="mr-2" />{{info.TopDate}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid contentBanner3 my-5 text-white">
            <div class="container text-center py-5">
                <h5>MAURIS VOLUTPAT AT ETIAM</h5>
                <p>
                    Tellus pharetra faucibus nisi non commodo orci quisque
                </p>
                <a class="btn p-2 btn-outline-primary font-weight-light rounded-0 text-uppercase" href="#" role="button">Get in Contact »</a>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col text-center py-5">
                    <h4>VITAE MAURIS PORTA</h4>
                    <p>Donec vitae velit facilisis gravida justo sed rhoncus</p>
                </div>
            </div>
            <div class="row px-5 mb-5 d-flex justify-content-around">
                <div class="col-md-4">
                    <div class="card h-100">
                        <div class="card-body" style="background: #fff;">
                            <h3>高雄市立美術館</h3>
                            <font-awesome-icon :icon="['fas','clock']" class="mr-2" />
                            <p class="d-inline mr-2 text-primary tS">週二至週日 / 9:30~17:30</p>
                            <br/>
                            <font-awesome-icon :icon="['fas','phone']" class="mr-2"/>
                            <p class="d-inline mr-2 text-primary tS">(07)5550331</p>
                            <br/>
                            <font-awesome-icon :icon="['fas','map-marker']" class="mr-2"/>
                            <p class="d-inline mr-2 text-primary tS">80460高雄市鼓山區美術館路80號</p>
                            <!-- <p class="card-text mt-3">Posuere ipsum eget tellus placerat quis ultrices sem commodo interdum et malesuada fames ipsum primis faucibus…</p> -->
                            <a class="mt-5 btn p-2 btn-primary font-weight-light rounded-0 text-uppercase" href="http://www.kmfa.gov.tw/home01.aspx?ID=1"  target='_blank'>Get in Contact »</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100">
                        <div class="card-body" style="background: #fff;">
                            <h3>高雄市立歷史博物館</h3>
                            <font-awesome-icon :icon="['fas','clock']" class="mr-2" />
                            <p class="d-inline mr-2 text-primary tS">週二至週日 / 9:30~17:30</p>
                            <br/>
                            <font-awesome-icon :icon="['fas','phone']" class="mr-2"/>
                            <p class="d-inline mr-2 text-primary tS">(07)5312560</p>
                            <br/>
                            <font-awesome-icon :icon="['fas','map-marker']" class="mr-2"/>
                            <p class="d-inline mr-2 text-primary tS">80347高雄市鹽埕區中正四路272號</p>
                            <!-- <p class="card-text mt-3">Posuere ipsum eget tellus placerat quis ultrices sem commodo interdum et malesuada fames ipsum primis faucibus…</p> -->
                            <a class="mt-5 btn p-2 btn-primary font-weight-light rounded-0 text-uppercase" href="http://khm.org.tw/home01.aspx?ID=1" target='_blank'>Get in Contact »</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid bg-dark footer">
            <div class="container">
                <div class="row pt-5 pb-3 text-white">
                    <div class="col-md-6">
                        <p class="font-weight-bold my-5">IPSUM ACCUMSAN MAURIS SEMPER</p>
                        <p>Nec tortor nec ultrices donec lobortis orci vitae arcu.</p>
                        <div class="my-4">
                            <font-awesome-icon :icon="['fas','map-marker']" />
                            <p class="d-inline ml-3">Street Name & Number, Town, Postcode/Zip</p>
                        </div>
                        <div class="my-4">
                            <font-awesome-icon :icon="['fas','phone']" />
                            <p class="d-inline ml-3">+00 (123) 456 7890</p>
                        </div>
                        <div class="my-4">
                            <font-awesome-icon :icon="['fas','envelope']" />
                            <p class="d-inline ml-3">info@domain.com</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6">
                                <p class="font-weight-bold my-5">TEMPOR SOLLICITUDIN</p>
                                <p class="my-4">Sollicitudin sapien tortor</p>
                                <p class="my-4">Sollicitudin sapien tortor</p>
                                <p class="my-4">Sollicitudin sapien tortor</p>
                                <p class="my-4">Sollicitudin sapien tortor</p>
                            </div>
                            <div class="col-md-6">
                                <p class="font-weight-bold my-5">TEMPOR SOLLICITUDIN</p>
                                <p class="my-4">A condimentum odio.</p>
                                <form class="my-4">
                                    <div class="form-group">
                                        <input type="email" class="form-control form-control-sm rounded-0" placeholder="Name">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control form-control-sm rounded-0" placeholder="Email">
                                    </div>
                                    <button type="submit" class="btn btn-outline-primary rounded-0 text-uppercase">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <appFooter/>
        <!-- <i id="fixCenter" class="fas fa-sort-up fa-2x goTop" title="Back to Top" aria-hidden="true"></i> -->
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
            currentCard: {
                'col-12': true,
                'col-sm-6': true,
                'mb-3': true,
                'mb-sm-0': true
            },
            latestCard: {
                'col-md-4': true,
                'mb-3' :true
            },
            currentInfoTitle_1: '',
            currentInfoTopDate_1: '',
            currentInfoContent_1: '',
            currentInfo: [],
            lastesInfo: [],
            isLastesLoading: true,
            isLastesInfo: false,
            isCurrentLoading: true,
            isCurrentInfo: false,
        }
    },
    mounted() {
        this.getExhibitionData();
    },
    methods: {
        getExhibitionData() {
            let self = this;
            axios.get('http://opendata.khcc.gov.tw/public/OD_kmfa_exhibition.ashx')
            .then(function (response){
                console.log('1 getExhibitionData success_index');
                self.exhibitionData(response.data);
            })
            .then(function(){
                self.isCurrentLoading = false;
                self.isCurrentInfo = true;
                self.getNewsData();
            })
            .catch(function (error) {
                console.log('error index');
            });
        },
        getNewsData() {
            let self = this;
            axios.get('http://opendata.khcc.gov.tw/public/OD_kmfa_news.ashx')
            .then(function (response){
                console.log('2 getNewsData success_index');
                self.newsData(response.data);
            })
            .then(function(){
                self.isLastesLoading = false;
                self.isLastesInfo = true;
            })
            .catch(function (error) {
                console.log('error index');
            });
        },
        exhibitionData(getCurrentInfo) {
            let self = this;
            let currentTop = 0;
            self.currentInfoTitle_1 = getCurrentInfo[currentTop].Title;
            self.currentInfoTopDate_1 = getCurrentInfo[currentTop].TopDate;
            self.currentInfoContent_1 = getCurrentInfo[currentTop].Content;

            let infoNums = 5;
            getCurrentInfo.length = infoNums;
            getCurrentInfo.shift();
            self.currentInfo = getCurrentInfo;
        },
        contentPage(getCurrentTitle) {
            this.$store.dispatch('updateArticle', getCurrentTitle).then(()=>{
                this.$router.push({ name: 'contentInfo', params: { title: getCurrentTitle }});
            })
        },
        newsData(getLastestInfo) {
            let self = this;
            let infoNums = 6;
            getLastestInfo.length = infoNums;
            self.lastesInfo = getLastestInfo;
        }
    },
    components: {
        appHeader,
        appFooter,
        FontAwesomeIcon,
    },
}
</script>

<style lang="css" scoped>
    @media screen and (min-width: 576px){
        .latestImg {
            height: 200px;
            overflow: hidden;
        }
    }
</style>
