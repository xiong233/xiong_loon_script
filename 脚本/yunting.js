var body = $response.body;
var url = $request.url;

const path1 = 'getway.radio.cn/app';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj['isVip'] = 0;
	body = JSON.stringify(obj);  
 }

$done({body});
