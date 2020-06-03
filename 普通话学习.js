var body = $response.body;
var url = $request.url;

const path1 = 'api.hcreator.cn/wapsPay/Login/pth/v3/users/query.do';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj['data']['point'] = 9999;
	body = JSON.stringify(obj);  
 }

$done({body});
