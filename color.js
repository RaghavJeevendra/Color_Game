
var colors = [ 'rgb(0, 0, 255)',
			   'rgb(0, 255, 255)',
			   'rgb(0, 255, 0)',
			   'rgb(255, 0, 255)',
			   'rgb(255, 0, 0)',
			   'rgb(255, 255, 0)'
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var display = document.getElementById('displayColor');
display.textContent = pickedColor;



for(var i = 0; i < squares.length; i++ ){

	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener('click', function(){

		clickedColor = this.style.backgroundColor;
		if(pickedColor===clickedColor){
			alert('correct!!')
		}else{
			alert('Incorrect!!!')
		}

	})
	}
