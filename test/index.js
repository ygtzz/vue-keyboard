const { keyboard } = VueKeyboard;

new Vue({
  name:'c-app',
  el: '#container',
  created() {
      
  },
  data() {
    return {
      pwd:'',
      bShowKeyboard:true,
      headbar:true,
      keyboardLoading:false
    }
  },
  methods:{
    fNumChange(num){
        if(num == "X"){
            if(this.pwd){
                this.pwd = this.pwd.slice(0,-1);
            }
        }
        else if(num !== ""){
            if(this.pwd.length < 6){
                this.pwd += num;
            }
        }
        console.log(this.pwd);
    },
    fShowKeyboard(){
        this.bShowKeyboard = !this.bShowKeyboard;
    },
    fKeyHide(){
        console.log('key hide');
        this.bShowKeyboard = false;
    }
  },
  components: {
    'c-keyboard':keyboard,
  }
});