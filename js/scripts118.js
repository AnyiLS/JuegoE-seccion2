const response = 'dercho',
	sound = document.getElementById('input-sound')

const chuloSound = new Audio('imagenes/sonido/correcta.mp3')

let value = ''

function playSound() {
	sound.currentTime = 0
	sound.play()
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
		$('#input5').focus()
	})

	$('#input5').on('input', (e) => {
		if (value.length > 4) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 4) {
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
		$('#input6').focus()
	})

	$('#input6').on('input', (e) => {
		if (value.length > 5) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 5) {
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
	})

	$('#open-reiniciar').on('click', function () {
		for (let i = 0; i < 8; i++) {
			$(`#input${i + 1}`).val('')
		}

		value = ''
	})

	$('#open-enviar').on('click', function () {
		console.log(value)
		if (response === value) {
			$('.chulo').show()
			chuloSound.play();
			setTimeout(() => {
				window.location.href = './index119.html'
			}, 3000)
		} else {
			window.location.href = './index117.html'
		}
	})
})
