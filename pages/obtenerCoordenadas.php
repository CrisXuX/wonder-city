<!--
	@author danielquisbert.info@gmail.com [Daniel Quisbert]
	inspirated modify template:
	ARaynorDesign  http://www.araynordesign.co.uk 
-->
<div class="sidebar_container">
	<div class="sidebar">
		<div class="sidebar_item">
		<form action="" method="get" name="f1">
			<h2>Datos de su Coordenada</h2>
			<h3>Longitud:</h3>
			<!--<input type="text" size="15" maxlength="30" value="" name="campoLongitud"><p>-->
			
			<input name="campolongitud" type="text" value="" size="15" maxlength="30">
			
			<h3>Latitud:</h3>
			<input type="text" size="15" maxlength="30" value="" name="campolatitud"><p>
			
		</form>
		</div><!--close sidebar_item-->
	</div><!--close sidebar-->
	<div class="sidebar">
		<div class="sidebar_item">
			<h2>Latest Update</h2>
			<h3>September 2012</h3>
			<p>
				
			</p>
		</div><!--close sidebar_item-->
	</div><!--close sidebar-->
	
</div><!--close sidebar_container-->

<div id="content">
	<div id="map"></div>
	<script type="text/javascript" src="OpenLayers.js"></script>
	<script type="text/javascript" src="OpenStreetMap.js"></script>
	<script type="text/javascript" src="GeoExt.js"></script>
	<script type="text/javascript" src="viewer.js"></script>
</div><!--close content-->
