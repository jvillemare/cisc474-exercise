$(function(){
	$('#go').on('click', function(event) {
		event.preventDefault();
		$('#whats-your-name').text($('#fname').val() + ' ' + $('#lname').val());
		$('#jumbo').removeClass('d-none');
		return false;
	});
});
