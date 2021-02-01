
var volet = document.querySelectorAll(".peigne");
console.log(volet);
var i = 0;

for(i = 0; i < volet.length; i++) {
	volet[i].addEventListener('click', function() {
		var prochain = this.nextElementSibling;
		if (prochain.style.display === "block"){
			prochain.style.display = "none";
		}
		else {
			prochain.style.display = "block";
		}
	})
};


var random = document.querySelector(".aleatoire");
console.log(random);

random.addEventListener('click', function() {
	var apprenant = ["Abdoulaye","Abdoul-Nasser","Maxime" ,"Alexis","Alicia","Asad","Ayoub","Ahmadu-Bamba","Caroline", "Charles","David","Denis","Elyesse","Farima","Flora","Fodié","Gaëlle","Jonathan","Kevin","Lobna","Lyes","Maëlys","Muhammad","Mohamed"];
	var nom = apprenant[Math.floor(Math.random() * apprenant.length)];
	random.textContent = nom;
})
