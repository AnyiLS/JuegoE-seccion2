const response = 'sgno',
	sound = document.getElementById('input-sound')

const chuloSound = new Audio('imagenes/sonido/correcta.mp3')

let value = ''

function playSound() {
	sound.currentTime = 0
	sound.play()
}

function valdiar() {
	console.log(value)
	if (value.length === 4) {
		return true
	} else {
		return false
	}
}

$(document).ready(function () {
	$('#input1').on('input', (e) => {
		if (value.length > 0) {
		value = value
			.split('')
			.map((item, index) => {
				if (index === 0) {
					return e.target.value
				} else {
					return item
				}
			})
			.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input2').focus()
	})

	$('#input2').on('input', (e) => {
		if (value.length > 1) {
		value = value
			.split('')
			.map((item, index) => {
				if (index === 1) {
					return e.target.value
				} else {
					return item
				}
			})
			.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input3').focus()
	})

	$('#input3').on('input', (e) => {
		if (value.length > 2) {
		value = value
			.split('')
			.map((item, index) => {
				if (index === 2) {
					return e.target.value
				} else {
					return item
				}
			})
			.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input4').focus()
	})

	$('#input4').on('input', (e) => {
		if (value.length > 3) {
		value = value
			.split('')
			.map((item, index) => {
				if (index === 3) {
					return e.target.value
				} else {
					return item
				}
			})
			.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
	})

	$('#open-reiniciar').on('click', function () {
		for (let i = 0; i < 4; i++) {
			$(`#input${i + 1}`).val('')
		}

		value = ''
		$('#open-enviar').css('background', '#dfd9d978')
	})

	$('#open-enviar').on('click', function () {
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
			if (response === value) {
				$('.chulo').show()
				const respuestas = JSON.parse(
					localStorage.getItem('respuestas')
				)
				respuestas.push('slider120')
				localStorage.setItem('respuestas', JSON.stringify(respuestas))
				chuloSound.play()
				setTimeout(() => {
					window.location.href = './index121.html'
				}, 3000)
			} else {
				localStorage.setItem('error', 1)
				window.location.href = './index117.html'
			}
		}
	})
})
