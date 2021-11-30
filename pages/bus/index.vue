<template>
    <div class="bus">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-6 col-12">
                    <SearchBar v-model="param.keyword" class="bus__search-bar" placeholder="選擇路線或手動輸入關鍵字"/>
                    <KeyboardBus class="bus__keyboard" @manual="keyboardManual" @addNumber="addNumber" @addType="addType" @delWord="delWord" @delAll="delAll" 
                        @city="selectCity" @type="selectType"/>
                </div>
                <div class="col-lg-7 col-md-6 col-12">
                    <div class="bus__search-city">{{cityText}}</div>
                    <div class="bus__search-list">
                        <div v-for="(item, index) in searchList" :key="index" class="bus__search-item">
                            <nuxt-link :to="{name: 'bus-city-route', params: {city: param.city, route: item.RouteName.Zh_tw}}">
                                <div class="bus__route-name">{{item.RouteName.Zh_tw}}</div>
                                <div class="bus__route-info">
                                    <div>{{item.DepartureStopNameZh}}</div>
                                    <div class="bus__route-to">往</div>
                                    <div>{{item.DestinationStopNameZh}}</div>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getBusRouteByCity } from '~/api/api' 

export default {
    data() {
        return {
            param: {
                keyword: '',
                city: null,
                type: null,
            },
            searchList: [],
        }
    },
    computed: {
        cityText() {
            if(this.param.city) {
                return this.formatCityName(this.param.city)
            }else {
                return '請先選擇縣市'
            }
        }
    },
    watch: {
        param: {
            handler(val, oldVal) {
                // 至少要有縣市
                if(this.param.city) {
                    this.fetchBusRouteByCity();
                }else {
                    // 沒有縣市，無法搜尋
                }
            },
            deep: true,
        },
    },
    methods: {
        // 手動輸入
        keyboardManual() {
            this.param.keyword = '';
        },
        // 輸入數字
        addNumber(number) {
            this.param.keyword += number;
        },
        // 輸入路線關鍵字
        addType(type) {
            this.param.keyword += type;
        },
        // 刪除一個字
        delWord() {
            this.param.keyword = this.param.keyword.substring(0, this.param.keyword.length - 1);
        },
        // 刪除全部
        delAll() {
            this.param.keyword = '';
        },
        // 選擇城市
        selectCity(city) {
            this.param.keyword = '';
            this.param.city = city;
        },
        // 選擇種類
        selectType(type) {
            this.param.type = type;
        },
        // api 取得指定[縣市]的市區公車路線資料
        fetchBusRouteByCity() {
            let param = ""
            if(this.param.keyword) {
                param = {
                    '$filter': `contains(RouteName/Zh_tw, '${this.param.keyword}')`
                }
            }
            getBusRouteByCity(this.param.city, param).then(response => {
                this.searchList = response;
            });
        },
        // 前往公車路線
        toBusInfoPage(item) {
            this.router.push({name: 'bus-route', params: {route: item.RouteName.Zh_tw}})
        },
    }
}
</script>
<style lang="scss" scoped>
.bus {
    padding-top: 25px;
    &__search-bar {
        margin-bottom: 5px;
    }
    &__keyboard {
        padding: 20px;
        border-radius: 10px;
        background-color: $gray-dark;
    }
    &__search-city {
        color: $white;
        font-size: 16px;
        line-height: 23px;
        margin-bottom: 6px;
    }
    &__search-list {
        height: 100vh;
        overflow: scroll;
    }
    &__search-item {
        cursor: pointer;
        border-radius: 6px;
        padding: 12px 16px;
        &:nth-child(even) {
            background-color: $gray-dark;
        }
    }
    &__route-name {
        font-weight: 500;
        font-size: 17px;
        line-height: 25px;
        color: $primary;
    }
    &__route-info {
        display: flex;
        align-items: center;
        color: $white;
        font-size: 14px;
        line-height: 20px;
    }
    &__route-to {
        color: $primary;
        margin: 0 10px;
    }
}
</style>