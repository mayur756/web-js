function runTime(i_max, callback) {
    var time = 0;
    var initialOffset = 0;
    var i = i_max;
  
    var interval = setInterval(function () {
      document.querySelector("#question-timer").dataset.time = Math.ceil(i);
      document.querySelector(".circle-animation").style.strokeDashoffset =
        125 - 125 * (i / i_max);
      if (i <= time) {
        document.querySelector(".circle-animation").style.strokeDashoffset = 125;
        clearInterval(interval);
        if (typeof callback === "function") {
          callback();
        }
      }
      i -= 0.1;
    }, 100);
  }
  
  runTime(30, null);

    
  let quotes=new Array(5);
  let i = 0;
  let authors=new Array(5);
  
  quotes[0]="\"Whether you think you can or you think you can't, you're right\"";
  
  quotes[1]="\"I would rather die of passion than of boredom.”\"";
  
  quotes[2]="\"Awesome site!\"";
  
  quotes[3]="\"This site was very informative and helped with my problem.\"";
  
  quotes[4]="\"Best site for helping with this issue.\"";
  
  
  setInterval(changeText, 30000);
  
  function changeText(){
      document.getElementById("que-1").innerHTML=(quotes[i] + '<p style="text-align: right"><i>' + authors[i] + '</i></p>');
      if(i == 4)
          i = 0;
      else
          i++;
    }


