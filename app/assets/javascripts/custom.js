   $(document).ready(function () {
        $('a[href="' + this.location.pathname + '"]').parent().addClass('active');
        var $parent=$('a[href="' + this.location.pathname + '"]').parent()
    });

     var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-37984687-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
