    <script>
        var statusmenu = 0;
	function rmenu() {
	    if (statusmenu == 0 ) {
	       $("#menu").transition({ x: -420 },750);
	       statusmenu = 1;
	    } else {
	       $("#menu").transition({ x: 420 },750);
	       statusmenu = 0;
	    }
	}
	function getGet(name) {
	    var s = window.location.search;
	    s = s.match(new RegExp(name + '=([^&=]+)'));
	    return s ? s[1] : false;
	}
	function ShowName(path) {
	       buk = getGet('bukva');
	       if (buk=='') buk = 'a';
	       fff = "/imena/m/"+buk+"/"+path;
	       $("#imena").hide();
	       $('#znach').load(fff);
	}
    </script>
