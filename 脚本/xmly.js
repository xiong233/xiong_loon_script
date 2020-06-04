var body = $response.body;
var url = $request.url;

const path1 = 'ximalaya.com/wechat/api/open/openPay/albumBoughtStatus';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj['data']['']['boughtStatus'] = 'True';
	body = JSON.stringify(obj);  
 }

$done({body});
