/*
 * @Description:定义一些第三方插件的控制行为
 * @Author: yangxiaokang
 * @Email: [yangxiaokang@zuoyebang.com]
 * @Date: 2023-02-28 10:26:56
 * @LastEditTime: 2023-02-28 18:46:23
 * @LastEditors: yangxiaokang
 */

// 执行的非常早，很多时候派不上用场，比md文件里的js执行的早。
// 顺序：head里引入的js 早于md文件里的js 早于第三方插件的js

const syncPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let m = document.getElementById("bgm");
      if (m != undefined) {
        console.log("当前音量", m.volume);
        m.volume = 0.3;
        // 不可行
        //   let elements = document.querySelector('.bar');
        //     elements.setAttribute("style", "width: 30% !important");
        //   console.log('elements',elements)
        console.log("修改后音量", m.volume);
        reject();
      } else {
        console.log("undefined");
        resolve();
      }
    }, 3000);
  });
};
const pollFetch = async () => {
  while (true) {
    console.log("执行");
    try {
      await syncPromise();
    } catch {
      console.log("执行完成break");
      break;
    }
  }
};
pollFetch();

// const goTop = () => {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("paht",window.location.pathname)
//           var obj = document.getElementById("goTop");
//           console.log(obj)
//       if (window.location.pathname == "/") {
//           obj.className = "hideCat";
//           resolve();
//       } else {
//         obj.className = ""
//       }
//       resolve();
//     }, 1000);
//   });
// };
// const pollGoTop = async () => {
//     while (true) {
//       console.log("重复执行")
//     try {
//       await goTop();
//     } catch(e) {
//      console.log("出错了",e)
//       break;
//     }
//   }
// };

