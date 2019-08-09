function Banner(){
			this.img=document.querySelectorAll(".fan img");
			this.left=document.getElementById("left");
			this.right=document.getElementById("right");
			
			this.index=0;//初始索引,默认第一张图片为0;
			this.init()
		}
		
		Banner.prototype.init = function(){
						var that = this;
						this.right.onclick = function(){
		//					触发事件时
		//					3.计算要显示的图片的索引
							that.rightChangeIndex()
						}
						this.left.onclick = function(){
		//					触发事件时
		//					3.计算要显示的图片的索引
							that.leftChangeIndex()
						}
					}
		
		Banner.prototype.rightChangeIndex=function(){
				if(this.index==this.img.length-1){
					this.index=0;
				}else{
					this.index++;
				}
				//根据索引显示图片
				this.display()
				
		}
		
		Banner.prototype.leftChangeIndex=function(){
			if(this.index==0){
				this.index=this.img.length-1;
			}else{
				this.index--;
			}
			this.display();
		}
		Banner.prototype.display=function(){
			for(var i=0;i<this.img.length;i++){
				this.img[i].style.zIndex=1;
			}
			this.img[this.index].style.zIndex=2;
		}
		new Banner()
		
		