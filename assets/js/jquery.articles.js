(function($) {
	/*
		jquery.articles.js v1.1
		Last updated: 04 July 2011

		Created by Lyndel Thomas
		http://ryndel.com

		Licensed under a Creative Commons Attribution-Non-Commercial 3.0 Unported License
		http://creativecommons.org/licenses/by-nc/3.0/
	*/

	$.fn.getArticles = function(options) {

		$.fn.getArticles.defaults = {
			folder: "content",
			filePrefix: "article",
			maxArticles: 5,
			slideIn: true,
			slideDuration: 750,
			emptyContainer: true
			
		};

		var o = $.extend({}, $.fn.getArticles.defaults, options);

		return this.each(function() {
			var c = $(this);
			
			if (o.emptyContainer) {
				c.empty();
			}
			
			
			for( i=0; i < o.maxArticles; i++){
				$('<div class="article" id="article-'+ i +'"></div>').appendTo(c);
				var articleFile = o.folder +'/article-'+ i +'.html'
				if(articleFile != "") {
					// alert("yes");
					$("#article-"+i).load(articleFile);
				}
				
				// $("#article-"+i).load(o.folder +'/article-'+ i +'.html');
				
				// $('p').css("color", "#f00");
			}
			
			

					
		});
	};
})(jQuery);