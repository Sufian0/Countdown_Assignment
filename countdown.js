function countDown(Num){
    let NumIn = setInterval(function(){
      Num--;
      if(Num >0){
            console.log(Num);
      }
      else {
            clearInterval(NumIn);
            console.log('DONE!');
      }  
    },1000)
  }
