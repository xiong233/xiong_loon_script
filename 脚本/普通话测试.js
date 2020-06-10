var url = $request.url;

const path1 = '120.55.106.17:8080/wapsPay/PthTest/users/query.do';

if (url.indexOf(path1) != -1) {
	var body = $response.body;
	let obj = JSON.parse(body);

	obj['vip'] = 'True';
	obj['vipType'] = 1;
	obj['day'] = 99;
	obj['hp'] = 'True';
	obj['duration'] = 1;
	obj['point'] = 9999;
	obj['activedModules'] = '11';
	obj['activedNum'] = 1;
	obj['buyOrderIds'] = '11';
	
	body = JSON.stringify(obj);  
	$done({body});
 }
