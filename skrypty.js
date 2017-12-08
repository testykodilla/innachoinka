function drawTree(rows) {
	var gwiazdka ="";
	for (var row = 1; row <= rows; row++) {
		gwiazdka ="";
		for (var i = 0; i < rows - row; i++) {
			gwiazdka += " ";
		}
	for (var snowFlakes = 0; snowFlakes < row * 2 - 1; snowFlakes++) {
		gwiazdka += "*";
		}
	console.log(gwiazdka);
	}	
}

drawTree(8);