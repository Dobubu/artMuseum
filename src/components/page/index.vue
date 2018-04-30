<template lang="html">
    <div>
        <appHeader/>
        <div class="container-fluid header text-white" style="margin-top: -3rem;">
            <div class="container pt-4">
                <div class="jumbotron rounded-0" style="background: transparent;">
                    <h1 class="display-4 spancingJumbotron">MORBI ELEIFEND SEMPER</h1>
                    <p class="lead">Urna eget tincidunt nam tincidunt viverra semper suspendisse in bibendum diam quisque.</p>
                    <a class="btn p-2 btn-outline-primary font-weight-light rounded-0" href="#" role="button">Learn more</a>
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
                <div class="col-12 col-md-6 mb-4 mb-md-0">
                    <p class="mb-0">{{currentInfoTopDate_1}}</p>
                    <h5 class="mb-4 text-primary">{{currentInfoTitle_1}}</h5>
                    <p class="text-truncate textTruncate150">{{currentInfoContent_1}}</p>
                    <a class="btn p-2 btn-primary font-weight-light rounded-0 text-uppercase"  v-on:click='contentPage(currentInfoTitle_1)' href="#" role="button">read more »</a>
                </div>
                <div class="col-12 col-md-6 d-flex flex-wrap">
                    <div class="col-12 col-sm-6 mb-3 mb-sm-0 px-0" v-for='info in currentInfo'>
                        <p class="mb-0">{{info.TopDate}}</p>
                        <a href="#" class="text-primary font-weight-normal mb-3 text-truncate" style="white-space: normal;" v-on:click='contentPage(info.Title)'>{{info.Title}}</a>
                        <p class="text-truncate textTruncate100">{{info.Content}}</p>
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
                    <!-- <p>Donec vitae velit facilisis gravida justo sed rhoncus</p> -->
                </div>
            </div>
            <div class="row px-5 mb-4">
                <div class="col-md-4">
                    <div class="card h-100">
                        <img class="card-img-top" src="../../assets/img/card_1.jpg" alt="Card image cap">
                        <div class="card-body" style="background: #fff;">
                            <a href="layout.html" class="text-primary font-weight-normal" style="font-size:18px;">4/28(六) 14:00 │ 跨界對談：侯慶謀＋智崴資訊科技x陳永興＋晶泰水泥</a>
                            <p class="card-text text-truncate textTruncate100 mt-1">《起家的人 HOME 2028》跨界對談 侯慶謀 × 智崴資訊科技：共想城市V1.0 陳永興 × 晶泰水泥：南方家園 -主持人- 曾旭正(國家發展委員會副主任委員 / 國立臺灣大學土木研究所博士) -與談人- 侯慶謀－侯林規劃設計合夥人 陳永興－水牛建築師事務所主持建築師 翁大程－智崴資訊科技創意中心技術經理 楊東賢－晶泰水泥總經理 ●時間：4/28(六) 14:00-16:00 ●地點：高美館地下一樓 演講廳 - - 起家的人 HOME 2028 迎接數位新時代，邁向詩意未來家 總策展人：阮慶岳 HOME 2025：想家計畫 策展人：阮慶岳、詹偉雄、謝宗哲 這是一個關於台灣人未來的家，究竟應當是什麼模樣的展覽與想像。 其中的重點，是邀請台灣中青輩的優秀建築師，搭配台灣十分活躍也具競爭力的各類產業界，相互合作一起構思台灣人未來家的面貌。尤其期待設計界善用台灣既有的產業優勢，並回到在地文化與社會的主體位置，清楚認知自身優勢與面對的挑戰，敢於從微小的在地現實出發，再逐步與龐大的全球系統尋求對話。 這樣讓設計界與在地製造與美學的結合，應該是一種以「局部」作為存在位置，與全球「整體」積極地作對話，尋求差異共生的必要作為。就如同台灣的自然、人文與歷史環境，一直都以多樣及多元為特色，而且這種豐富複雜的環境背景，也正是台灣設計界發展的優勢與契機所在。 這次展覽所探討的都市/建築理念，同時是在回應戰後因為都市人口的迅速增加，所衍生的各種居住問題，也對此刻工業/數位社會興起後，顯現出來逐水草而居的新游牧生活模式，究竟應當何去何從提出破解的挑戰，更對於建築與生態永續這攸關地球命運的問題，做出各面向的積極反省。
                            </p>
                            <p class="mb-0 text-right text-primary"><i class="fas fa-clock mr-2"></i>2018/04/23</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100">
                        <img class="card-img-top" src="../../assets/img/card_2.jpg" alt="Card image cap">
                        <div class="card-body" style="background: #fff;">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100">
                        <img class="card-img-top" src="../../assets/img/card_3.jpg" alt="Card image cap">
                        <div class="card-body" style="background: #fff;">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row px-5 mb-4">
                <div class="col-md-4">
                    <div class="card h-100">
                        <img class="card-img-top" src="../../assets/img/card_4.jpg" alt="Card image cap">
                        <div class="card-body" style="background: #fff;">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100">
                        <img class="card-img-top" src="../../assets/img/card_5.jpg" alt="Card image cap">
                        <div class="card-body" style="background: #fff;">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100">
                        <img class="card-img-top" src="../../assets/img/card_6.jpg" alt="Card image cap">
                        <div class="card-body" style="background: #fff;">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
            <div class="row px-5 mb-5">
                <div class="col-md-4">
                    <div class="card h-100">
                        <img class="card-img-top" src="../../assets/img/card_7.jpg" alt="Card image cap">
                        <div class="card-body" style="background: #fff;">
                            <p class="mb-0">EST AT ULLAMCORPER NAM</p>
                            <i class="fas fa-user fa-xs"></i>
                            <p class="d-inline mr-2 text-primary tS spLine">Admin</p><i class="fas fa-tag fa-xs"></i>
                            <p class="d-inline mr-2 text-primary tS">Admin</p>
                            <p class="card-text mt-3">Posuere ipsum eget tellus placerat quis ultrices sem commodo interdum et malesuada fames ipsum primis faucibus…</p>
                            <a class="btn p-2 btn-primary font-weight-light rounded-0 text-uppercase" href="#" role="button">Get in Contact »</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100">
                        <img class="card-img-top" src="../../assets/img/card_8.jpg" alt="Card image cap">
                        <div class="card-body" style="background: #fff;">
                            <p class="mb-0">EST AT ULLAMCORPER NAM</p>
                            <i class="fas fa-user fa-xs"></i>
                            <p class="d-inline mr-2 text-primary tS spLine">Admin</p><i class="fas fa-tag fa-xs"></i>
                            <p class="d-inline mr-2 text-primary tS">Admin</p>
                            <p class="card-text mt-3">Posuere ipsum eget tellus placerat quis ultrices sem commodo interdum et malesuada fames ipsum primis faucibus…</p>
                            <a class="btn p-2 btn-primary font-weight-light rounded-0 text-uppercase" href="#" role="button">Get in Contact »</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100">
                        <img class="card-img-top" src="../../assets/img/card_9.jpg" alt="Card image cap">
                        <div class="card-body" style="background: #fff;">
                            <p class="mb-0">EST AT ULLAMCORPER NAM</p>
                            <i class="fas fa-user fa-xs"></i>
                            <p class="d-inline mr-2 text-primary tS spLine">Admin</p><i class="fas fa-tag fa-xs"></i>
                            <p class="d-inline mr-2 text-primary tS">Admin</p>
                            <p class="card-text mt-3">Posuere ipsum eget tellus placerat quis ultrices sem commodo interdum et malesuada fames ipsum primis faucibus…</p>
                            <a class="btn p-2 btn-primary font-weight-light rounded-0 text-uppercase" href="#" role="button">Get in Contact »</a>
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
                            <i class="fas fa-map-marker"></i>
                            <p class="d-inline ml-3">Street Name & Number, Town, Postcode/Zip</p>
                        </div>
                        <div class="my-4">
                            <i class="fas fa-phone"></i>
                            <p class="d-inline ml-3">+00 (123) 456 7890</p>
                        </div>
                        <div class="my-4">
                            <i class="fas fa-envelope"></i>
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
        <div class="container-fluid bg-secondary text-dark">
            <div class="container">
                <div class="rol py-3">
                    <p class="mb-0">Copyright © 2018 - All Rights Reserved - Mischa</p>
                </div>
            </div>
        </div>
        <!-- <i id="fixCenter" class="fas fa-sort-up fa-2x goTop" title="Back to Top" aria-hidden="true"></i> -->
    </div>
