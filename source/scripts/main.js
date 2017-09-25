console.log("Hello World!");


//resizing the navgation bar 
function make_smaller(){
	var distance = pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
	var node = document.getElementById('bar');
	if(distance >30){
		node.classList.add("smaller");
		// console.info(node);
	}else{
		node.classList.remove("smaller");
	}
	
}

window.addEventListener("scroll", make_smaller);
//source: https://codepen.io/lili2311/pen/dJjuL


//smooth scrolling 
//source: http://web.archive.org/web/20140213105950/http://itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

//get current loc
function get_current_loc(){
	if(window.pageYOffset)
		return window.pageYOffset;
	if(document.documentElement&& document.documentElement.scrollTop){
		return (document.documentElement.scrollTop);
	}
	if(document.body){
		return document.body.scrollTop;
	}
}

//wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function(){

	var curr = document.getElementById('history');
	console.info("curr is "+ curr);
	var ret = curr.offsetTop;
	var next = curr; 
		while(next && next != document.body){
			
			next = next.offsetParent;
			ret += next.offsetTop;
	}
	var history = document.getElementById('hhist');
	console.info("li is "+history);
	console.info('hist');
	history.addEventListener("click", function() {
		  		var i = get_current_loc();
		  		// var dist = (i < ret)?ret-i:i-ret;
		  		// var spd = dist/20;
				var interval = setInterval(function() {
			  	// window.scrollTo(0, i);
			  	if(Math.abs(i-ret) <= 100){
			  		window.scrollTo(0, ret);
			  		clearInterval(interval);
			  	}
			  	if(i < ret){
					i += 80;
					window.scrollTo(0, i);
					if (i >= ret){ 
						window.scrollTo(0, ret);
						clearInterval(interval);}
				}else {
					i -= 80;
					window.scrollTo(0, i);
					if(i <= ret){
						window.scrollTo(0, ret);
					 clearInterval(interval);
					}
				}
		
		}, 30);
		})
   	});

document.addEventListener("DOMContentLoaded", function(){
	var curr1 = document.getElementById('home');
	console.info("curr is "+ curr1);
	var ret1 = curr1.offsetTop;
	var next1 = curr1; 
		while(next1 && next1 != document.body){
			
			next1 = next1.offsetParent;
			ret1 += next1.offsetTop;
	}
	var home = document.getElementById('hhome');
	console.info("li is "+home);
	console.info(home);
	home.addEventListener("click", function() {
		  		var ii = get_current_loc();
		  		// var dist = (i < ret)?ret-i:i-ret;
		  		// var spd = dist/20;
				var interval1 = setInterval(function() {
			  	// window.scrollTo(0, i);
			  	if(Math.abs(ii-ret1) <= 100){
			  		window.scrollTo(0, ret1);
			  		clearInterval(interval1);
			  	}
			  	if(ii < ret1){
					ii += 80;
					window.scrollTo(0, ii);
					if (ii >= ret1){
						window.scrollTo(0, ret1);
					 clearInterval(interval1);
					}
				}else {
					ii -= 80;
					window.scrollTo(0, ii);
					if(ii <= ret1){
						window.scrollTo(0, ret1);
					 clearInterval(interval1);
					}
				}
		
		}, 30);
		})
   	});

document.addEventListener("DOMContentLoaded", function(){
	var curr2 = document.getElementById('abou');
	console.info("curr about is "+ curr2);
	var ret2 = curr2.offsetTop;
	var next2 = curr2; 
		while(next2 && next2 != document.body){
			
			next2 = next2.offsetParent;
			ret2 += next2.offsetTop;
			console.info("node is"+next2);
	}
	var about = document.getElementById('aabou');
	console.info("li for about is "+ about);
	console.info('about');
	about.addEventListener("click", function() {
		  		var iii = get_current_loc();
		  		console.log(iii);
		  		// var dist = (i < ret)?ret-i:i-ret;
		  		// var spd = dist/20;
				var interval2 = setInterval(function() {
			  	// window.scrollTo(0, i);
			  	if(Math.abs(iii-ret2) <= 100){
			  		window.scrollTo(0, ret2);
			  		console.log("arrive at <100");
			  		clearInterval(interval2);
			  	}
			  	if(iii < ret2){
					iii += 80;
					window.scrollTo(0, iii);
					if (iii >= ret2){
						window.scrollTo(0, ret2);
					 clearInterval(interval2);
					}
				}else {
					iii -= 80;
					window.scrollTo(0, iii);
					if(iii <= ret2){
						window.scrollTo(0, ret2);
					 clearInterval(interval2);
					}
				}
		
		}, 30);
		})
   	});


