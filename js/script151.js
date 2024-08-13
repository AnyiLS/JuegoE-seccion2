$(document).ready(function () {
	// modal 1
	$('.openModal').on('click', () => {
		const selectors = ['slide151-2', 'slide151-3', 'slide151-4', 'slide151-5', 'slide151-6', 'slide151-7']
		$('.modal').css('display', 'block')
		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		localStorage.setItem('slide151-1', 'true')
		$('.boton-play').hide()
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})

	// modal 1 ///////////////////
	$('.openModal1').on('click', () => {
		const selectors = ['slide151-1', 'slide151-3', 'slide151-4', 'slide151-5', 'slide151-6', 'slide151-7']
		$('.modal1').css('display', 'block')
		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		localStorage.setItem('slide151-2', 'true')
		$('.boton-play2').hide()
	})
	// cerra modal 
	$('.closeModal1').on('click', () => {
		$('.modal1').css('display', 'none')
	})

	// modal 2 ///////////////////
	$('.openModal2').on('click', () => {
		const selectors = ['slide151-1', 'slide151-2', 'slide151-4', 'slide151-5', 'slide151-6', 'slide151-7']
		$('.modal2').css('display', 'block')
		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		localStorage.setItem('slide151-3', 'true')
		$('.boton-play3').hide()
	})
	// cerra modal
	$('.closeModal2').on('click', () => {
		$('.modal2').css('display', 'none')
	})

	// modal 3 ///////////////////
	$('.openModal3').on('click', () => {
		const selectors = ['slide151-1', 'slide151-2', 'slide151-3', 'slide151-5', 'slide151-6', 'slide151-7']
		$('.modal3').css('display', 'block')
		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		localStorage.setItem('slide151-4', 'true')
		$('.boton-play4').hide()
	})
	// cerra modal
	$('.closeModal3').on('click', () => {
		$('.modal3').css('display', 'none')
	})

	// modal 4 ///////////////////
	$('.openModal4').on('click', () => {
		const selectors = ['slide151-1', 'slide151-2', 'slide151-3', 'slide151-4', 'slide151-6', 'slide151-7']
		$('.modal4').css('display', 'block')
		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		localStorage.setItem('slide151-5', 'true')
		$('.boton-play5').hide()
	})
	// cerra modal
	$('.closeModal4').on('click', () => {
		$('.modal4').css('display', 'none')
	})

	// modal 5 ///////////////////
	$('.openModal5').on('click', () => {
		const selectors = ['slide151-1', 'slide151-2', 'slide151-3', 'slide151-4', 'slide151-5', 'slide151-7']
		$('.modal5').css('display', 'block')
		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		localStorage.setItem('slide151-6', 'true')
		$('.boton-play6').hide()
	})
	// cerra modal
	$('.closeModal5').on('click', () => {
		$('.modal5').css('display', 'none')
	})

	// modal 5 ///////////////////
	$('.openModal6').on('click', () => {
		const selectors = ['slide151-1', 'slide151-2', 'slide151-3', 'slide151-4', 'slide151-5', 'slide151-6']
		$('.modal6').css('display', 'block')
		if (selectors.every((item) => localStorage.getItem(item) === 'true')) {
			$('.vutom-col').css('display', 'none')
		}

		localStorage.setItem('slide151-7', 'true')
		$('.boton-play7').hide()
	})
	// cerra modal
	$('.closeModal6').on('click', () => {
		$('.modal6').css('display', 'none')
	})

})
