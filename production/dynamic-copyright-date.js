$(document).ready(function() {
	$('[data-title*="copyright"]').each(function() {
		var source = $(this).html();
		var thisYear = new Date().getFullYear();
		var yearDisplay = copyrightdate:thisYear.toString();
		var template = Handlebars.compile(source);
		$(this).html(template(yearDisplay));
	});
});
