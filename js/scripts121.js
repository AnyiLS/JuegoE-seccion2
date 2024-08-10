const response = 'izquierdo',
	sound = document.getElementById('input-sound')

let value = ''

function playSound() {
	sound.currentTime = 0
	sound.play()
}

$(document).ready(function () {
	$('#input1').on('input', (e) => {
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

		playSound()

		$('#input2').focus()
	})

	$('#input2').on('input', (e) => {
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

		playSound()
		$('#input3').focus()
	})

	$('#input3').on('input', (e) => {
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

		playSound()
		$('#input4').focus()
	})

	$('#input4').on('input', (e) => {
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
			$('#input5').focus()
		playSound()
	})

	$('#input5').on('input', (e) => {
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
			$('#input6').focus()
		playSound()
	})

	$('#input6').on('input', (e) => {
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
		playSound()
	})

	$('#open-reiniciar').on('click', function () {
		for (let i = 0; i < 6; i++) {
			$(`#input${i + 1}`).val('')
		}

		value = ''
	})
})
