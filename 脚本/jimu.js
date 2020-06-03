var body = $response.body;
var url = $request.url;

const path1 = '/api/v1/sell/user/privilege';

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

$done({body});
