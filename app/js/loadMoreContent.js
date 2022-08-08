window.onload = function () {
	var box=document.getElementsByClassName('products-card');
	var btn=document.getElementById('products-btn');
	for (let i=3;i<box.length;i++) {
			box[i].style.display = "none";
	}

	var countD = 3;
	btn.addEventListener("click", function() {
			var box=document.getElementsByClassName('products-card');
			countD += 3;
			if (countD <= box.length){
					for(let i=0;i<countD;i++){
							box[i].style.display = "block";
					}
			}

	})
}