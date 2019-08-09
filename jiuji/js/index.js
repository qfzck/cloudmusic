//二级菜单
				$("#fenlei").mouseover(function(){
						$("#banner>.left").show()
						$(".sanji").show()
					})
			// 三级菜单
				$(".li1").mouseover(function(){
					$(".sanji>.ul1").show()
				})
				
				$(".li1").mouseout(function(){
					$(".sanji>.ul1").hide()
				})
				
				$(".li2").mouseover(function(){
					$(".sanji>.ul2").show()
				})
				
				$(".li2").mouseout(function(){
					$(".sanji>.ul2").hide()
				})
				
				$(".li3").mouseover(function(){
					$(".sanji>.ul3").show()
				})
				
				$(".li3").mouseout(function(){
					$(".sanji>.ul3").hide()
				})
				
				$(".li4").mouseover(function(){
					$(".sanji>.ul4").show()
				})
				
				$(".li4").mouseout(function(){
					$(".sanji>.ul4").hide()
				})
				
				$(".li5").mouseover(function(){
					$(".sanji>.ul5").show()
				})
				
				$(".li5").mouseout(function(){
					$(".sanji>.ul5").hide()
				})
				
				$(".li6").mouseover(function(){
					$(".sanji>.ul6").show()
				})
				
				$(".li6").mouseout(function(){
					$(".sanji>.ul6").hide()
				})
		
				$(".sanji").mouseout(function(){
					$(".sanji").hide()
					$(".left").hide()
					
				})
		
				// 切换楼层消失隐藏事件
				$(".tuji").scroll(function(){
					var t = $(document).scrollTop()
					console.log(t)
					if(t<500){
						$("#btns").hide()
					}else{
						$("#btns").show()
					}
				})
		
		
		
		//依次滑入效果
				$(document).ready(function(){
				    var mainNewsList = $("#main_news_list li");
				    var deleteArr = $("#main_news_list b");
				    var bottomPx = 30;
				    $.each(mainNewsList, function(i,ele) {
				        var that = $(this);
				        setTimeout(function(){
				            that.addClass('main_news_active');
				        },150*i);
				    });
				    $.each(deleteArr, function(i,ele) {
				        $(this).click(function(){
				            bottomPx += 90;
				            $("#main_news_list").animate({bottom:bottomPx+"px"});
				            var mainNewsListOli = $(this).parents("li");
				            mainNewsListOli.addClass('main_news_heightActive');
				            setTimeout(function(){
				                mainNewsListOli.remove();
				            },500);
				        });
				    });
				});
				
				
		//切换楼层
		$("#btns").children("p").click(function(){
			$(document).scrollTop($(".floor").eq($(this).index()).offset().top);
			//获取点击的索引
			var index = $(this).index();
			//根据索引获取楼层
			var iNOWF = $(".floor").eq(index);
			//计算楼层到顶部的距离
			var t = iNOWF.offset().top;
			//把位置给滚动条
			$("html").stop().animate({
				scrollTop:t
			})
		})
		
// 						$("#btn-top").click(function(){
// 							var t = $(document).scrollTop()
// 							console.log(t)
// 							setTimeout(function(){
// 								t==0;
// 							},1000)
// 				})