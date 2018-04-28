// api/movie.js
import axios from 'axios'

export default {
  getStore({url}){
    return new Promise((resolve, reject) => {
      axios.get(url).then(res => {
        //两个请求现在都完成
        resolve(
          res.data.rows
            // .map(arr => Object.assign({}, arr, {
            //   goods_image: arr.goods_image.replace(/#/, '')
            // }))
        );
      }).catch(err=>reject(err))
    })
  },
  getOrderlist({url}){
    return new Promise((resolve, reject) => {
      axios.get(url).then(res => {
        //两个请求现在都完成
        resolve(
          res.data.rows
            // .map(arr => Object.assign({}, arr, {
            //   goods_image: arr.goods_image.replace(/#/, '')
            // }))
        );
      }).catch(err=>reject(err))
    })
  }
}