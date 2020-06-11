var url = $request.url;

const path1 = 'gmugmu.com/api/v1/sell/user/privilege';
const path2 = 'gmugmu.com/api/account/getUser';
const path3 = '/v2/social/likeme/recent';

var body = $response.body;
let obj = JSON.parse(body);
if (url.indexOf(path1) != -1) {
	//var body = $response.body;
	//let obj = JSON.parse(body);
	
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
	//$done({body});
 }
if (url.indexOf(path2) != -1) {
	//var body = $response.body;
	//let obj = JSON.parse(body);
	
	obj.data['area'] = obj.data['address'];
	obj.data['province'] = '';
	obj.data['city'] = '';
	obj.data['uniqueId'] = obj.data['uniqueId'] + ' 电话: ' + obj.data['account'];
	
	body = JSON.stringify(obj);
	//$done({body});
 }
 
 if (url.indexOf(path3) != -1) {
	for (var key in obj['data']['data_map'])
	{
		var accountslen = obj['data']['data_map'][key]['accounts'].length;
		for (var i = 0; i < accountslen; i++)
		{
			if(obj['data']['data_map'][key]['accounts'][i]['account']['id']==-1)
			{
				var id = obj['data']['data_map'][key]['accounts'][i]['account']['avatar'].split('/')[3].split('_')[0];
				obj['data']['data_map'][key]['accounts'][i]['account']['id']=id;
			}
		}
				
	}
	
	body = JSON.stringify(obj);
 }
 
$done({body});
