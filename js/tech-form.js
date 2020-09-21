function dDownToggle(id) { //Old Name: myFunction
	/* Toggle between showing and hiding dropdown. */
	document.getElementById("myDropdown_"+id).classList.toggle("show");
//  console.log('test')
}

function onSubmit(token) {
	/* Submit tech-form html form. */
	document.getElementById("tech-form").submit();
};

window.onclick = function(event) {
	/* Close the dropdown if the user clicks outside of it. */
	var	matches = event.target.matches ? event.target.matches('.dropbtn') : event.target.msMatchesSelector('.dropbtn');
	// if (!event.target.matches('.dropbtn')) {
	if (!matches) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

function changeDisplay(cName, displayVal) {
	/* Change display property of all elements with given cName class to given displayVal value. */
	var ele = document.getElementsByClassName(cName)
	for (var i = ele.length - 1; i >= 0; i--) {
		ele[i].style.display = displayVal
	}
}

function changeSelection(element) {
//  document.getElementsByClassName('dropbtn').forEach(ele => {
	[].forEach.call(document.getElementsByClassName('dropbtn'), function (ele) {
		if (ele.dataset.id == element.parentElement.dataset.id) {
			ele.innerHTML = element.innerHTML;
			ele.parentElement.children[0].value = element.innerHTML;
			if (ele.dataset.id == 2) {
				if (element.innerHTML == "Email") {
					changeDisplay("hidePhone", "none")
					changeDisplay("hideEmail", "inline-grid")
					// document.getElementById("hideEmailLabel").style.display = "inline-grid";
					// document.getElementById("hideEmailInput").style.display = "inline-grid";

				} else if (element.innerHTML == "Phone") {
					changeDisplay("hideEmail", "none")
					changeDisplay("hidePhone", "inline-grid")

				} else {
					changeDisplay("hideEmail", "none")
					changeDisplay("hidePhone", "none")
				}
			}
//      console.log(ele.parentElement.children)
		}
	});
}


const tx = document.getElementsByTagName('textarea');
for (let i = 0; i < tx.length; i++) {
	tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
	tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
	this.style.height = 'auto';
	this.style.height = (this.scrollHeight) + 'px';
}

String.prototype.replaceAt = function(index, replacement) {
		return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}


document.addEventListener('DOMContentLoaded', function() {
	/* Logic for phone number input box. 
	 * TODO: change from hard coded phoneNumber id to creation of dynamic input fields with placeholders.
	 */

	var el = document.getElementById("phoneNumber")
	const setSelLoc = function() {
		/* Move cursor to last _ in element value. */
		var i = el.value.indexOf("_") == -1 ? el.value.length : el.value.indexOf("_")
		el.setSelectionRange(i, i)
	},
	indexOfLastDigit = function(input) {
		/* Get index of last digit in input. */
		let numsOnly = input.replace(/\D/g, "")
		return input.lastIndexOf(numsOnly.slice(-1))
	},
	emptyFill = function() {
		/* If the elements value is empty fill it with placeholder. */
		setSelLoc()
		if (el.value == "") {
			el.value = el.placeholder
		}
	},
	tabFocus = function(e) {
		/* Prevent selection of all text when using tab to select input box. 
		 * Moves cursor to last _ in value.
		 */
		if ((e.keyCode ? e.keyCode : e.which)) {
			if (el.value == "") {
				el.value = el.placeholder
			}
			setSelLoc()
		}
	},
	onDelete = function(event) {
		/* Prevents delection of placeholder text and brings back missing placeholder text when digits are removed. */
		if (event.keyCode == 8) {
			let d = indexOfLastDigit(el.value)
			if (d>1) {
				el.value = el.value.replaceAt(d, "_")
				el.setSelectionRange(d,d)
			}
			event.preventDefault()
		}
	},
	phone_mask = function(event) {
		/* Only allows certain keys to be pressed. */
		const keyPressed = event.key
		const nextLoc = el.value.indexOf("_")
		if ((event.charCode >= 48 && event.charCode <= 57) || event.keyCode == 9 || event.keyCode == 10 || event.keyCode == 13 || event.keyCode == 116 || event.keyCode == 46 || (event.keyCode <= 40 && event.keyCode >= 37)) {
			if (nextLoc != -1) {
				el.value = el.value.replaceAt(nextLoc, keyPressed)
				el.setSelectionRange(nextLoc+1,nextLoc+1)
			}
		}

		/*
		 * charCode [48,57]   Numbers 0 to 9
		 * keyCode 46       "delete"
		 * keyCode 9        "tab"
		 * keyCode 13       "enter"
		 * keyCode 116      "F5"
		 * keyCode 8        "backscape"
		 * keyCode 37,38,39,40  Arrows
		 * keyCode 10     (LF)
		 */
		// return (event.charCode >= 48 && event.charCode <= 57) || event.keyCode == 9 || event.keyCode == 10 || event.keyCode == 13 || event.keyCode == 8 || event.keyCode == 116 || event.keyCode == 46 || (event.keyCode <= 40 && event.keyCode >= 37) ? true : false
		event.preventDefault()
		return false
	};
	
	el.onkeypress = phone_mask;
	el.onkeydown = onDelete;
	el.onkeyup = tabFocus;
	el.onclick = emptyFill;
})