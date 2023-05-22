function volume_sphere() {
    //Write your code here
	let radius = parseInt(document.getElementById("radius").value)|| 0;
	let volume = document.getElementById("volume");
	volume.value = (4/3)*(22/7)*(radius*radius*radius);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
