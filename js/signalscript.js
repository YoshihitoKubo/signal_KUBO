

var g = document.getElementById('green'),
    y = document.getElementById('yellow'),
    r = document.getElementById('red');


function colorchange() {
  // buttonをクリックして発生させる処理を記述
  var i = 0;
  (function show(){
    switch (i%3) {
      case 0:
        r.style.backgroundColor = "#808080"; //赤消灯
        g.style.backgroundColor = "#00cc99"; //青点灯
        break;
      case 1:
        g.style.backgroundColor = "#808080"; //青消灯
        y.style.backgroundColor = "#ffff66"; //黄点灯
        break;
      case 2:
        y.style.backgroundColor = "#808080"; //黄消灯
        r.style.backgroundColor = "#ff3300"; //赤点灯
        break;   }
       i += 1;
       setTimeout(function(){
                     show();}
                 ,1500);     //  1.5秒間隔で点灯
   })();
};
