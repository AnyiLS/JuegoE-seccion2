$(document).ready(() => {
    $('#solp5 path').css('fill', '#f4f4f4')
    $('#solp9 path').css('fill', '#f4f4f4')
	$('#solp1').on('mouseover', () => {
        $('#solp1 .cls-50').css('fill', '#002068')
		$('#mapa1').show()
	})

	$('#solp1').on('mouseleave', () => {
	    $('#solp1 .cls-50').css('fill', '#f4f4f4')
		$('#mapa1').hide()
	})

    $('#solp').on('mouseover', () => {
        $('#solp .cls-50').css('fill', '#002068')
		$('#mapa9').show()
	})

	$('#solp').on('mouseleave', () => {
	    $('#solp .cls-50').css('fill', '#f4f4f4')
		$('#mapa9').hide()
	})

    $('#solp2').on('mouseover', () => {
        $('#solp2 .cls-29').css('fill', '#0460a9')
		$('#mapa2').show()
	})

	$('#solp2').on('mouseleave', () => {
	    $('#solp2 .cls-29').css('fill', '#f4f4f4')
		$('#mapa2').hide()
	})

    $('#solp4').on('mouseover', () => {
        $('#solp4 .cls-53').css('fill', '#ffc100')
		$('#mapa7').show()
	})

	$('#solp4').on('mouseleave', () => {
	    $('#solp4 .cls-53').css('fill', '#f4f4f4')
		$('#mapa7').hide()
	})

    $('#solp5').on('mouseover', () => {
        $('#solp5 .cls-54').css('fill', '#ff585d')
		$('#mapa4').show()
	})

	$('#solp5').on('mouseleave', () => {
	    $('#solp5 .cls-54').css('fill', '#f4f4f4')
		$('#mapa4').hide()
	})

    $('#solp6').on('mouseover', () => {
        $('#solp6 .cls-36').css('fill', '#ff775e')
		$('#mapa5').show()
	})

	$('#solp6').on('mouseleave', () => {
	    $('#solp6 .cls-36').css('fill', '#f4f4f4')
		$('#mapa5').hide()
	})

    $('#solp7').on('mouseover', () => {
        $('#solp7 .cls-28').css('fill', '#8f2dde')
		$('#mapa6').show()
	})

	$('#solp7').on('mouseleave', () => {
	    $('#solp7 .cls-28').css('fill', '#f4f4f4')
		$('#mapa6').hide()
	})

    $('#solp8').on('mouseover', () => {
        $('#solp8 .cls-32').css('fill', '#50e2d0')
		$('#mapa8').show()
	})

	$('#solp8').on('mouseleave', () => {
	    $('#solp8 .cls-32').css('fill', '#f4f4f4')
		$('#mapa8').hide()
	})

    $('#solp9').on('mouseover', () => {
        $('#solp9 path').removeAttr('style')
		$('#mapa3').show()
	})

	$('#solp9').on('mouseleave', () => {
	    $('#solp9 path').css('fill', '#f4f4f4')
		$('#mapa3').hide()
	})
})
