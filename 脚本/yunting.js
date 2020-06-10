var url = $request.url;

const path1 = 'getway.radio.cn/app';

if (url.indexOf(path1) != -1) {
	var body = $response.body;
	let obj = JSON.parse(body);
	
	obj['isVip'] = 0;
	
	body = JSON.stringify(obj);  
	$done({body});
 }
