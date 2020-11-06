// /*
//  * @Description: html 转为 pdf 并下载
//  * @Author: cmyoung
//  * @Date: 2018-08-10 19:07:32
//  * @LastEditTime: 2019-03-19 19:40:55
//  */

// /** 
//  * @param html { String } DOM树
//  * @param faileName { String } 文件名字
//  * @param isOne { Boolean }  是否为单页 默认 否(false)
//  * @return 文件 {pdf格式}
//  */

'use strict'
import  jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default async (html,faileName,isOne) => {
  return html2canvas(html).then(canvas => {
    console.log(canvas)
    let contentWidth = canvas.width
    let contentHeight = canvas.height
    let pageData = canvas.toDataURL('image/jpeg', 1.0) // 清晰度 0 - 1
    let pdf 
    if(isOne){ // 单页
      console.log(isOne)
      // console.log(contentWidth,'contentWidth')
      // console.log(contentHeight,'contentHeight')
      pdf = new jsPDF('orientation', 'pt', [contentWidth,contentHeight]) // 下载尺寸 a4 纸 比例
      pdf.addImage(pageData, 'JPEG', 0, 0, contentWidth, contentHeight )
    }else{
      //一页pdf显示html页面生成的canvas高度
      let pageHeight = contentWidth / 552.28 * 841.89
      //未生成pdf的html页面高度
      let leftHeight = contentHeight
      //页面偏移
      let position = 0
      //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
      let imgWidth = 555.28
      let imgHeight = 552.28/contentWidth * contentHeight

      pdf = new jsPDF('', 'pt', 'a4') // 下载尺寸 a4 纸 比例
      //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
      //当内容未超过pdf一页显示的范围，无需分页
      if (leftHeight < pageHeight) {
        pdf.addImage(pageData, 'JPEG', 20, 0, imgWidth, imgHeight )
      } else {
        while(leftHeight > 0) {
          pdf.addImage(pageData, 'JPEG', 20, position, imgWidth, imgHeight)
          leftHeight -= pageHeight
          position -= 841.89
          //避免添加空白页
          if(leftHeight > 0) {
            pdf.addPage()
          }
        }
      }
    }
    pdf.save(`${faileName}.pdf`)
    return pdf
  })
}
// 导出页面为PDF格式
// import html2Canvas from 'html2canvas'
// import JsPDF from 'jspdf'
// export default{
//   install (Vue, options) {
//     Vue.prototype.getPdf = function () {
//       var title = this.htmlTitle  //DPF标题
//       html2Canvas(document.querySelector('#pdfDom'), {
//                 allowTaint: true,
// 		        taintTest: false,
// 		        useCORS: true,
// 		        //width:960,
// 		        //height:5072,
// 		        dpi: window.devicePixelRatio*4, //将分辨率提高到特定的DPI 提高四倍
// 		        scale:4 //按比例增加分辨率 
//       }).then(function (canvas) {
//         let contentWidth = canvas.width
//         let contentHeight = canvas.height
//         let pageHeight = contentWidth / 592.28 * 841.89
//         let leftHeight = contentHeight
//         let position = 0
//         let imgWidth = 595.28
//         let imgHeight = 592.28 / contentWidth * contentHeight
//         let pageData = canvas.toDataURL('image/jpeg', 1.0)
//         let PDF = new JsPDF('', 'pt', 'a4')
//         if (leftHeight < pageHeight) {
//           PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
//         } else {
//           while (leftHeight > 0) {
//             PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
//             leftHeight -= pageHeight
//             position -= 841.89
//             if (leftHeight > 0) {
//               PDF.addPage()
//             }
//           }
//         }
//         PDF.save(title + '.pdf')
//       }
//       )
//     }
//   }
// }
// utils -> htmlToPdf.js
// 导出页面为PDF格式
// import html2Canvas from "html2canvas";
// import JsPDF from "jspdf";
// export default {
//   install(Vue, options) {
//     Vue.prototype.getPdf = function() {
//       var title = this.htmlTitle;     // 需要导出页面的标题，在导出的页面的data中声明 htmlTitle，具体看下方代码
//       html2Canvas(document.querySelector("#pdfDom"), {    // 需要导出页面内容的容器的 id 跟此处 "#pdfDom" 一致
//         allowTaint: true,
//         useCORS: true
//       }).then(function(canvas) {
//         let contentWidth = canvas.width;
//         let contentHeight = canvas.height;
//         let pageHeight = (contentWidth / 592.28) * 841.89;
//         let leftHeight = contentHeight;
//         let position = 0;
//         let imgWidth = 595.28;
//         let imgHeight = (592.28 / contentWidth) * contentHeight;
//         let pageData = canvas.toDataURL("image/jpeg", 1.0);
//         let PDF = new JsPDF("", "pt", "a4");
//         if (leftHeight < pageHeight) {
//           PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
//         } else {
//           while (leftHeight > 0) {
//             PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
//             leftHeight -= pageHeight;
//             position -= 841.89;
//             if (leftHeight > 0) {
//               PDF.addPage();
//             }
//           }
//         }
//         PDF.save(title + ".pdf");
//       });
//     };
//   }
// };
// /**
//  * @Author: hejianfang
//  * @Description: 插件有pdf失真的情况
//  * @date 2019-12-04
//  * @Varsion: 1.0
//  * @Last modified by: hejian
//  * @Last modified time: 2019-12-04
//  */
// import html2Canvas from "html2canvas";
// import JsPDF from "jspdf";
// const exportSavePdf = title => {
//   let element = document.querySelector("#pdfDom");
//   let c = document.createElement("canvas");
//   let opts = {
//     scale: 2,
//     canvas: c,
//     logging: true,
//     dpi: window.devicePixelRatio * 2,
//     width: element.offsetWidth,
//     height: element.offsetHeight,
//     scrollY: 0
//   };
//   c.width = element.offsetWidth * 4;
//   c.height = element.offsetHeight * 4;
//   c.getContext("2d").scale(2, 2);
//   html2Canvas(element, opts).then(canvas => {
//     let contentWidth = canvas.width;
//     let contentHeight = canvas.height;
//     let pageHeight = (contentWidth / 572.28) * 841.89;
//     let leftHeight = contentHeight;
//     let position = 0;
//     let imgWidth = 575.28;
//     let imgHeight = (572.28 / contentWidth) * contentHeight;
//     let pageData = canvas.toDataURL("image/jpeg", 1.0);
//     let PDF = new JsPDF("", "pt", "a4");
//     if (leftHeight < pageHeight) {
//       PDF.addImage(pageData, "JPEG", 10, 10, imgWidth, imgHeight);
//     } else {
//       while (leftHeight > 0) {
//         PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
//         leftHeight -= pageHeight;
//         position -= 841.89;
//         if (leftHeight > 0) {
//           PDF.addPage();
//         }
//       }
//     }
//     PDF.save(title + ".pdf");
//   });
// };
// export default exportSavePdf;