//carousel with button
var count = 0;
var slides;
document.addEventListener("DOMContentLoaded", function(){
	slides = document.querySelectorAll('#slides .slide');
	console.info("slides is "+slides);
	//get next slide
	console.info(document.getElementById('right_icon'));
	console.info(slides.length);
	var ricon = document.getElementById('right_icon');
	console.info("icon "+ricon);
	ricon.addEventListener("click", function(){
		next_slide();
		console.info("slideeee is "+slides[count])
		});


	//get left slide 
	var licon = document.getElementById('left_icon');
	console.info("icon "+licon);
	licon.addEventListener("click", function(){
		last_slide();
		console.info("slideeee is "+slides[count])
		});
});

//source:https://codepen.io/NikolaSte/pen/aBzbZR
function next_slide(){
	slides[count].className = 'slide';//update the state 
	count = (count+1)%(slides.length);
	slides[count].classList.add("first");
}

function last_slide(){
	slides[count].className = 'slide';
	console.log("count num is "+count);
	if(count >0){
		count -= 1;
	}
	else {
		count += slides.length;
		count -=1;
		}
	slides[count].classList.add("first");
}

//position indicator
function get_destination(id){
	
	var currr = document.getElementById(id);
	var rett = currr.offsetTop;
	var nextt = currr; 
		while(nextt && nextt != document.body){
			nextt = nextt.offsetParent;
			rett += nextt.offsetTop;
	}
	return rett;

}

document.addEventListener("DOMContentLoaded", function(){


	
	var home_loc = get_destination('home');
	var about_loc = get_destination('abou');
	var history_loc = get_destination('history');
	// console.log("home_loc is "+ home_loc);
	// 	console.log("about_loc is "+ about_loc);
	// 	console.log("his_loc is "+ history_loc);

	var inter = setInterval(function(){
		var curr_loc = get_current_loc();
		// console.log("cuee "+curr_loc );
		var home = document.getElementById('hhome');
		var about = document.getElementById('aabou');
		var history = document.getElementById('hhist');
		if(curr_loc> home_loc&& (curr_loc < about_loc)){
			
			// console.log("enter "+home);
			home.style.color= 'rgb(239, 169, 93)';
			about.style.color= 'white';
			history.style.color='white';
		} 
		else if(curr_loc+10>= about_loc && curr_loc < history_loc){
			
			// console.log("enter "+about);
			about.style.color='rgb(239, 169, 93)';
			home.style.color= 'white';
			history.style.color='white';
		}
		else if(curr_loc >= history_loc){
			
			// console.log("enter "+home);
			history.style.color='rgb(239, 169, 93)';
			home.style.color= 'white';
			about.style.color='white';
		}
	},30);
	

});


//modal
document.addEventListener("DOMContentLoaded", function(){
	var modal = document.getElementById("mmodal");
	var mmodal = document.getElementById("mmmodal");
	var mmmodal = document.getElementById("mmmmodal");
	var img1 = document.getElementById("left");
	var img2 = document.getElementById("middle");
	var img3 = document.getElementById("right");
	var close = document.getElementsByClassName("close")[0];
	var close1 = document.getElementsByClassName("close1")[0];
	var close2 = document.getElementsByClassName("close2")[0];
	console.info(modal+img1+close);

	var video = document.getElementById("spike");
     function stopVideo(){
          video.pause();
          video.currentTime = 0;
     }

	img1.onclick = function(){
		console.log("enter here");
		modal.style.display = "block";
	}

	close.onclick = function(){
		modal.style.display= "none";
		console.log("hit close");
		stopVideo();
	}

	
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	        console.log("hit none");
	    }
	    stopVideo();
	}

	var video1 = document.getElementById("faye");
     function stopVideo1(){
          video1.pause();
          video1.currentTime = 0;
     }

	img2.onclick = function(){
		console.log("enter here");
		mmodal.style.display = "block";
	}

	close1.onclick = function(){
		mmodal.style.display= "none";
		stopVideo1();
	}

	
	window.onclick = function(event) {
	    if (event.target == mmodal) {
	        mmodal.style.display = "none";
	        stopVideo1();
	    }
	}
	var video2 = document.getElementById("ed");
     function stopVideo2(){
          video2.pause();
          video2.currentTime = 0;
     }

	img3.onclick = function(){
		console.log("enter here");
		mmmodal.style.display = "block";
	}

	
	close2.onclick = function(){
		mmmodal.style.display= "none";
		stopVideo2();
	}

	
	window.onclick = function(event) {
	    if (event.target == mmmodal) {
	        mmmodal.style.display = "none";
	        stopVideo2();
	    }
	}
});

//source: For stoping the video from Stackoverflow https://stackoverflow.com/questions/5958132/javascript-to-stop-html5-video-playback-on-modal-window-close

console.info(document.getElementById("slide"));
console.info(document.getElementById("all"));




