/* ********************************************************************* *

/* Accordion FAQs

/* Each FAQ needs an open and closed Title element and an anwer
/* The css title for the closed title needs to be faq-title-closed-x
/* The css title for the open title needs to be faq-title-open-x
/* The css title for the answer needs to be faq-answer-x
/* 		x is the number of the question
/* The closed title needs to be a link with the link just being #


/* ********************************************************************* */

function updateHrefAttr() {
	$('[data-title*="faq-title-"]').each(function() {
		var title = $(this);
		var titleNumber = $(title).attr('data-title').split('-').pop();
		$(title).find('a').attr('href','javascript:faqUpdate('+titleNumber+')');
	});

}

updateHrefAttr();

function faqUpdate($faqNum) {
	console.log($faqNum);
	var questionNumber = $faqNum;
	var titleOpen = $('[data-title*="faq-title-open-"]');
	var titleClosed = $('[data-title*="faq-title-closed-"]');
	var answer = $('[data-title*="faq-answer-"]');
	var thisTitleOpen = $('[data-title*="faq-title-open-'+questionNumber+'"]');
	var thisTitleClosed = $('[data-title*="faq-title-closed-'+questionNumber+'"]');
	var thisAnswer = $('[data-title*="faq-answer-'+questionNumber+'"]');
	console.log(titleClosed);
	$(titleClosed).show();
	$(titleOpen).hide();
	$(answer).hide();
	$(thisTitleOpen).show();
	$(thisTitleClosed).hide();
	$(thisAnswer).show();
}