// https://www.toptal.com/developers/keycode

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

jQuery(document).ready(function($) {

	$("body").on('keydown', function(e) {
		var senhaAtual   = $("#senhaAtualNumero");
		var senhaNormal  = $("#senhaNormal");
		var senhaP   = $("#senhaP");
		var senhaB   = $("#senhaB");
		var senhaD   = $("#senhaD");
		var senhaT   = $("#senhaT");
		var senhaR   = $("#senhaR");
		var senhaS   = $("#senhaS");
		var ultimaSenha  = $("#ultimaSenhaNumero");
		var audioChamada = $("#audioChamada");

// FILA NORMAL.

		// Incrementa fila normal.
        if(e.keyCode == 39){
			ultimaSenha.html(senhaAtual.html());
			if(parseInt(senhaNormal.val())+1 > 999){
				senha = 1;
			} else{	
				senha = parseInt(senhaNormal.val()) + 1;
			}
			senhaAtual.html(pad(senha, 3));
			senhaNormal.val(pad(senha, 3));
			audioChamada.trigger("play");
        }

		// Decrementa fila normal.
		if(e.keyCode == 37){
			if(parseInt(senhaNormal.val())-1 < 0){
				senha = 0;
			} else{
				senha = parseInt(senhaNormal.val()) - 1;
			}
			senhaAtual.html(pad(senha, 3));
			senhaNormal.val(pad(senha, 3));
        }
		
		// Pressionar 'E' para digitar a nova senha fila N.
		if(e.keyCode == 78){
			senha = window.prompt('Digite a nova senha fila N!')
			if (!isNaN(senha)){
				if (senha > 999){
					window.alert(`Você digitou "${senha}", a nova senha deve ser menor que 1000!`)
				} else if (senha < 0){
					window.alert(`Você digitou "${senha}", a nova senha deve ser maior que 0!`)
				} else{
					senhaAtual.html(pad(senha, 3));
					senhaNormal.val(pad(senha, 3));
				}
			} else{
				window.alert(`Você digitou "${senha}", a nova senha deve ser um número!`)
			}
		}

// FILA PRIORITÁRIA.

		// Incrementa fila prioritária.
		if(e.keyCode == 38){
			ultimaSenha.html(senhaAtual.html());
			if(parseInt(senhaP.val().replace("P",""))+1 > 999){
				senha = 1;
			} else{
				senha = parseInt(senhaP.val().replace("P","")) + 1;
			}
			senhaAtual.html("P" + pad(senha, 3));
			senhaP.val("P" + pad(senha, 3));
			audioChamada.trigger("play");
			}
		// Decrementa fila prioritária.
		if(e.keyCode == 40){
			ultimaSenha.html(senhaAtual.html());
			if(parseInt(senhaP.val().replace("P",""))-1 < 0){
				senha = 0;
			} else{
				senha = parseInt(senhaP.val().replace("P","")) - 1;
			}
			senhaAtual.html("P" + pad(senha, 3));
			senhaP.val("P" + pad(senha, 3));
			}

		// Pressionar 'E' para digitar a nova senha fila P.
		if(e.keyCode == 77){
			senha = window.prompt('Digite a nova senha fila P!')
			if (!isNaN(senha)){
				if (senha > 999){
					window.alert(`Você digitou "${senha}", a nova senha deve ser menor que 1000!`);
				} else if (senha < 0){
					window.alert(`Você digitou "${senha}", a nova senha deve ser maior que 0!`);
				} else{							
					senhaAtual.html("P" + pad(senha, 3));
					senhaP.val("P" + pad(senha, 3));					
				}
			} else{
				window.alert(`Você digitou "${senha}", a nova senha deve ser um número!`);
			}
		}

// Visualização.

			// Muda visualização para fila normal.
			if(e.keyCode == 79){
				senha = parseInt(senhaNormal.val());
				senhaAtual.html(pad(senha, 3));
				document.getElementById('myID').style.backgroundColor = '#0000FF';
				}

			// Muda visualização para fila prioritária.
			if(e.keyCode == 80){
				senha = parseInt(senhaP.val().replace("P",""));
				senhaAtual.html("P" + pad(senha, 3));
				document.getElementById('myID').style.backgroundColor = '#046825';
				}

			// Toca campainha.
			if(e.keyCode == 13){
					audioChamada.trigger("play");
				}
			if(senhaAtual.html() == senhaP.val()){
				document.getElementById('myID').style.backgroundColor = '#d377bd';
			} else{
				document.getElementById('myID').style.backgroundColor = '#0000CD';
			}
				//window.alert(`Teste1: ${senhaAtual.html()}`);
    });
});