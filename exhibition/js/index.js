
//首页数据处理

$(function(){
	if(!dataOn){
        $('#slider_index').append('<li data-target="#carousel1" data-slide-to="0" class="active"></li>');
        $('#slider_index').append('<li data-target="#carousel1" data-slide-to="0"></li>');
        $('#slider_index').append('<li data-target="#carousel1" data-slide-to="0"></li>');

		$('#slider_image').append('<div class="item active"><img src="img/photo1.jpg" alt="..."></div>');
        $('#slider_image').append('<div class="item"><img src="img/photo1.jpg" alt="..."></div>');
        $('#slider_image').append('<div class="item"><img src="img/photo1.jpg" alt="..."></div>');
		return;
	}
	//获取幻灯片数据
	$.ajax({
		url:baseUrl+'/api/sliderImage/list',
		method:'get',
		dataType:'json',
		success:function(response){
			if(response.status === 200){
				setSliderImage(response.data);
			}else{
				layer.alert('加载幻灯片数据失败', {icon: 2});
			}
		},
		error:function(){
			
		}
	});
	//获取传奇书画数据
	$.ajax({
		url:baseUrl+'/api/image?type=1&offset=0&limit=6',
		method:'get',
		dataType:'json',
		success:function(response){
			if(response.status === 200){
				setCqshData(response.data);
			}else{
				
			}
		},
		error:function(){
			
		}
	});
	//获取当代书画数据
	$.ajax({
		url:baseUrl+'/api/image?type=2&offset=0&limit=3',
		method:'get',
		dataType:'json',
		success:function(response){
			if(response.status === 200){
				setDdshData(response.data);
			}else{
				
			}
		},
		error:function(){
			
		}
	});
	//获取展厅数据
	$.ajax({
		url:baseUrl+'/api/gallery?offset=0&limit=5',
		method:'get',
		dataType:'json',
		success:function(response){
			if(response.status === 200){
				setGalleryData(response.data);
			}else{
				
			}
		},
		error:function(){
			
		}
	});
	//获取展厅数据
	$.ajax({
		url:baseUrl+'/api/gallery?offset=0&limit=5',
		method:'get',
		dataType:'json',
		success:function(response){
			if(response.status === 200){
				setGalleryData(response.data);
			}else{
				
			}
		},
		error:function(){
			
		}
	});
	//获取竞拍数据
	$.ajax({
		url:baseUrl+'/api/auction?offset=0&limit=8',
		method:'get',
		dataType:'json',
		success:function(response){
			if(response.status === 200){
				setAuctionData(response.data);
			}else{
				
			}
		},
		error:function(){
			
		}
	});
});
/**
 * 置幻灯片数据
 */
function setSliderImage(images){
	
}
/**
 * 置传奇书画数据
 */
 
function setCqshData(datas){
	 
}
 
/**
 * 置当代书画数据
 */
 
function setDdshData(datas){
	 
}

/**
 * 置展厅数据
 */
 
function setGalleryData(datas){
	 
}
/**
 * 竞拍数据
 */
function setAuctionData(datas){
	
}

/**
 * 置新闻数据
 */
 
function setNewsData(datas){
	 
}