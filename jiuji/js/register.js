//注册页面切换
function qiehuan(){
	
	var a1=document.querySelector(".a1");
	var a2=document.querySelector(".a2");
	var li1=document.querySelector(".kuaisu");
	var li2=document.querySelector(".zhanghao");
	a1.onclick=function(){
		li1.style.display="block";
		li2.style.display="none"
		a1.style.background="#fff";
		a2.style.background="#ccc";
		
	}
	
	a2.onclick=function(){
		li1.style.display="none";
		li2.style.display="block";
		a2.style.background="#fff";
		a1.style.background="#ccc"
	}
}

qiehuan();

//  getUserMsg(){
//         this.usermsg = localStorage.getItem("usermsg");
//         // console.log(this.usermsg);
//         this.setUserMsg()
//     }
// 	
// setUserMsg(){
//         // 如果是第一次，直接注册，如果不是第一次要判断是否重名
//         if(this.usermsg == null){
//             this.usermsg = [{
//                 user:this.tel.val(),
//                 pass:this.pass.val(),
//                 onoff:0
//             }]
//             this.msg.innerHTML = "";
//         }else{
//             // 不是第一次:获取的同时，转成数组，然后开始判断是否重名
//             this.usermsg = JSON.parse(localStorage.getItem("usermsg"));
//             for(var i=0;i<this.usermsg.length;i++){
//                 if(this.usermsg[i].user == this.tel.val()){
//                     this.msg.html("手机号重复，请重新注册或登录");
//                     return;
//                 }
//             }
//             this.msg.innerHTML = "注册成功,即将跳转登录页面";
//             this.usermsg.push({
//                 user:this.tel.val(),
//                 pass:this.pass.val(),
//                 onoff:0
//             })
//         }
//         localStorage.setItem("usermsg",JSON.stringify(this.usermsg));
//         $(".msg").html("注册成功,2秒后跳转至登录页面");
//         setTimeout(() => {
//             location.href = "../logOn/logOn.html";
//         }, 2000);
//     }