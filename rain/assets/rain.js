var dropletsCount = 0;

function addDroplets(count) {
	droplets = ""
	count = count / 3;
	levels = ['l1', 'l2', 'l3'];
	for (level = 0; level < 3; level++) {
		for (i = 0; i < count ; i++) {
			randomPosition = Math.floor((Math.random() * 99) + 1);
			animationDelay = Math.floor((Math.random() * 99) + 1);
			topOffset = Math.floor((Math.random() * 500))/30;
			const markup = 
				`<div class="droplet droplet-${levels[level]}" style="top: ${-topOffset}vh; left:${randomPosition}vw; 
				animation-delay:.${animationDelay}s;"></div>
				<div class="splash splash-${levels[level]}" style="top: ${95-topOffset}vh; left:${randomPosition-.5}vw; 
				animation-delay:.${animationDelay}s;"></div>`;
			droplets += markup;
			dropletsCount++;
		}
	}
	$(".droplets").html(droplets);
}

$( document ).ready(function() {
    addDroplets(300);
    console.log("added");
});