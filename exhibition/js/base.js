//运行模式,local 本地模式 本地服务器,remote 远程模式,远程服务器
var dataOn = true;
var isLogin = false;
var mode = 'local';
var baseUrl;
if(mode === 'local'){
	baseUrl = 'http://localhost:8080'
}else{
	baseUrl = '';
}