/**
 * Created by Lete on 2020/7/7.
 * Butterfly在3.4.0版本后去除了jQuery
 * 注意有使用到jQuery，请自行引入
 * 不想用jQuery可自行更改
 */


/*添加图片top*/
// 判断移动端设备
browserRedirect();

function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
        var top_up = "<img class='upj' src='https://cdn.jsdelivr.net/gh/lete114/CDN/Use/up.gif'>";
        /*添加到返回顶部按钮下*/
        document.getElementById("go-up").innerHTML += top_up;
    }
    
}



// 可爱的Title
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '(つェ⊂) 我藏好了哦~~';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '(*´∇｀*) 被你发现啦~~' + OriginTitle;
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});


// 气泡
function qipao() {
    $('#page-header').circleMagic({
        radius: 10,
        density: .2,
        color: 'rgba(255,255,255,.4)',
        clearOffset: 0.99
    });
}!function(a){a.fn.circleMagic=function(y){var g,x,j,b,u=!0,m=[],v=a.extend({color:"rgba(255,0,0,.5)",radius:10,density:0.3,clearOffset:0.2},y),k=this[0];function w(){u=!(document.body.scrollTop>x)}function z(){g=k.clientWidth,x=k.clientHeight,k.height=x+"px",j.width=g,j.height=x}function p(){if(u){for(var c in b.clearRect(0,0,g,x),m){m[c].draw()}}requestAnimationFrame(p)}function q(){var c=this;function d(){c.pos.x=Math.random()*g,c.pos.y=x+100*Math.random(),c.alpha=0.1+Math.random()*v.clearOffset,c.scale=0.1+0.3*Math.random(),c.speed=Math.random(),"random"===v.color?c.color="rgba("+Math.floor(255*Math.random())+", "+Math.floor(0*Math.random())+", "+Math.floor(0*Math.random())+", "+Math.random().toPrecision(2)+")":c.color=v.color}c.pos={},d(),this.draw=function(){c.alpha<=0&&d(),c.pos.y-=c.speed,c.alpha-=0.0005,b.beginPath(),b.arc(c.pos.x,c.pos.y,c.scale*v.radius,0,2*Math.PI,!1),b.fillStyle=c.color,b.fill(),b.closePath()}}!function(){g=k.offsetWidth,x=k.offsetHeight,function(){var e=document.createElement("canvas");e.id="canvas",e.style.top=0,e.style.zIndex=0,e.style.position="absolute",k.appendChild(e),e.parentElement.style.overflow="hidden"}(),(j=document.getElementById("canvas")).width=g,j.height=x,b=j.getContext("2d");for(var c=0;c<g*v.density;c++){var d=new q;m.push(d)}p()}(),window.addEventListener("scroll",w,!1),window.addEventListener("resize",z,!1)}}(jQuery);
qipao()

var sUserAgent = navigator.userAgent.toLowerCase();
var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
var bIsMidp = sUserAgent.match(/midp/i) == "midp";
var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
var bIsAndroid = sUserAgent.match(/android/i) == "android";
var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
    // 判断 header里是否存在full_page
    if($("#page-header").hasClass("full_page")){
      // 插入<video>
      var html = "<video id='video' muted loop autoplay style='height: 100%;width: 100%;object-fit: cover;'></video>";
      document.getElementsByClassName("full_page")[0].innerHTML += html;
      // 随机数
      var randomNum = Math.floor((Math.random() * 15)+1);
      // 获取 <video>
      var video = document.getElementById('video');
      // 插入视频(m3u8)
      var videoSrc = 'https://cdn.jsdelivr.net/gh/lete114/CDN2/video/'+randomNum+'.m3u8';
      if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
          video.play();
        });
      }
    }
}else{
  // 判断 header里是否存在full_page
  if($("#page-header").hasClass("full_page")){
    // 插入<video>
    var html = "<video id='video' muted loop autoplay style='height: 100%;width: 100%;object-fit: cover;'></video>";
    document.getElementsByClassName("full_page")[0].innerHTML += html;
    // 随机数
    var randomNum = Math.floor((Math.random() * 6)+1);
    // 获取 <video>
    var video = document.getElementById('video');
    // 插入视频(m3u8)
    var videoSrc = 'https://cdn.jsdelivr.net/gh/lete114/CDN2/video/mobile/'+randomNum+'.m3u8';
    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
      });
    }
  }
}


// 设置页脚博主
/*$(document).ready(function(e) {
    // 自己的请自行更改
    var since = 2020;
    var name = 'Lete乐特';
    var now = new Date();
    var nowYear = now.getFullYear();
    since = since == nowYear?since:since+" - "+nowYear;
    $('.copyright').html('©'+since+' <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> '+name);
});*/


(function(){function t(){i(),a()}function i(){document.addEventListener("mousemove",o),document.addEventListener("touchmove",e),document.addEventListener("touchstart",e),window.addEventListener("resize",n)}function n(t){d=window.innerWidth,window.innerHeight}function e(t){if(t.touches.length>0)for(var i=0;i<t.touches.length;i++)s(t.touches[i].clientX,t.touches[i].clientY,r[Math.floor(Math.random()*r.length)])}function o(t){u.x=t.clientX,u.y=t.clientY,s(u.x,u.y,r[Math.floor(Math.random()*r.length)])}function s(t,i,n){var e=new l;e.init(t,i,n),f.push(e)}function h(){for(var t=0;t<f.length;t++)f[t].update();for(t=f.length-1;t>=0;t--)f[t].lifeSpan<0&&(f[t].die(),f.splice(t,1))}function a(){requestAnimationFrame(a),h()}function l(){this.character="*",this.lifeSpan=120,this.initialStyles={position:"fixed",top:"0",display:"block",pointerEvents:"none","z-index":"10000000",fontSize:"20px","will-change":"transform"},this.init=function(t,i,n){this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/2),y:1},this.position={x:t-10,y:i-20},this.initialStyles.color=n,console.log(n),this.element=document.createElement("span"),this.element.innerHTML=this.character,c(this.element,this.initialStyles),this.update(),document.body.appendChild(this.element)},this.update=function(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.lifeSpan--,this.element.style.transform="translate3d("+this.position.x+"px,"+this.position.y+"px,0) scale("+this.lifeSpan/120+")"},this.die=function(){this.element.parentNode.removeChild(this.element)}}function c(t,i){for(var n in i)t.style[n]=i[n]}var r=["#D61C59","#E7D84B","#1B8798"],d=window.innerWidth,u=(window.innerHeight,{x:d/2,y:d/2}),f=[];t()})();