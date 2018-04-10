//运行模式,local 本地模式 本地服务器,remote 远程模式,远程服务器
var getData = true;
var mode = 'local';
var url;
if(mode === 'local'){
	url = 'http://localhost:8080/'
}else{
	url = '';
}