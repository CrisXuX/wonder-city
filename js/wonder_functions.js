function changeContent(nameContent){
	var nc = nameContent+'.php';
	$("#site_content").load("pages/"+nc);	
	$(document).ready(function(){
		removeCSS();
		switch (nameContent){
			case "inicio":
				$('#m1').addClass('current');
			break;				
			case "visualizador":
				$('#m2').addClass('current');
			break;
			case "publicarLugar":
				$('#m3').addClass('current');
			break;
			case "obtenerCoordenadas":
				$('#m4').addClass('current');
			break;
			case "compartir":
				$('#m5').addClass('current');
			break;
			case "contacto":
				$('#m6').addClass('current');
			break;			
		}		
	});		
}
function removeCSS(){
	for(var i=1;i<=6;i++){
		$("#m"+i).removeClass('current');
	}
		
}
