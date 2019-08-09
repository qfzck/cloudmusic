class Car{
				constructor() {
				    this.tbody = document.querySelector("tbody");
					this.url = "http://localhost/1905/jiuji/html/goods.json";
					
					this.init();
					//1.删除:
					this.addEvent();
				}
				addEvent(){
					var that = this;
					this.tbody.onclick = function(){
						if(event.target.className =="del"){
							//2.获取商品得id
							that.id = event.target.parentNode.getAttribute("index");
							//3.删除DOM元素
							event.target.parentNode.remove();
							//4.删除localstorage的数据
							that.setData(function(i){
								that.goods.splice(i,1);
							});
						}
					}
					//8.修改数量:事件委托绑定输入框的事件
					this.tbody.oninput = function(){
						if(event.target.className == "changeNum"){
							//9.存储修改商品的id
							that.id = event.target.parentNode.parentNode.getAttribute("index");
							//10.修改localstorage的数据
							that.setData(function(i){
								that.goods[i].num = event.target.value;
							});
						}
					}
				}
				setData(callback){
					//5.遍历数据,查找相同id
					for(var i=0;i<this.goods.length;i++){
						if(this.goods[i].id == this.id){
							//6.再执行回调函数
							callback(i);
						}
					}
					//7.再存回去
					localStorage.setItem("goods",JSON.stringify(this.goods));
				}
				init(){
					var that = this;
					ajaxPost(this.url,function(res){
						that.res = JSON.parse(res)
						that.getData();
					})
				}
				getData(){
					this.goods =localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")):[];
					this.display();
				}
				display(){
					console.log(1)
					var str ="";
					for(var i=0;i<this.res.length;i++){
						for(var j=0;j<this.goods.length;j++){
							if(this.res[i].goodsId == this.goods[j].id){
								str += `<tr index="${this.res[i].goodsId}">
		                                <td><img src="${this.res[i].src}" alt=""></td>
		                                <td>${this.res[i].name}</td>
		                                <td>${this.res[i].price}</td>
		                                <td><input type="number" value="${this.goods[j].num}" min=1 class="changeNum"></td>
		                                <td class="del">点击删除</td>
		                            </tr>` 
									
									}
							   }
							}
					this.tbody.innerHTML = str;
						}
				}
			new Car();
			
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
					