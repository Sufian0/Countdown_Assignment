function randomGame(){
  let num;
  let repeat = 0;
  let timer = setInterval(function(){
    num = Math.random();
    repeat++
    if(num > .75 && repeat >1) {
      clearInterval(timer);
      console.log("//", num);
      console.log("It took " + repeat + " tries.");
    }
    else if(num > .75 && repeat ==1) {
      clearInterval(timer);
      console.log("//", num);
      console.log("It took " + repeat + " try.");
    }
    else {
      console.log("//", num);
    }
  },1000)
}