<template>
    <div class="keyboard" @touchmove.stop.prevent="" :class="{'active':show}">
        <div class="headbar" v-if="headbar" @touchstart.stop.prevent="fHideKeyboard">完成</div>
        <div class="board_body" :class="{'top_border':!headbar}">
            <ul class="nums fix">
                <li class="num-item" v-for="(item,index) in list" :key="'num'+index">
                    <a href="javascript:;" @touchstart="fNumChange(item.num)" :class="{'grayBack':item.type!='num'}" class="num-item-in">{{item.num}}</a>
                </li>
            </ul>
            <div class="pwd-loading" v-if="loading"></div>
        </div>
    </div>
</template>
<script>

export default {
    name:'c-keyboard',
    created(){
        this.list = Array(10).join('0').split('').map(function(item,index){
            return {
                num:index+1,
                type:'num'
            }
        });
        this.list.push({num:'.',type:'symbol'});
        this.list.push({num:0,type:'num'});
        this.list.push({num:'X',type:'symbol'});        
    },
    props:{
        show:{//是否显示当前键盘
            type:Boolean,
            default:false
        },
        headbar:{//是否显示顶部栏
            type:Boolean,
            default:false
        },
        loading:{ //是否显示loading
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            list:[]
        }
    },
    methods:{
        fNumChange(num){
            this.$emit('onchange',num);
        },
        fHideKeyboard(event){
            this.$emit('onhide');
        }
    }
}
</script>
<style lang="sass" scoped>
    .fix { *zoom: 1; }
    .fix:after { display: table; content: ''; clear: both; }
    .keyboard {
        background: #f1f1f1;
        position: fixed;
        z-index: 66;
        bottom: 0;
        width: 100%;
        transform:translateY(100%);
        transition:all .3s;
        &.active{
            transform:translateY(0);
        }
        .nums{
            list-style:none;
            padding-left:0;
            margin:0;
        }
        .num-item{
            width: 33.333%;
            float: left;
        }
        .num-item-in{
            height: 130px;
            line-height: 130px;
            font-size: 56px;
            color: #030303;
            background-color: #fff;
            border-right: 1px solid #999;            
            border-bottom: 1px solid #999;
            text-decoration: none;
            text-align: center;            
            position:relative;
            display: block;
            &:active {
                background-color: #d2d2d2;
                text-decoration: underline;
            }
        }
        .num-item:nth-child(3n) a{
            border-right:0;
        }
        .num-item:nth-child(10) a,.num-item:nth-child(11) a,.num-item:nth-child(12) a{
            border-bottom:0;
        }
        .grayBack {
            background: #e5e5e5;
        }
        .headbar {
            background: #e5e5e5;
            height: 79px;
            line-height: 79px;
            text-align: right;
            padding-right: 26px;
            font-size: 30px;
            position:relative;
            color: #5b99ee;
            border-bottom: 1px solid #ccc;
            border-top: 1px solid #ccc;
        }
        .board_body{
            position:relative;
        }
        .pwd-loading{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #fff;
            &:before {
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -75px;
                margin-top: -75px;
                display: inline-block;
                height:150px;
                width: 150px;
                animation: myLoading .75s linear infinite;
                -webkit-animation: myLoading .75s linear infinite;
                border-radius: 100%;
                border: 2px solid #666;
                border-bottom-color: transparent;
                vertical-align: middle;
            }
        }
    }
    @keyframes myLoading {
        to {
            transform: rotate3d(0, 0, 1, 360deg);
            -webkit-transform: rotate3d(0, 0, 1, 360deg)
        }
    }
    @-webkit-keyframes myLoading {
        to {
            transform: rotate3d(0, 0, 1, 360deg);
            -webkit-transform: rotate3d(0, 0, 1, 360deg)
        }
    }
</style>