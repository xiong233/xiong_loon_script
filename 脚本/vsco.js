var url = $request.url;

const path1 = 'vsco.co/api/subscriptions/2.1/user-subscriptions/';

if (url.indexOf(path1) != -1) {
	var body = $response.body;
	let obj = JSON.parse(body);
	
	obj.user_subscription["is_active"] = true;

	body = JSON.stringify(obj);  
	$done({body});
 }
