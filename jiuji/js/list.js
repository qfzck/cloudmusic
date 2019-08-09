class GoodsList{
			constructor() {
			    this.cont = document.getElementById("cont");
				this.url = "http://localhost/1905/jiuji/html/goods.json";
				this.init();
				this.addEvent();
			}
			//添加到购物车
			addEvent(){
				
				var that = this;
				this.cont.onclick = function(eve){
					
					var e = eve || window.event;
					var t = e.target || e.srcElement;
					if(t.className == "addCar"){
						//获取当前商品ID
						that.id = t.parentNode.getAttribute("index");
						//存localstorage
						that.setDate();
						
					}
				}
			}
// 			
			//发送数据
			setDate(){
				this.goods = localStorage.getItem("goods");
				console.log(this.goods)
				if(this.goods){
					this.goods = JSON.parse(this.goods);
					
					var onoff = true;
					//存localStorage
					for(var i=0;i<this.goods.length;i++){
						//判断是老的
						if(this.goods[i].id==this.id){
							this.goods[i].num++;
							onoff = false;
						}
					}
					//判断是新的
					if(onoff){
						this.goods.push({
							id:this.id,
							num:1
						})
					}
				}else{
					this.goods = [{
						id:this.id,
						num:1,
						
					}]
				}
				//将数据设置回去
				localStorage.setItem("goods",JSON.stringify(this.goods))
			}
			init(){
				var that = this;
				ajaxPost(this.url,function(res){
					that.res = JSON.parse(res);
					
					that.display()
				})
			}
			display(){
				var str = "";
				for(var i=0;i<this.res.length;i++){
					str += `<div class="box" index="${this.res[i].goodsId}">
						<img src ="${this.res[i].src}" alt="">
						<p>${this.res[i].name}</p>
						<span>${this.res[i].price}</span>
						<em class="addCar">加入购物车</em>
					</div>`;
					
				}
				this.cont.innerHTML = str;
			}
		}
		
		new GoodsList();
		
		
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
				