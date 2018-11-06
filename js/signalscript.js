
const green = document.getElementById(`green`),
      yellow = document.getElementById(`yellow`),
      red = document.getElementById(`red`);
let   i = 0;

function ColorChange() {
  // buttonをクリックして発生させる処理を記述
  switch (i%3) {
    case 0:
      red.style.backgroundColor = `#808080`; //赤消灯
      green.style.backgroundColor = `#00cc99`; //青点灯
        break;
    case 1:
      green.style.backgroundColor = `#808080`; //青消灯
      yellow.style.backgroundColor = `#ffff66`; //黄点灯
        break;
    case 2:
      yellow.style.backgroundColor = `#808080`; //黄消灯
      red.style.backgroundColor = `#ff3300`; //赤点灯
        break; }
    i += 1;
    setTimeout(`ColorChange()`,1500);     //  1.5秒間隔で点灯
};
