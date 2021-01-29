function addCopyrightDate() {
	$('[data-title*="copyright"],[data-title*="copywrite"]').each(function() {
		var source = $(this).html();
		var thisYear = new Date().getFullYear();
		var yearDisplay = { arr:["copyrightdate","copywrite"]:thisYear.toString()}
		var template = Handlebars.compile(source);
		$(this).html(template(yearDisplay));
	});
}
addCopyrightDate();