</template>

<script>
import appHeader from '@/components/layout/header.vue'

import axios from "axios";

export default {
    data() {
        return {
            currentInfoTitle_1: '',
            currentInfoTopDate_1: '',
            currentInfoContent_1: '',
            currentInfo: []
        }
    },
    mounted() {
        this.getData2();
        // this.getData();
    },
    methods: {
        getData() {
            let self = this;
            axios.get('http://opendata.khcc.gov.tw/public/OD_kmfa_exhibition.ashx')
            .then(function (response){
                console.log('1 success index');
                console.log(response.data[0].Title)
                self.current(response.data);
            })
            .catch(function (error) {
                console.log('error index');
            });
        },
        getData2() {
            let self = this;
            axios.get('http://opendata.khcc.gov.tw/public/OD_kmfa_news.ashx')
            .then(function (response){
                console.log('2 success index');
                console.log(response.data[0].Title)
                self.current(response.data);
            })
            .then(function(){
                self.getData();
            })
            .catch(function (error) {
                console.log('error index');
            });
        },
        current(getCurrentInfo) {
            console.log(getCurrentInfo)
            let self = this;
            let currentTop = 0;
            self.currentInfoTitle_1 = getCurrentInfo[currentTop].Title;
            self.currentInfoTopDate_1 = getCurrentInfo[currentTop].TopDate;
            self.currentInfoContent_1 = getCurrentInfo[currentTop].Content;

            getCurrentInfo.length = 5;
            getCurrentInfo.shift();
            self.currentInfo = getCurrentInfo;
        },
        contentPage(getCurrentTitle) {
            this.$store.dispatch('updateArticle', getCurrentTitle).then(()=>{
                this.$router.push({ name: 'contentInfo' });
            })
        }
    },
    components: {
        appHeader,
    },
}
</script>

<style lang="css" scoped>
</style>
