var body = $response.body;
var url = $request.url;

const path1 = 'nowapi.navoinfo.cn/my_vip';
const path2 = 'nowapi.navoinfo.cn/user?get_pendant=1&pub_device_id=';
const path3 = 'nowapi.navoinfo.cn/user_center?pub_device_id=';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj['result']['user_info']['vip_forever'] = 'true';
	body = JSON.stringify(obj);  
 }
 if ((url.indexOf(path2) != -1)||(url.indexOf(path2) != -1)) {
	obj['result']['vip_forever'] = 'true';
	body = JSON.stringify(obj);  
 }

$done({body});
