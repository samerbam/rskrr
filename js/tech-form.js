/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction(id) {
	document.getElementById("myDropdown_"+id).classList.toggle("show");
//  console.log('test')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
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

function changeSelection(element) {
//  document.getElementsByClassName('dropbtn').forEach(ele => {
	[].forEach.call(document.getElementsByClassName('dropbtn'), function (ele) {
		if (ele.dataset.id == element.parentElement.dataset.id) {
			ele.innerHTML = element.innerHTML;
			ele.parentElement.children[0].value = element.innerHTML;
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

// function indexOfLastDigit(input) {
// 	let numsOnly = input.replace(/\D/g, "")
// 	return input.lastIndexOf(numsOnly.slice(-1))
// }

// function phone_mask(event) {

// 	const keyPressed = event.key
// 	const el = document.getElementById("phoneNumber")
// 	var placeholder = el.placeholder
// 	const digits = el.value.replace(/[^0-9]/g,"").length

// 	if (el.value == "") {
// 		el.value = placeholder
// 	}
// 	if (digits == 0) {
// 		el.value = placeholder
// 	}

// 	const nextLoc = el.value.indexOf("_")



// 	if ((event.charCode >= 48 && event.charCode <= 57) || event.keyCode == 9 || event.keyCode == 10 || event.keyCode == 13 || event.keyCode == 116 || event.keyCode == 46 || (event.keyCode <= 40 && event.keyCode >= 37)) {
// 		if (nextLoc != -1) {
// 			el.value = el.value.replaceAt(nextLoc, keyPressed)
// 			el.setSelectionRange(nextLoc+1,nextLoc+1)
// 		}
// 	}

// 	/*
// 	 * charCode [48,57]   Numbers 0 to 9
// 	 * keyCode 46       "delete"
// 	 * keyCode 9        "tab"
// 	 * keyCode 13       "enter"
// 	 * keyCode 116      "F5"
// 	 * keyCode 8        "backscape"
// 	 * keyCode 37,38,39,40  Arrows
// 	 * keyCode 10     (LF)
// 	 */
// 	// return (event.charCode >= 48 && event.charCode <= 57) || event.keyCode == 9 || event.keyCode == 10 || event.keyCode == 13 || event.keyCode == 8 || event.keyCode == 116 || event.keyCode == 46 || (event.keyCode <= 40 && event.keyCode >= 37) ? true : false
// 	event.preventDefault()
// 	return false
// }

// function onDelete(event) {
// 		const el = el

// 	if (event.keyCode == 8) {
// 		let d = indexOfLastDigit(el.value)
// 		if (d>1) {
// 			el.value = el.value.replaceAt(d, "_")
// 			el.setSelectionRange(d,d)
// 		}
// 		event.preventDefault()
// 	}
// }

// function tabFocus(e) {
// 	var el = el
// 	if ((e.keyCode ? e.keyCode : e.which)) {
// 		if (el.value == "") {
// 			el.value = el.placeholder
// 		}
// 		el.setSelectionRange(i, i)
// 	}
// }

// function emptyFill() {
//   var el = el
//   var i = el.value.indexOf("_") == -1 ? el.value.length : el.value.indexOf("_")
//   el.setSelectionRange(i, i)
//   if (el.value == "") {
//     el.value = el.placeholder
//   }
// }

// el.onkeypress = phone_mask;
// el.onkeydown = onDelete;
// el.onkeyup = tabFocus;
// el.onclick = emptyFill;


document.addEventListener('DOMContentLoaded', () => {

	var el = document.getElementById("phoneNumber")

	const setSelLoc = () => {
		var i = el.value.indexOf("_") == -1 ? el.value.length : el.value.indexOf("_")
		el.setSelectionRange(i, i)
	},
	indexOfLastDigit = (input) => {
		let numsOnly = input.replace(/\D/g, "")
		return input.lastIndexOf(numsOnly.slice(-1))
	},
	emptyFill = () => {
		setSelLoc()
		if (el.value == "") {
			el.value = el.placeholder
		}
	},
	tabFocus = (e) => {
		if ((e.keyCode ? e.keyCode : e.which)) {
			if (el.value == "") {
				el.value = el.placeholder
			}
			setSelLoc()
		}
	},
	onDelete = (event) => {
		if (event.keyCode == 8) {
			let d = indexOfLastDigit(el.value)
			if (d>1) {
				el.value = el.value.replaceAt(d, "_")
				el.setSelectionRange(d,d)
			}
			event.preventDefault()
		}
	},
	phone_mask = (event) => {
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