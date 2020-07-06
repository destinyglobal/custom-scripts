/* This is going to display the element with additional name
 * fields and clone them when there are multiple tickets
 * on a single order. This will only need to be tweaked if 
 * there are products added to the order form other than tickets.
 */


$(document).on('cfpt:cart-updated', function () {
    $('[data-title*="step-2-row"]').hide();
	$.when(removeExistingClones()).then(cloneTicketNames()).then(renumberCustomFields());
});

// first we remove any existing cloned name elements so we start fresh when the cart is updated.
function removeExistingClones () {
    $('div .cloned-name').remove();
    $('[data-title*="cf-additional-names-section"]').hide();
    return true;
}

// now we will clone the element.
function cloneTicketNames () {
    var ticketsInCart = $('#cfAR > input[name="purchase[product_ids][]"]:checked').length - 2; // This will only count products that are not a bump. If there are other products added to the order or multiple bumps this will probably have to be tweaked. 
    var container = $('[data-title*="cf-additional-names-section"]');
    var n = ticketsInCart;
    var name = $('[data-title="cf-additional-names"]');
    var customType = $('input[name="custom_type"]').attr('data-custom-type');
    
    for (var i = 0; i < n; i++) {
      name.clone(name).addClass('cloned-name').insertAfter(name);
    }

    if (ticketsInCart >= 0) {
    	$('[data-title*="cf-additional-names-section"]').attr('data-title', 'cf-additional-names-section step-2-row');
    	// console.log('there is more than one ticket on the order');
    } else {
    	$('[data-title*="cf-additional-names-section"]').attr('data-title', 'cf-additional-names-section');
    }
    return true;
}

// and now we need to renumber the elements so they can be submitted with Apptrends. 
function renumberCustomFields () {
    var numerOfClones = $('div .cloned-name').length;
    $('div [data-title="cf-additional-names"] > input').each(function (newId) {
        $(this).removeAttr('data-custom-type');
        $(this).attr('data-custom-type', 'nametag-'+newId);
    });
    $('div [data-title="cf-additional-names"]').each(function (newId) {
        $(this).removeAttr('id');
        $(this).attr('id', 'tmp_input_nametag1'+newId);
    });
}

