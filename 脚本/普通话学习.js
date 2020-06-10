var url = $request.url;

const path1 = 'api.hcreator.cn/wapsPay/Login/pth/v3/users/query.do';

if (url.indexOf(path1) != -1) {
	var body = $response.body;
	let obj = JSON.parse(body);
	
	obj['data']['point'] = 9999;
	
	body = JSON.stringify(obj);  
	$done({body});
 }
