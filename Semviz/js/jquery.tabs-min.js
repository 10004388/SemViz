(function(e){e.fn.tabs=function(t){t=e.extend({mode:"fade",anchors:false,duration:400,"class":"selected"},t);var n=e("html, body"),r=window.location.hash;this.each(function(){var i=e(this),s=i.find("li:first a"),o=null,u=null;if(true===t.anchors&&""!==r&&i.find('a[data-toggle="tab"]'))s=i.find('a[href="'+r+'"]');s.parent().addClass(t.class);o=s.attr("href");e(o).show().siblings().hide();i.on("click",'a[data-toggle="tab"]',function(r){u=e(this).attr("href");if(u!=o){switch(t.mode){case"slide":e(u).siblings().slideUp();e(u).delay(t.duration).slideDown();break;default:e(u).fadeIn(t.duration).siblings().hide();break}e(this).parent().addClass(t.class).siblings().removeClass(t.class);o=u}if(t.anchors)setTimeout(function(){n.scrollTop(0,0)},1);else r.preventDefault()})});return this}})(jQuery)