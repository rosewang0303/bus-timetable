import request from '~/service'

// 取得指定[縣市]的市區公車路線資料
export function getBusRouteByCity(city, paramObj) {
    return request({
        url: `/v2/Bus/Route/City/${city}`,
        method: 'get',
        params: paramObj
    })
}