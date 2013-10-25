<!--
	@author danielquisbert.info@gmail.com [Daniel Quisbert]
	inspirated modify template:
	ARaynorDesign  http://www.araynordesign.co.uk 
-->

<?php
include ("src/functions.php");
include ("src/functionsDB.php");
?>

<html lang="es" xml:lang="es" xmlns="http://www.w3.org/1999/xhtml" dir="ltr">
	<head>
		<title><?php getTitle(); ?></title>
		<meta name="description" content="<?php getDescription(); ?>" />		
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<!--meta http-equiv="X-UA-Compatible" content="IE=9" /-->
		<link rel="stylesheet" type="text/css" href="css/style.css" />
		<!--link rel="stylesheet" type="text/css" href="viewer.css" /-->
		<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
		<!--script type="text/javascript" src="js/jquery.min.js"></script-->
		<script type="text/javascript" src="js/image_slide.js"></script>
		<script type="text/javascript" src="js/wonder_functions.js"></script>
		
		
		<script type="text/javascript" src="OpenLayers.js"></script>
		<script type="text/javascript" src="OpenStreetMap.js"></script>
		<!--script type="text/javascript" src="GeoExt.js"></script-->
		<script type="text/javascript" src="viewer.js"></script>
		<script type="text/javascript" src="http://extjs.cachefly.net/ext-3.4.0/adapter/ext/ext-base.js"></script>
		<script type="text/javascript" src="http://extjs.cachefly.net/ext-3.4.0/ext-all.js"></script>
		<script src="http://maps.google.com/maps/api/js?v=3&amp;sensor=false"></script>
	</head>
	<body>
		<div id="main">						
			<div id='header'>	
				<script type="text/javascript">$("#header").load('pages/header.php');</script>
			</div><						
			<div id="menubar">
				<script type="text/javascript">$("#menubar").load('pages/menuBar.php');</script>
			</div>
			<div id="site_content">
				<script type="text/javascript">$("#site_content").load('pages/inicio.php');</script>								
			</div>
		</div>
		<div id="footer">
			<script type="text/javascript">$("#footer").load('pages/footer.php');</script>			
		</div>
		
	</body>
</html>
