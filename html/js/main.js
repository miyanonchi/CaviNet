var BASE_PATH = "/cgi-bin/";
var xhr;

function XMLHttpRequestCreate(){
    try {
    return new XMLHttpRequest();
    } catch(e) {}
    try {
    return new ActiveXObject('MSXML2.XMLHTTP.6.0');
    } catch(e) {}
    try {
    return new ActiveXObject('MSXML2.XMLHTTP.3.0');
    } catch(e) {}
    try {
    return new ActiveXObject('MSXML2.XMLHTTP');
    } catch(e) {}
    
    return null;
}
