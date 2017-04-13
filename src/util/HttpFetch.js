/**
 * Created by Sinclair on 2017/4/8.
 */
/**
 * 简单封装了fetch -by Sinclair
 * 设置了跨域
 * 参数 {地址，数据（json）,期望输出类型（默认输出json）}
 * dataType= json|text|blob
 * @type {{get: ((p1?:*, p2?:*, p3?:*)), post: ((p1?:*, p2?:*, p3?:*))}}
 */
const HttpFetch = {
    get: (url, data = {}, dataType = 'json') => {
        //把json拼接到url上
        if (data) {
            url += "?";
            Object.keys(data).forEach((v) => {
                url += v + "=" + data[v] + "&";
            })
            //去除最后一个&
            url=url.substring(0, url.length - 1);
        }
        return fetch(url,{
            method:'GET',
            mode: "no-cors",//跨域
        }).then(response => {
            if (response.ok) {
                switch (dataType) {
                    case 'text':
                        return response.text();
                    case 'blob':
                        return response.blob();
                    default:
                        return response.json();
                }
            }
        })
    },
    post: (url, data={}, dataType = 'json') => {
        return fetch(url, {
            method: "POST",
            mode: "no-cors",//跨域
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    switch (dataType) {
                        case 'text':
                            return response.text();
                        case 'blob':
                            return response.blob();
                        default:
                            return response.json();
                    }
                }
            })
    }
};
export default HttpFetch