<template>
    <div class="keyboard-bus">
        <div v-if="keyboardType == 'default'" class="keyboard-bus__wrap">
            <div class="keyboard-bus__item keyboard-bus__item--col-3" @click="showkeyboard('city')">
                <img src="~/assets/icon/position.svg"/>
                {{cityList[selected.cityIndex].title}}
            </div>
            <div class="keyboard-bus__item keyboard-bus__item--col-2" @click="$emit('manual')">手動輸入</div>
            <div class="keyboard-bus__item" :class="{'keyboard-bus__item--active': selected.type == '紅'}" @click="selected.type = '紅'">紅</div>
            <div class="keyboard-bus__item" :class="{'keyboard-bus__item--active': selected.type == '藍'}" @click="selected.type = '藍'">藍</div>
            <div class="keyboard-bus__item keyboard-bus__item--number" @click="enterNumber('1')">1</div>
            <div class="keyboard-bus__item keyboard-bus__item--number" @click="enterNumber('2')">2</div>
            <div class="keyboard-bus__item keyboard-bus__item--number" @click="enterNumber('3')">3</div>
            <div class="keyboard-bus__item" :class="{'keyboard-bus__item--active': selected.type == '綠'}" @click="selected.type = '綠'">綠</div>
            <div class="keyboard-bus__item" :class="{'keyboard-bus__item--active': selected.type == '棕'}" @click="selected.type = '棕'">棕</div>
            <div class="keyboard-bus__item keyboard-bus__item--number" @click="enterNumber('4')">4</div>
            <div class="keyboard-bus__item keyboard-bus__item--number" @click="enterNumber('5')">5</div>
            <div class="keyboard-bus__item keyboard-bus__item--number" @click="enterNumber('6')">6</div>
            <div class="keyboard-bus__item" :class="{'keyboard-bus__item--active': selected.type == '橘'}" @click="selected.type = '橘'">橘</div>
            <div class="keyboard-bus__item" :class="{'keyboard-bus__item--active': selected.type == '小'}" @click="selected.type = '小'">小</div>
            <div class="keyboard-bus__item keyboard-bus__item--number" @click="enterNumber('7')">7</div>
            <div class="keyboard-bus__item keyboard-bus__item--number" @click="enterNumber('8')">8</div>
            <div class="keyboard-bus__item keyboard-bus__item--number" @click="enterNumber('9')">9</div>
            <div class="keyboard-bus__item" :class="{'keyboard-bus__item--active': selected.type == '幹線'}" @click="selected.type = '幹線'">幹線</div>
            <div class="keyboard-bus__item" @click="showkeyboard('more')">更多</div>
            <div class="keyboard-bus__item" @click="delWord()">C</div>
            <div class="keyboard-bus__item keyboard-bus__item--number">0</div>
            <div class="keyboard-bus__item" @click="delAll()">
                <img src="~/assets/icon/del.svg"/>
            </div>
        </div>
        <div v-if="keyboardType == 'more'" class="keyboard-bus__wrap keyboard-bus__wrap--more">
            <div v-for="(item, index) in typeList" :key="index" class="keyboard-bus__item keyboard-bus__item--order-1"
                :class="['keyboard-bus__item--order-' + (index+1), {'keyboard-bus__item--active': selected.type == item.value}]" @click="selected.type = item.value; selected.typeIndex = index">{{item.title}}</div>
            <div class="keyboard-bus__item keyboard-bus__item--col-3" @click="showkeyboard('default')">回上一頁</div>
        </div>
        <div v-if="keyboardType == 'city'" class="keyboard-bus__wrap keyboard-bus__wrap--city">
            <div v-for="(item, index) in cityList" :key="index" class="keyboard-bus__item keyboard-bus__item--order-1"
                :class="['keyboard-bus__item--order-' + (index+1), {'keyboard-bus__item--active': selected.city == item.value}]" @click="selected.city = item.value; selected.cityIndex = index">{{item.title}}</div>
            <div class="keyboard-bus__item keyboard-bus__item--col-3" @click="showkeyboard('default')">回上一頁</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            keyboardType: 'default',
            selected: {
                city: null,
                cityIndex: 0,
                type: null,
                typeIndex: 0,
            },
            typeList: [
                {title:"F",value:"F"},
                {title:"R",value:"R"},
                {title:"T",value:"T"},
                {title:"快",value:"快"},
                {title:"內科",value:"內科"},
                {title:"跳蛙",value:"跳蛙"},
                {title:"通勤",value:"通勤"},
                {title:"南軟",value:"南軟"},
                {title:"先導",value:"先導"},
                {title:"夜間",value:"夜間"},
                {title:"市民",value:"市民"},
                {title:"其他",value:"其他"},
            ],
            cityList: [
                {title:"選擇縣市",value:null},
                {title:"臺北市",value:"Taipei"},
                {title:"新北市",value:"NewTaipei"},
                {title:"桃園市",value:"Taoyuan"},
                {title:"臺中市",value:"Taichung"},
                {title:"臺南市",value:"Tainan"},
                {title:"高雄市",value:"Kaohsiung"},
                {title:"基隆市",value:"Keelung"},
                {title:"新竹市",value:"Hsinchu"},
                {title:"新竹縣",value:"HsinchuCounty"},
                {title:"苗栗縣",value:"MiaoliCounty"},
                {title:"彰化縣",value:"ChanghuaCounty"},
                {title:"南投縣",value:"NantouCounty"},
                {title:"雲林縣",value:"YunlinCounty"},
                {title:"嘉義縣",value:"ChiayiCounty"},
                {title:"嘉義市",value:"Chiayi"},
                {title:"屏東縣",value:"PingtungCounty"},
                {title:"宜蘭縣",value:"YilanCounty"},
                {title:"花蓮縣",value:"HualienCounty"},
                {title:"臺東縣",value:"TaitungCounty"},
                {title:"金門縣",value:"KinmenCounty"},
                {title:"澎湖縣",value:"PenghuCounty"},
                {title:"連江縣",value:"LienchiangCounty"},
            ],
        }
    },
    watch: {
        'param.city': {
            handler(val, oldVal) {
                this.$emit("city", val)
            },
            deep: true,
        },
        'param.type': {
            handler(val, oldVal) {
                this.$emit("type", val)
            },
            deep: true,
        },
    },
    methods: {
        // 切換顯示鍵盤
        showkeyboard(typeName) {
            this.keyboardType = typeName;
        },
        // 輸入數字
        enterNumber(number) {
            this.$emit("addNumber", number)
        },
        // 刪除一個字
        delWord() {
            this.$emit("delWord")
        },
        // 刪除全部
        delAll() {
            this.$emit("delAll")
        },
    },
}
</script>
<style lang="scss" scoped>
.keyboard-bus {
    background-color: $gray-dark;
    &__wrap {
        width: 100%;
        display: grid;
        grid-template-areas: 'col-3 col-3 col-3 col-2 col-2';
        grid-gap: 12px;
        &--more {
            grid-template-areas: 
            'order-1 order-2 order-3 order-4 order-5'
            'order-6 order-7 order-8 order-9 order-10'
            'order-11 order-12 col-3 col-3 col-3';
        }
        &--city {
            grid-template-areas: 
            'order-1 order-2 order-3 order-4 order-5'
            'order-6 order-7 order-8 order-9 order-10'
            'order-11 order-12 order-13 order-14 order-15'
            'order-16 order-17 order-18 order-19 order-20'
            'order-21 order-22 col-3 col-3 col-3';
        }
    }
    &__item {
        cursor: pointer;
        border: 1px solid $primary;
        background-color: $gray-dark;
        box-shadow: 0px 0px 6px $primary, 0px 0px 2px $primary;
        border-radius: 9px;
        padding: 10px;
        font-size: 14px;
        line-height: 20px;
        color: $primary;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
            border: 1px solid $black;
        }
        &--active {
            background-color: $primary;
            color: $black;
        }
        &--number {
            color: $white;
        }
        &--col-2 {
            grid-area: col-2;
        }
        &--col-3 {
            grid-area: col-3;
        }
    }
}
// grid-area
@for $var from 1 through 22 {
    .keyboard-bus__item--order-#{$var} {
        grid-area: order-#{$var};
    }
}
</style>