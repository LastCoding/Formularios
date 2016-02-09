function showAndHideTextarea(id,id2,id3,id4) {
var show = document.getElementById(id);
var hide = document.getElementById(id2);
var hide2 = document.getElementById(id3);
var hide3 = document.getElementById(id4);

show.style.display = 'block';
hide.style.display  = 'none';
hide2.style.display  = 'none';
hide3.style.display  = 'none';

}

$(document).ready(function()	{	
$("#text").fadeOut();

	$('#helpButton a').click(function(e) {
		$("#text").css("visibility", "show");
		e.preventDefault(); // prevé que s'envagi a la url .../#
		var $li1 = $('#li1').find('.active');
		var $li2 = $('#li2').find('.active');
		var $li3 = $('#li3').find('.active');
		var $li4 = $('#li4').find('.active');
		if ($li1.hasClass('active')) {
			$("#text").text("No pots introduir més de 100 caràcters, però, pots moure't amb les fletxes, i premer les tecles d'esborrar");
			$("#text").append("<br>i suprimir un cop has arribat al màxim.");
			$('#text').fadeIn(200).delay(10000).fadeOut("slow");
		}
		if (($li2.hasClass('active'))) {
			$("#text").text("No pots introduir caràcters fora dels permesos, però, pots moure't amb les fletxes  cap a la dreta i l'esquerra,");
			$("#text").append("<br> i premer les tecles d'esborrar i suprimir.");
			$('#text').fadeIn(200).delay(10000).fadeOut("slow");
		}
		if ($li3.hasClass('active')) {
			$("#text").text("Si no introdueixes un format de DNI correcte, no pots escriure.");
			$("#text").append("<br> Exemple: 12345678A");
			$('#text').fadeIn(200).delay(10000).fadeOut("slow");
		}
		if (($li4.hasClass('active'))) {
			$("#text").text("Si no introdueixes un format de telèfon correcte, no es vàlid.");
			$("#text").append("<br> Exemple: +34 123 45 67 89");
			$('#text').fadeIn(200).delay(5000).fadeOut("slow");
		}
	});

	$('ul.navigation li a').click(function(e) {
        e.preventDefault();
        console.log($(this).closest('ul').find('.active'));
        $(this).closest('ul').find('.active').removeClass('active');
        $(this).parent().addClass('active');
    });

	var bolTemp = false;
	$('#ta').keydown(function(e) {
		if ($(this).val().length <= 100) {
			left = 100 - $(this).val().length;
			$("#counter").css("border", "5px solid #000");

			if (left < 26) {
				$("#counter").css("color", "red");
			} else if (left < 51) {
				$("#counter").css("color", "blue");
			} else if (left < 76) {
				$("#counter").css("color", "green");
			}
			else {
				$("#counter").css("color", "#522F2F");
			}
			$("#counter").html("Et quedan <strong>"+  left+"</strong> caràcters.");
			return true;
		}
		if (e.which == 8 || e.which == 46 || e.which == 37 || e.which == 39) {
			return true;
		} else if($(this).val().length > 100) {	
			return false;
		}
	});

	$('#ta2').keydown (function(e) {
		
		if (e.which == 8 || e.which == 46 || e.which == 37 || e.which == 39) {
			$("#result").css("border", "none");
			$("#result").empty();
			return true;
		}else if (e.which < 65 || e.which > 90) {
			$("#result").css("color", "red");
			$("#result").html("Aquest no es un caràcter vàlid.");
			$("#result").css("border", "5px solid #000");
			return false;
		} else {
			$("#result").css("border", "none");
			$("#result").empty();
		}
		
	});

	$('#ta3').keydown (function(e) {
		if (e.which == 8 || e.which == 46 || e.which == 37 || e.which == 39) {
				$("#result2").css("border", "none");
				$("#result2").empty();
				return true;
			}
		if ($(this).val().length>8) {
				return false;
			}
	})

	// he tingut de reforçar-ho amb 2 keydowns perque amb 1 dona errors, proba a comentar-ho,
	// fes varies proves, i veurás el que et dic.

	$('#ta3').keydown (function(e) {
		if ($(this).val().length==8) {
		bolTemp = true;
		} else {
			$("#result2").css("border", "none");
			$("#result2").empty();
			
			if (e.which == 8 || e.which == 46 || e.which == 37 || e.which == 39) {
				$("#result2").css("border", "none");
				$("#result2").empty();
				return true;
			}
			if (bolTemp && (e.which > 65 || e.which < 90)) {
				bolTemp = false;
				$("#result2").css("border", "none");
				$("#result2").empty();
				return true;
			}

			if ( (e.which < 96 || e.which > 105) && (e.which < 48 || e.which > 57) ) {
				$("#result2").css("color", "red");
				$("#result2").html("Aquest no es un caràcter vàlid.");
				$("#result2").css("border", "5px solid #000");
				return false;				
			}
			
			if ($(this).val().length>8) {
				$("#result2").html("Un DNI no pot tenir més de 9 caràcters.");
				$("#result2").css("border", "5px solid #000");
				return false;
			}
		}
	});

	$('#ta3').keyup (function(e) {
		
			var val = $('#ta3').val();
			var search = val.search(/^[0-9]{8}[A-Z]{1}$/i);
			if (search == 0) {
				$("#result2").css("color", "green");
				$("#result2").html("Aquest format s'ha escrit bé.");
				return false;
			} else {
				$("#result2").css("color", "red");
				$("#result2").html("Aquest no es un bon format per al DNI.");
				$("#result2").css("border", "5px solid #000");
			}
	});

	$('#ta4').keyup (function(e) {

		var val = $('#ta4').val();
		var search = val.search(/^([+][0-9]{2}\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}\s[0-9]{2})$/i);
		if (search == 0) {
			$("#result3").css("color", "green");
			$("#result3").html("Aquest format s'ha escrit bé.");
		} else {
			$("#result3").css("color", "red");
			$("#result3").html("No es un bon format per al teléfon.");
			$("#result3").css("border", "5px solid #000");
		}
	});
})