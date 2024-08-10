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

		playSound()
		$('#input5').focus()
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

		playSound()
		$('#input6').focus()
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
		$('#input7').focus()
	})

	$('#input7').on('input', (e) => {
		value = value
			.split('')
			.map((item, index) => {
				if (index === 6) {
					return e.target.value
				} else {
					return item
				}
			})
			.join('')

		playSound()
		$('#input8').focus()
	})

	$('#input8').on('input', (e) => {
		value = value
			.split('')
			.map((item, index) => {
				if (index === 7) {
					return e.target.value
				} else {
					return item
				}
			})
			.join('')

		playSound()
		$('#input9').focus()
	})

	$('#input9').on('input', (e) => {
		value = value
			.split('')
			.map((item, index) => {
				if (index === 8) {
					return e.target.value
				} else {
					return item
				}
			})
			.join('')

		playSound()
		$('#input10').focus()
	})

	$('#input10').on('input', (e) => {
		value = value
			.split('')
			.map((item, index) => {
				if (index === 9) {
					return e.target.value
				} else {
					return item
				}
			})
			.join('')

		playSound()
		$('#input11').focus()
	})

	$('#input11').on('input', (e) => {
		value = value
			.split('')
			.map((item, index) => {
				if (index === 10) {
					return e.target.value
				} else {
					return item
				}
			})
			.join('')

		playSound()
		$('#input12').focus()
	})

	$('#input12').on('input', (e) => {
		value = value
			.split('')
			.map((item, index) => {
				if (index === 11) {
					return e.target.value
				} else {
					return item
				}
			})
			.join('')

		playSound()
		$('#input13').focus()
	})

	$('#input13').on('input', (e) => {
		value = value
			.split('')
			.map((item, index) => {
				if (index === 12) {
					return e.target.value
				} else {
					return item
				}
			})
			.join('')

		playSound()
		$('#input14').focus()
	})

	$('#input14').on('input', (e) => {
		value = value
			.split('')
			.map((item, index) => {
				if (index === 13) {
					return e.target.value
				} else {
					return item
				}
			})
			.join('')

		playSound()
		$('#input15').focus()
	})

	$('#input15').on('input', (e) => {
		value = value
			.split('')
			.map((item, index) => {
				if (index === 14) {
					return e.target.value
				} else {
					return item
				}
			})
			.join('')

		playSound()
		$('#input16').focus()
	})

	$('#input16').on('input', (e) => {
		value = value
			.split('')
			.map((item, index) => {
				if (index === 15) {
					return e.target.value
				} else {
					return item
				}
			})
			.join('')

		playSound()
	})

	$('#open-reiniciar').on('click', function () {
		for (let i = 0; i < 16; i++) {
			$(`#input${i + 1}`).val('')
		}

		value = ''
	})
})
