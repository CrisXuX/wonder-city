/**
 * @author danielquisbert.info@gmail.com [Daniel Quisbert]
 */

/**
 * @requires OpenLayers/Map.js
 */

"use strict";

var map;

var markers=null;
var lat="";
var long="";
/** 
 * @constructor
 */
function Configuration() {
	
	this.proxy = "/cgi-bin/proxy.cgi?url=";
}

function createMap(conf, protocol) {

        
            
	map = new OpenLayers.Map("map", {
		div : 'map',
		//allOverlays : true,
		maxResolution : 196543.0339,
		//restrictedExtent : extendOsmGoogle(context.bounds),
		units : 'm',
		maxExtent : extendOsmGoogle(),
		numZoomLevels : 20,
		projection : new OpenLayers.Projection("EPSG:900913"),
		displayProjection : new OpenLayers.Projection("EPSG:4326")
	});	
	backgroundMap();
	for (var i = 0; i < map.layers.length; i++) {		
		map.layers[i].setTileSize(new OpenLayers.Size(256, 256));		
	}
	//Forzamos el centrado con el zoom
	map.setCenter(extendOsmGoogle().getCenterLonLat(), 14);	
}

function extendOsmGoogle() {
	var nx = new OpenLayers.Bounds(-7588438.77501, -1864320.6882818, -7582261.7109984, -1861459.0785812);
	return nx;
}

function backgroundMap() {

	map.addLayer(new OpenLayers.Layer.OSM("Mapnik"));
	map.addLayer(new OpenLayers.Layer.OSM("Google-like", ["http://a.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/9/256/${z}/${x}/${y}.png", "http://b.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/9/256/${z}/${x}/${y}.png", "http://c.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/9/256/${z}/${x}/${y}.png"], {
		"tileOptions" : {
			"crossOriginKeyword" : null
		}
	}));
	map.addLayer(new OpenLayers.Layer.OSM("Midnight Commander", ["http://a.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/999/256/${z}/${x}/${y}.png", "http://b.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/999/256/${z}/${x}/${y}.png", "http://c.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/999/256/${z}/${x}/${y}.png"], {
		"tileOptions" : {
			"crossOriginKeyword" : null
		}
	}));
	map.addLayer(new OpenLayers.Layer.Google("Google Streets", {
		type : google.maps.MapTypeId.ROADMAP,
	}));
	map.addLayer(new OpenLayers.Layer.Google("Google Satellite", {
		type : google.maps.MapTypeId.SATELLITE,
	}));
	map.addLayer(new OpenLayers.Layer.Google("Google Hybrid", {
		type : google.maps.MapTypeId.HYBRID,
	}));
	//map.addLayer(new OpenLayers.Layer.OSM.CycleMap("CycleMap"), new OpenLayers.Layer.Google("Google Physical", {
		//type : google.maps.MapTypeId.TERRAIN,
	//}));
	
	markers = new OpenLayers.Layer.Markers( "Markers",{
                displayInLayerSwitcher: false,
                isBaseLayer:false
            } );
	map.addLayer(markers);
}

// main
//init = function() {	
var conf;
conf = new Configuration();
OpenLayers.ProxyHost = conf.proxy;
createMap();

map.addControl(new OpenLayers.Control.LayerSwitcher());
map.addControl(new OpenLayers.Control.MousePosition());

//menu de capas
var sw=0;
var popup=null;
marcaPunto();



function marcaPunto() {
		var tamanio = new OpenLayers.Size(30, 30);
		var offset = new OpenLayers.Pixel(-(tamanio.w / 2), -tamanio.h);
		var iconMarker = new OpenLayers.Icon("images/marker1.png",tamanio,offset);


		var LonLat=new OpenLayers.LonLat(16.16,65.1562	).transform(new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection(map.getProjection()));
		
		map.events.register("click", map, function(e) {
                //markers.destroy();
				if(popup!=null){
					map.removePopup(popup);
				}
                var position = this.events.getMousePosition(e);
                var lonlat = map.getLonLatFromPixel(position);
                var lonlatTransf = lonlat.transform(new OpenLayers.Projection("EPSG:900913"), new OpenLayers.Projection("EPSG:4326"));
              	//alert(lonlatTransf.lon+"  "+lonlatTransf.lat);
                
                LonLat = new OpenLayers.LonLat(lonlatTransf.lon, lonlatTransf.lat).transform(new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection(map.getProjection()))
                
                
        		var marker = new OpenLayers.Marker(LonLat, iconMarker);
                markers.addMarker(marker);
                
                popup=new OpenLayers.Popup.FramedCloud("Popup", new OpenLayers.LonLat(lonlatTransf.lon,lonlatTransf.lat).transform(new OpenLayers.Projection("EPSG:4326"), // de WGS 1984
				new OpenLayers.Projection("EPSG:900913")), null, "<div style='font-size:11px;'><b>&nbsp;"+"COORDENADA"+"</b><br>"+ "&nbsp;Latitud&nbsp;&nbsp;&nbsp;&nbsp;: " +lonlatTransf.lon+"<br>&nbsp;Longitud &nbsp;: " + lonlatTransf.lat+"</div>", null, true);
                map.addPopup(popup);
                
		        var lon=document.f1.campolongitud;
				lon.value=lonlatTransf.lon;
			
				var lat=document.f1.campolatitud;
				lat.value=lonlatTransf.lat;
		});


}







//};

//window.onload = init;
