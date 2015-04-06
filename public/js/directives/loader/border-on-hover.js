app.directive('borderOnHover', function(){
	return {
		restrict: "A",
		link: function(scope, element, attrs) {
			element.on('mouseenter', function() {
				element.addClass('border');
			});
			element.on('mouseleave', function() {
				element.removeClass('border');
			});
		}
	};
});