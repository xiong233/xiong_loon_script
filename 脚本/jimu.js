var body = $response.body;
var url = $request.url;

const path1 = '/api/v1/sell/user/privilege';
const path2 = '/api/account/getUser';
let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.data['privileges']['likeme']['status'] = 1;
    obj['data']['privileges']['vip']['status'] = 1;
	obj.data['privileges']['likeme']['buy_status'] = 1;
	obj['data']['privileges']['vip']['buy_status'] = 1;
	obj['data']['privileges']['likeme']['rest_days'] = 1;
	obj['data']['privileges']['vip']['rest_days'] = 1;
	obj['data']['privileges']['likeme']['expire_time_desc'] = '2021-01-01 08:00:00';
	obj['data']['privileges']['vip']['expire_time_desc'] = '2021-01-01 08:00:00';
	obj['data']['privileges']['likeme']['end_time'] = '2021-01-01 08:00:00';
	obj['data']['privileges']['vip']['end_time'] = '2021-01-01 08:00:00';
	body = JSON.stringify(obj);  
 }
if (url.indexOf(path2) != -1) {
	obj.data['area'] = obj.data['address'];
	obj.data['uniqueId'] = obj.data['uniqueId'] + ' 电话' + obj.data['account'];
	body = JSON.stringify(obj);  
 }

$done({body});
