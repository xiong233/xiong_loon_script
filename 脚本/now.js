var url = $request.url;

const path1 = 'nowapi.navoinfo.cn/my_vip';
const path2 = 'nowapi.navoinfo.cn/user?get_pendant=1&pub_device_id=';
const path3 = 'nowapi.navoinfo.cn/user_center?pub_device_id=';

if (url.indexOf(path1) != -1) {
	var body = $response.body;
	let obj = JSON.parse(body);
	obj['result']['user_info']['vip_forever'] = 'true';
	body = JSON.stringify(obj);
	$done({body});
 }
 if (url.indexOf(path2) != -1) {
	var body = $response.body;
	let obj = JSON.parse(body);
	obj['result']['vip_forever'] = 'true';
	body = JSON.stringify(obj);
	$done({body});
 }
 if (url.indexOf(path3) != -1) {
	var body = $response.body;
	let obj = JSON.parse(body);
	obj['result']['vip_forever'] = 'true';
	body = JSON.stringify(obj);
	$done({body});
 }
