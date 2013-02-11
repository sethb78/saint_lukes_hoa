   $(document).ready(function () {
    $('#login form').hide()

    $('a[href="' + this.location.pathname + '"]').parent().addClass('active');
    var $parent=$('a[href="' + this.location.pathname + '"]').parent()
 
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-37984687-1']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

 $('#topline-link').append($('<i class="icon-chevron-down"></i>'));

$('#login #topline-link').click(function(){
    $('#login i').toggleClass('icon-chevron-up').toggleClass('icon-chevron-down')
    $('#login form').toggle('slow');
});

$('#login a:first').click(function(event){
  event.preventDefault();
});


$('#document_meeting_date_input').hide()

});

