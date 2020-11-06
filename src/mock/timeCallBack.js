//封装一个执行多少次的回调函数

export const runTime = (time, callBack) => {
  let i = -1
  while (++i < time) {
    callBack(i)
  }
}
