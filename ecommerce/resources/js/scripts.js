
function buscar() {

	var searchEditText = document.getElementById("search");
	var textSearch = searchEditText.value;

	if(textSearch != ""){

		alert("Has buscat: "+searchEditText.value);
	}else{
		alert("Si us plau, introdueix un element de cerca");
	}
}

function nextImageSlider(){

	var imageBanner1 = document.getElementById("image_banner_1");
	var imageBanner2 = document.getElementById("image_banner_2");
	var imageBanner3 = document.getElementById("image_banner_3");

	if(imageBanner1 != null){
		imageBanner1.src = "resources/img/banner2.png";
		imageBanner1.id = "image_banner_2";
		imageBanner1.href ="http://www.google.es"
    }else if(imageBanner2 != null){
    	imageBanner2.src = "resources/img/banner3.png";
    	imageBanner2.id = "image_banner_3";
    	imageBanner2.href ="http://www.google.es"
    }else if(imageBanner3 != null){
    	imageBanner3.src = "resources/img/banner1.png";
    	imageBanner3.id = "image_banner_1";
    	imageBanner3.href ="http://www.google.es"
    }

 
    setTimeout(nextImageSlider, 5000);
}

function sliderLeft(){

    var imageBanner1 = document.getElementById("image_banner_1");
    var imageBanner2 = document.getElementById("image_banner_2");
    var imageBanner3 = document.getElementById("image_banner_3");

    if(imageBanner1 != null){
        imageBanner1.src = "resources/img/banner3.png";
        imageBanner1.id = "image_banner_3";
        imageBanner1.link("http://www.google.es");
    }else if(imageBanner2 != null){
        imageBanner2.src = "resources/img/banner1.png";
        imageBanner2.id = "image_banner_1";
        imageBanner2.link("http://www.google.es");
    }else if(imageBanner3 != null){
        imageBanner3.src = "resources/img/banner2.png";
        imageBanner3.id = "image_banner_2";
        imageBanner3.link("http://www.google.es");
    }
}

function sliderRight(){

    var imageBanner1 = document.getElementById("image_banner_1");
    var imageBanner2 = document.getElementById("image_banner_2");
    var imageBanner3 = document.getElementById("image_banner_3");

    if(imageBanner1 != null){
        imageBanner1.src = "resources/img/banner2.png";
        imageBanner1.id = "image_banner_2";
        imageBanner1.href ="http://www.google.es"
    }else if(imageBanner2 != null){
        imageBanner2.src = "resources/img/banner3.png";
        imageBanner2.id = "image_banner_3";
        imageBanner2.href ="http://www.google.es"
    }else if(imageBanner3 != null){
        imageBanner3.src = "resources/img/banner1.png";
        imageBanner3.id = "image_banner_1";
        imageBanner3.href ="http://www.google.es"
    }
}

function enter(e){
    if(e.keyCode == 13){
        buscar();
    }
    return false;
}

function openCategory(){
    var query = window.location.search.substring(1); //S'agafa l'adre??a
    var array = query.split("="); //Separa l'adre??a on es trobi un "=" d'aquesta manera separem el link?id= de la id que es passa com a parametre
    var id = array[1]; //La separaci?? la fa amb arrays, aix?? que la id es troba en la segona posici??, ??s a dir, la 1.
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET","./category.php?id="+id, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState !== 4) { return; }
    document.getElementById("container").innerHTML=xmlhttp.responseText;
    };
    

    return false;
}

function logout(){

    document.cookie = 'isLogged' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    location.reload();
}

function afegir(id_producte, nom_producte, stock){

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET","../model/afegir_producte_cistella.php?id_producte="+id_producte+"&nom_producte="+nom_producte+"&stock="+stock, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState !== 4) { return; }
    document.getElementById("carrito_container").innerHTML=xmlhttp.responseText;
    return false;
    };
}

function borrar(id_producte){

    borrarCarrito(id_producte);
}


function borrarCarrito(id_producte){

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET","../model/borrar_producte_cistella.php?id_producte="+id_producte, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState !== 4) { return; }
    document.getElementById("carrito_container").innerHTML=xmlhttp.responseText;
    refrescarResumCarrito();    
    };
}

function refrescarResumCarrito(){

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttpAux = new XMLHttpRequest();
    }else { // code for IE6, IE5
        xmlhttpAux = new ActiveXObject("Microsoft.XMLHTTP");
    }
   
    xmlhttpAux.open("GET","../model/refrescar_carrito.php", true);
    xmlhttpAux.send();

    xmlhttpAux.onreadystatechange = function(){
    if (xmlhttpAux.readyState !== 4) { return; }
    document.getElementById("container").innerHTML=xmlhttpAux.responseText;
    };
}
