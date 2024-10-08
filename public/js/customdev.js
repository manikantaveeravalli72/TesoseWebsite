/* ACJS Deferral Code - START */
window.addEventListener("load",function(){var e=document.querySelectorAll("a[target='_blank'][href^='http'],[target='_blank'][href^='https']");e.forEach(function(e){e.setAttribute("rel","noopener noreferrer")})});var canonicalUrl="",domain=location.hostname;console.log(domain);var isEditMode=!1,currUrl=document.referrer;if(null!=document.querySelector("link[rel='canonical']")&&(canonicalUrl=document.querySelector("link[rel='canonical']").getAttribute("href")),currUrl.includes("/editor.html/")&&(isEditMode=!0),self===top||isEditMode||""!=domain&&""!=canonicalUrl&&canonicalUrl.includes(domain))console.log("ACJS deferred");else{var css="body { display: none !important }",head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");head.appendChild(style),style.type="text/css",style.styleSheet?style.styleSheet.cssText=css:style.appendChild(document.createTextNode(css)),console.log("ACJS running")}
/* ACJS Deferral Code - END */

/* HEADER NOTIFICATION JS START */
$(document).ready(function(){
	if($(".calendar-img").length){
		console.log("inside calendar ready function");
		var resData = null;
		var categoryHTML ="";
		var currenthost = window.location.hostname.toLowerCase();
	//	var widgetHeading = "NEWS";
		//$("#idnotiftitle").text(widgetHeading);
		var counter = 0;
		var itemCount = 5;
		var isPublicHost = false;
//		var queryURL ="/bin/infosys/newsheader?rootPath=";
        var queryURL ="/content/infosys-web/en/resource-type-servlets/infosys-news-header-servlet.infosys-news.header?rootPath=";
		var queryURLPathParam=["/content/infosys-web/en/newsroom/press-releases",
							"/content/infosys-web/en/newsroom/events",
							"/content/infosys-web/en/infosys-stories"];
		var queryURLTitleParam=["News","Events","Infosys Stories"];
		
		//Check if the url is public for shortening the pathname
		if(currenthost == "www.infosys.com" || currenthost == "test.infosysapps.com" || currenthost == "infystage.infosysapps.com")
		{
			isPublicHost = true;
		}
		console.log("Is Public host:" + isPublicHost);
		for(var i=0;i<3;i++){
           // alert("enter in loop");
			var jsonData = {}
			var jsonData = {}
			var jsonObject = JSON.stringify(jsonData);
			$.ajax({
				async: false,
				contentType: "application/json; charset=utf-8",
				url: queryURL+queryURLPathParam[i],
				data: jsonObject,
				dataType: "json",
				processData: true,
				success: function (responseData) {
					var title = queryURLTitleParam[counter];
					var catHTML = '<div class="calendar-wrap calendar-box'+[counter+1]+'">'+ '<div class="calendar-heading"><span>'+title+'</span></div>';
					resData = JSON.stringify(responseData);
					var itemObjs = JSON.parse(resData);
					if(isPublicHost)
					{
						itemObjs[0].itemPath = itemObjs[0].itemPath.replace("/content/infosys-web/en","");
					}
					catHTML +='<div class="calendar-para"><ul>'
					catHTML += '<li>'+'<span>'+itemObjs[0].articleMediaCategory+'</span>' +'<a href="'+ itemObjs[0].itemPath +'" title="'+ itemObjs[0].itemTitle +'" class="calendar-link">'+ itemObjs[0].itemTitle +'</a>'+'</li>'
					catHTML +='</ul>'
					catHTML +='<div class="moreText">'
					catHTML +='<ul>'
					for(var item=1;item<itemObjs.length;item++)
					{
						if(isPublicHost)
						{
							itemObjs[item].itemPath = itemObjs[item].itemPath.replace("/content/infosys-web/en","");
						}
						catHTML += '<li>'+'<span>'+itemObjs[item].articleMediaCategory+'</span>' +'<a href="'+ itemObjs[item].itemPath +'" title="'+ itemObjs[item].itemTitle +'" class="calendar-link">'+ itemObjs[item].itemTitle +'</a>'+'</li>'
					}
					catHTML +='</ul></div>'
					catHTML += '<button class="textButton">Show More <i class="fa fa-plus" aria-hidden="true"></i></button>';
				    catHTML+='</div></div>';
					//categoryHTML+=catHTML;
					$('.calendar-box').append(catHTML);
					counter++;
				},
				error: function (xhr, ajaxOptions, thrownError) {
					 console.log("error");
				}
			});
		}
		
		
		
		if ($(window).width() > 767) {
			$(".calendar-img").click(function(){
				console.log("inside calendar click function")
				$(".calendar-full-wrapper").fadeToggle();
			});
		} else {
			$(".calendar-img").click(function(){
				console.log("inside calendar click function")
				$(".calendar-full-wrapper").fadeIn();				
				$('body').css('overflow', 'hidden');
			});
			 
		}
		
		$(".calendar-close").click(function() {
			$(".calendar-full-wrapper").fadeOut();
			$('body').removeAttr('style');
		});
	}
});
 
$(document).on('click', '.textButton', function () {   
	if($(this).text().trim()=="Show More")
	{
		$(this).prev().css("display","block");
		$(this).html("Show Less <i class='fa fa-minus' aria-hidden='true'></i>");
	}
	else
	{
		$(this).prev().css("display","none");
		$(this).html("Show More <i class='fa fa-plus' aria-hidden='true'></i>");
	}
});
/* HEADER NOTIFICATION JS ENDS*/