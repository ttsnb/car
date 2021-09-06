import { request } from "./request";
import axios from 'axios'

export function getCar() {
    return request({
        url: "/ie"
    })
}
export function login(data) {
    return request({
        url: '/admin',
        data: data,
        method: 'POST'
    })
}

export function carfind() {
    return request({
        url: '/car/find',
        method: 'POST'
    })
}
export function carsend(data) {
    // console.log(data);
    return request({
        url: '/car/updateOne',
        method: 'POST',
        data: data
    })
}

export function carremove(data) {
    console.log(data);
    return request({
        url: '/car/remove',
        method: 'DELETE',
        data: data
    })
}
export function caradd(data) {
    console.log(data);
    return request({
        url: '/car/create',
        method: 'POST',
        data: data
    })
}


export function parkfind() {
    return request({
        url: '/parking/find',
        method: 'POST'
    })
}
export function parksend(data) {
    // console.log(data);
    return request({
        url: '/parking/updateOne',
        method: 'POST',
        data: data
    })
}

export function parkremove(data) {
    console.log(data);
    return request({
        url: '/parking/remove',
        method: 'DELETE',
        data: data
    })
}
export function parkadd(data) {
    console.log(data);
    return request({
        url: '/parking/create',
        method: 'POST',
        data: data
    })
}




















export function send(data) {
    // return axios.post('http://120.79.157.47:8888/admin', {
    //     data: {
    //         username: 'admin',
    //         password: 'admin'
    //     }
    // })
    console.log(data);

    return axios({
        method: 'POST',
        url: 'http://120.79.157.47:8888/car/updateOne',
        timeout: 1000,
        data: data
    })
}

// export function getHomeGoods(type, page) {
//     return request({
//         url: '/home/data',
//         params: {
//             type,
//             page
//         }
//     })
// }