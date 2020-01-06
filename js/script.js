/*Click*/
!function(h){h("a").click(function(t){var e=h(this);0==e.find(".ink").length&&e.append("<span class='ink'></span>");var i=e.find(".ink");if(i.removeClass("animate"),!i.height()&&!i.width()){var a=Math.max(e.outerWidth(),e.outerHeight());i.css({height:a,width:a})}var n=t.pageX-e.offset().left-i.width()/2,s=t.pageY-e.offset().top-i.height()/2;i.css({top:s+"px",left:n+"px"}).addClass("animate")})}(jQuery); 
!function(h){h(".btn").click(function(t){var e=h(this);0==e.find(".ink").length&&e.append("<span class='ink'></span>");var i=e.find(".ink");if(i.removeClass("animate"),!i.height()&&!i.width()){var a=Math.max(e.outerWidth(),e.outerHeight());i.css({height:a,width:a})}var n=t.pageX-e.offset().left-i.width()/2,s=t.pageY-e.offset().top-i.height()/2;i.css({top:s+"px",left:n+"px"}).addClass("animate")})}(jQuery); 
/*Icon*/
function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
/*Add*/
function bgChange(bg)
{
document.body.style.background=bg;
}
