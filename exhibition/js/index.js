
//首页数据处理

$(function(){
	if(!dataOn){
		//轮播图
        $('#slider_index').append('<li data-target="#carousel1" data-slide-to="0" class="active"></li>');
        $('#slider_index').append('<li data-target="#carousel1" data-slide-to="1"></li>');
        $('#slider_index').append('<li data-target="#carousel1" data-slide-to="2"></li>');

		$('#slider_image').append('<div class="item active"><img src="img/photo1.jpg" alt="..."></div>');
        $('#slider_image').append('<div class="item"><img src="img/photo1.jpg" alt="..."></div>');
        $('#slider_image').append('<div class="item"><img src="img/photo1.jpg" alt="..."></div>');
        //当代书画
        $('#contemporary_painting').append('<div class="col-lg-4"> <figure class="effect-roxy">' +
            ' 	<img src="img/part2-wudayu.jpg" alt="part2-wudayu.jpg" />' +
            ' <figcaption><h2>吴大羽绘画 </h2>' +
            ' <p>吴大羽，宜兴宜城镇人，我国杰出的油画家，艺术教育家，中国现代画事业的奠基人之一。</p>' +
            ' <a href="ddsh-details1.html">View more</a> </figcaption></figure>' +
            '</div>');
        $('#contemporary_painting').append('<div class="col-lg-4"> <figure class="effect-roxy">' +
            ' 	<img src="img/part2-sajinte.jpg" alt="part2-wudayu.jpg" />' +
            ' <figcaption><h2>萨金特绘画</span></h2>' +
            ' <p>约翰·辛格·萨金特John Singer Sargent(1856—1925)美国画家。生于意大利佛罗伦萨。 1874年在卡罗律斯—迪朗的巴黎画室学画，受印象派影响。</p>' +
            ' <a href="ddsh-details1.html">View more</a> </figcaption></figure>' +
            '</div>');
        $('#contemporary_painting').append('<div class="col-lg-4"> <figure class="effect-roxy">' +
            ' 	<img src="img/part2-songyonghong.jpg" alt="part2-wudayu.jpg" />' +
            ' <figcaption><h2>宋永红绘画 </h2>' +
            ' <p>吴宋永红1966年生于河北省曲阳县1988年毕业于浙江美术学院版画系（现为中国美术学院）。</p>' +
            ' <a href="ddsh-details1.html">View more</a> </figcaption></figure>' +
            '</div>');


		return;
	}
	//获取幻灯片数据
	$.ajax({
		url:baseUrl+'/api/sliderImage/list',
		async:false,
		method:'get',
		dataType:'json',
		success:function(response){
			if(response.code === 200){
				setSliderImage(response.data);
			}else{
				layer.alert('加载轮播图数据失败', {icon: 2});
			}
		},
		error:function(){
            layer.alert('加载轮播图数据失败', {icon: 2});
		}
	});
	//获取书法数据
	$.ajax({
		url:baseUrl+'/api/calligraphy?pageNum=1&pageSize=6',
		method:'get',
		dataType:'json',
		success:function(response){
			if(response.code === 200){
				setCalligraphyData(response.data);
			}else{
                layer.alert('加载书法数据失败', {icon: 2});
			}
		},
		error:function(){
            layer.alert('加载书法数据失败', {icon: 2});
		}
	});
	//获取绘画数据
	$.ajax({
		url:baseUrl+'/api/painting?pageNum=1&limit=3',
		method:'get',
		dataType:'json',
		success:function(response){
			if(response.code === 200){
				setPaintingData(response.data);
			}else{
                layer.alert('加载绘画数据失败', {icon: 2});
			}
		},
		error:function(){
            layer.alert('加载绘画数据失败', {icon: 2});
		}
	});
	//获取展厅数据
	$.ajax({
		url:baseUrl+'/api/article?type=1&pageNum=1&limit=5',
		method:'get',
		dataType:'json',
		success:function(response){
			if(response.code === 200){
				setGalleryData(response.data);
			}else{
                layer.alert('获取展厅数据失败', {icon: 2});
			}
		},
		error:function(){
            layer.alert('获取展厅数据失败', {icon: 2});
		}
	});

	//获取竞拍数据
    $.ajax({
        url:baseUrl+'/api/auction?offset=0&limit=8',
        method:'get',
        dataType:'json',
        success:function(response){
            if(response.code === 200){
                setAuctionData(response.data);
            }else{
                layer.alert('获取竞拍数据失败', {icon: 2});
            }
        },
        error:function(){
            layer.alert('获取竞拍数据失败', {icon: 2});
        }
    });

    //获取新闻数据
    $.ajax({
        url:baseUrl+'/api/article?type=2&pageNum=1&limit=2',
        method:'get',
        dataType:'json',
        success:function(response){
            if(response.code === 200){
                setNewsData(response.data);
            }else{
                layer.alert('获取新闻数据失败', {icon: 2});
            }
        },
        error:function(){
            layer.alert('获取新闻数据失败', {icon: 2});
        }
    });
});
/**
 * 置幻灯片数据
 */
function setSliderImage(sliderList){
	for(let i = 0; i < sliderList.length; i++){
		if(i === 0 ){
            $('#slider_index').append('<li data-target="#carousel1" data-slide-to="'+i+'" class="active"></li>');
            $('#slider_image').append('<div class="item active"><img src="'+sliderList[i].path+'" ></div>');
		}else{
            $('#slider_index').append('<li data-target="#carousel1" data-slide-to="'+i+'"></li>');
            $('#slider_image').append('<div class="item"><img src="'+sliderList[i].path+'" ></div>');
		}
	}
}
/**
 * 置书法数据
 */
 
function setCalligraphyData(dataList){
	 $('[name="calligraphy_title"]').each(function(index, obj){
	 	$(obj).html(dataList[index].title);
	 	$($('[name="calligraphy_path"]')[index]).attr('src', dataList[index].path);
	 	$($('[name="calligraphy_description"]')[index]).html(dataList[index].description);
	 	//$($('[name="calligraphy_url"]')[index]).html('/calligraphy?id='+dataList[index].id);
	 });
}
 
/**
 * 置当代书画数据
 */
 
function setPaintingData(dataList){
    for(let i = 0; i < dataList.length; i++){
        $('#contemporary_painting').append('<div class="col-lg-4"> <figure class="effect-roxy">' +
            ' 	<img src="'+dataList[i].path+'" alt="part2-wudayu.jpg" />' +
            ' <figcaption><h2>'+dataList[i].title+'</h2>' +
            ' <p>'+dataList[i].description+'</p>' +
            ' <a href="/painting/'+dataList[i].id+'">View more</a> </figcaption></figure>' +
            '</div>');
    }
}

/**
 * 置展厅数据
 */
 
function setGalleryData(dataList){
    $('[name="gallery_title"]').each(function(index, obj){
        $(obj).html(dataList[index].title);
        $($('[name="gallery_thumb"]')[index]).attr('src', dataList[index].path);
        $($('[name="gallery_description"]')[index]).html(dataList[index].description);
        //$($('[name="gallery_url"]')[index]).html('/article?id='+dataList[index].id);
    });
}
/**
 * 竞拍数据
 */
function setAuctionData(datas){
	
}

/**
 * 置新闻数据
 */
 
function setNewsData(dataList){
	 
}