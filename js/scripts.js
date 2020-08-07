//Attempting to use as little JS as possible - both for browser support and page load times.


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction(id) {
  document.getElementById("myDropdown_"+id).classList.toggle("show");
//	console.log('test')
}

//function changeSelection(elem) {
//	
//	[].forEach.call(document.getElementsByClassName('dropBtn'), function (el) {
//		if (ele.dataset.id == elem.parentElement.dataset.id) {
//			ele.innerHtml = elem.innerHtml
//		}
//	});
	
/*	document.getElementsByClassName('dropBtn').forEach(ele => {
		if (ele.dataset.id == elem.parentElement.dataset.id) {
			ele.innerHtml = elem.innerHtml
		}
	})*/
//}

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
//	document.getElementsByClassName('dropbtn').forEach(ele => {
	[].forEach.call(document.getElementsByClassName('dropbtn'), function (ele) {
		if (ele.dataset.id == element.parentElement.dataset.id) {
			ele.innerHTML = element.innerHTML;
			ele.parentElement.children[0].value = element.innerHTML;
//			console.log(ele.parentElement.children)
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





//

// This code empowers all input tags having a placeholder and data-slots attribute
document.addEventListener('DOMContentLoaded', () => {
    for (const el of document.querySelectorAll("[placeholder][data-slots]")) {
        const pattern = el.getAttribute("placeholder"),
            slots = new Set(el.dataset.slots || "_"),
            prev = (j => Array.from(pattern, (c,i) => slots.has(c)? j=i+1: j))(0),
            first = [...pattern].findIndex(c => slots.has(c)),
            accept = new RegExp(el.dataset.accept || "\\d", "g"),
            clean = input => {
                input = input.match(accept) || [];
                return Array.from(pattern, c =>
                    input[0] === c || slots.has(c) ? input.shift() || c : c
                );
            },
            format = () => {
                const [i, j] = [el.selectionStart, el.selectionEnd].map(i => {
                    i = clean(el.value.slice(0, i)).findIndex(c => slots.has(c));
                    return i<0? prev[prev.length-1]: back? prev[i-1] || first: i;
                });
                el.value = clean(el.value).join``;
                el.setSelectionRange(i, j);
                back = false;
            };
        let back = false;
        el.addEventListener("keydown", (e) => back = e.key === "Backspace");
        el.addEventListener("input", format);
        el.addEventListener("focus", format);
        el.addEventListener("blur", () => el.value === pattern && (el.value=""));
    }
});

//
//const isNumericInput = (event) => {
//    const key = event.keyCode;
//    return ((key >= 48 && key <= 57) || // Allow number line
//        (key >= 96 && key <= 105) // Allow number pad
//    );
//};
//
//const isModifierKey = (event) => {
//    const key = event.keyCode;
//    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
//        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
//        (key > 36 && key < 41) || // Allow left, up, right, down
//        (
//            // Allow Ctrl/Command + A,C,V,X,Z
//            (event.ctrlKey === true || event.metaKey === true) &&
//            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
//        )
//};
//
//const enforceFormat = (event) => {
//    // Input must be of a valid number format or a modifier key, and not longer than ten digits
//    if(!isNumericInput(event) && !isModifierKey(event)){
//        event.preventDefault();
//    }
//};
//
//const formatToPhone = (event) => {
//    if(isModifierKey(event)) {return;}
//
//    // I am lazy and don't like to type things more than once
//    const target = event.target;
//    const input = target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
//    const zip = input.substring(0,3);
//    const middle = input.substring(3,6);
//    const last = input.substring(6,10);
//
//    if(input.length > 6){target.value = `(${zip}) ${middle} - ${last}`;}
//    else if(input.length > 3){target.value = `(${zip}) ${middle}`;}
////    else if(input.length > 0){target.value = `(${zip}`;}
//};
//
//const inputElement = document.getElementById('phoneNumber');
//inputElement.addEventListener('keydown',enforceFormat);
//inputElement.addEventListener('keyup',formatToPhone);


//function formSubmit(event) {
//  var url = "https://tech-form.imsam.ca";
//  var request = new XMLHttpRequest();
//  request.open('POST', url, true);
//  request.onload = function() { // request successful
//  // we can use server response to our request now
//    console.log(request.responseText);
//  };
//
//  request.onerror = function() {
//    // request failed
//  };
//
//	console.log(new FormData(event.target))
//  request.send(new FormData(event.target)); // create FormData from form that triggered event
//  event.preventDefault();
//}
//
//// and you can attach form submit event like this for example
//function attachFormSubmitEvent(formId){
//  document.getElementById(formId).addEventListener("submit", formSubmit);
//}

//attachFormSubmitEvent("tech-form")
//const tx = document.getElementsByTagName('textarea');
//for (let i = 0; i < tx.length; i++) {
//	console.log(tx[i].scrollHeight)
//  tx[i].setAttribute('style', 'height:' + tx[i].scrollHeight + 'em;overflow-y:hidden;resize:none;');
////  tx[i].setAttribute('style', 'height:' + (10) + 'em;overflow-y:hidden;resize:none;');
//  tx[i].addEventListener("input", OnInput, false);
//}
//
//
//function px2em(px, elem) {
//	console.log(px)
//	return px/parseFloat(window.getComputedStyle(elem, null).getPropertyValue('font-size'))
//}
//
//function em2px(em, elem) {
//	return px*parseFloat(window.getComputedStyle(elem, null).getPropertyValue('font-size'))
//}
//
//function OnInput() {
//  this.style.height = 'auto';
//	console.log(px2em(this.scrollHeight, this))
//  this.style.height = ( px2em(this.scrollHeight, this) ) + 'em';
//}