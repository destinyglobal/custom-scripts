/************************************************/
/*												*/
/*  Use url params to fill custom input types   */
/*												*/  
/************************************************/

$(document).ready(function () {
	var replaceEmailString = "";
	var replaceFNameString = "";
	var replaceLNameString = "";
	var urlEmail = getURLParameter("lmts_referral_email");
	var urlFName = getURLParameter("lmts_referral_fname");
	var urlLName = getURLParameter("lmts_referral_lname");
	if (urlEmail.trim().length > 0 && urlEmail != "null") {
		replaceEmailString = decodeURIComponent(urlEmail).replace(/\+/g,' ');
	}
	if (urlFName.trim().length > 0 && urlFName != "null") {
		replaceFNameString = decodeURIComponent(urlFName).replace(/\+/g,' ');
	}
	if (urlLName.trim().length > 0 && urlLName != "null") {
		replaceLNameString = decodeURIComponent(urlLName).replace(/\+/g,' ');
	}
	$('[data-custom-type="lmts_referral_email"]').value(replaceEmailString);
	$('[data-custom-type="lmts_referral_fname"]').value(replaceFNameString);
	$('[data-custom-type="lmts_referral_lname"]').value(replaceLNameString);
});

