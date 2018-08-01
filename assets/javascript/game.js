$(document).ready(function() {
	var crystals = ['assets/images/whiteCrystal.png', 'assets/images/redCrystal.png', 'assets/images/blueCrystal.png', 'assets/images/greenCrystal.png']
	var counter = 0
	var wins = 0
	var losses = 0
	var targetNumber
	var numberOptions= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	var crystalValue=[]
	start()

	// Generates random numbers from array for the crystal values
	function randomOption(numberOptions) {
		for (var i =0; i < 4; i++){
			crystalValue.push(numberOptions[Math.floor(Math.random()*numberOptions.length)])
		}
	}

	function crystalImage () {
		for ( var i = 0; i < 4; i++) {
			var imageCrystal = $('<img>')
			imageCrystal.attr('data-num', crystalValue[i])
			imageCrystal.attr('src', crystals[i])
			imageCrystal.attr('alt', 'crystals')
			imageCrystal.addClass('crystalImage')
			$('#imageCrystal').append(imageCrystal)
		}
	}

	function start () {
		targetNumber = 19 + Math.floor(Math.random() * 102)
		$('#computer').text(targetNumber)
		crystalValue = []
		randomOption(numberOptions)
		crystalImage()
		counter = 0
		$('#totalScore').text(counter)
	}

	$('#imageCrystal').on('click', '.crystalImage', function() {
		counter = counter + parseInt($(this).data('num'))
		$('#totalScore').text(counter)
		if (counter === targetNumber) {
			wins++
			$('#wins').text(wins)
			$('#imageCrystal').empty()
			start()
		} else if (counter > targetNumber) {
			losses++
			$('#losses').text(losses)
			$('#imageCrystal').empty()
			start()
		}
	})
})