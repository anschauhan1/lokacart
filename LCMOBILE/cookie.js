    function setCookie(cname,cvalue,exmins) {
        var d = new Date();
        d.setTime(d.getTime() + (exmins*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


function checkCookie() {
    var user=getCookie("cookie");
    var tokencookie=localStorage.getItem('tokencookie');
    if(user!=tokencookie){
        document.body.style.display='none';
    }
    
}

function delete_cookie( name ) {
    
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  window.location.href='PhoneNo.html';
  localStorage.clear();

}
