<!DOCTYPE html>
<html lang="ca">
<head>
	<meta charset="utf-8">
	<title>NFC - Afegir producte</title>
	<meta name="description" content="La millor botiga de la xarxa.">
	<meta name="author" content="Grup TDIW-D10">

	<script src="../resources/js/jquery-1.11.3.min.js"></script>

	<link type="text/css" href="../resources/css/style.css" rel="stylesheet">
	<script src="../resources/js/scripts.js"></script>
  
	<link rel="shortcut icon" href="../resources/img/favicon.ico" type="image/x-icon">
	<link rel="icon" href="../resources/img/favicon.ico" type="image/x-icon">

	<script> 
	$(function(){
		$("#header").load("../view/header.php"); 
		$("#footer").load("../view/footer.html");
	});
	</script> 
</head>

<body>

<header id="header"></header>

<section id="container">

<h1>Afegeix un producte</h1>

<form id="afegir_producte" action="../model/afegir_producte.php" method="post" enctype="multipart/form-data">
	<p>Nom del producte: <input type="text" name="nom_producte" placeholder="Nom producte"></p>
	<p>Categoria:

	<?php foreach($categories as $categoria){
						$id = $categoria["Id_categoria"];
						$nom = $categoria["Nom_categoria"];
						?>
	 <input type="radio" name="categoria" value=<?php echo "\"".$id."\""; ?> ><?php echo $nom; ?> 
	 <?php } ?>

	</p>
	<p>Stock: <input type="number" min="0" name="stock" placeholder="0"></p>
	<p>Descripció del producte: </br> <input type="text" name="descripcio_producte" class="descripcio" placeholder="Entra una descripció del producte."></p>
	<p>PVP: <input type="number" min="0" name="pvp_producte" placeholder="0"></p>
	<p>EAN: <input type="text" name="EAN_producte" placeholder="XXXXXXXXXXXXX"></p>
	<p>Imatge: <input type="file" name="img_producte" id="img_producte"></p>
	<p><input type="submit" value="Insertar" id="Insertar"></p>
</form>
</section>

<footer id="footer"></footer>

</body>
</html>