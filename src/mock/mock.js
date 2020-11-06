import Mock from 'mockjs'
import {runTime} from "./timeCallBack";

const Random = Mock.Random

export function getDataList(){
  let list=[]
  runTime(10,()=>{
    let newArticleObject = {
      des: Random.csentence(5, 10), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.datetime('yyyy-MM-dd A HH:mm:ss'),// Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      province:Random.county(true),
      address:Random.region()
    }
    list.push(newArticleObject)
  })
  return list
}

export default Mock.mock('/tableList', getDataList)
