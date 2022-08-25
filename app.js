class pushpushDiv {
    constructor() {
      this.targNum = 0;
      this.min = 0;
      this.sec = 0;
      document.querySelector(".main__button").addEventListener('click', () => {
        this.targNum = 0;
        this.min = 0;
        this.sec = 0;
        this.init();
        setInterval(this.scoreTime, 1000);
      })
      let divs = document.querySelectorAll(".divs__div");
      divs.forEach((div) => {
        // div.style.backgroundColor = "red";
        div.addEventListener('click', (e) => {
          this.clickDiv(e);
        })
      })
    }
    init() {
      document.querySelector('.main__time').style.display = 'inline-block';
      document.querySelector('.divs__container').style.display = 'inline-block';
      //배열 만들기, 셔플, 띄우기, 초 세기
      let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      this.shuffle(nums);
      let divs = document.querySelectorAll(".front");
      divs.forEach((div, i) => {
        // div.style.backgroundColor = "red";
        div.innerHTML = nums[i];
      })
      
    }
    clickDiv(e) {
      if(e.target.children[0].innerHTML == this.targNum) {
        alert(e.target.children[0].innerHTML);
        this.targNum++;
      }
        // alert(e.target.children[0].innerHTML);
    }
    method() {
    }
    shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }  
    
    scoreTime() {
      if (this.sec == 59) {
        this.sec = 0;
        this.min++;
      } 
      else {
        // this.sec++;
      }
      document.querySelector('.main__time').innerHTML = `${this.min} : ${this.sec}`;
    }
    
    
  }
  const ppd = new pushpushDiv();
  