//Attempting to use as little JS as possible - both for browser support and page load times.


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction(id) {
  document.getElementById("myDropdown_"+id).classList.toggle("show");
//	console.log('test')
}


function checkBrowser() {
	var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	var isFirefox = typeof InstallTrigger !== 'undefined';
	var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	var isEdge = !isIE && !!window.StyleMedia;
	var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
	var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);
	var isBlink = (isChrome || isOpera) && !!window.CSS;
	
	var browserList = {
		"Opera": isOpera,
		"Firefox": isFirefox,
		"Safari": isSafari,
		"IE": isIE,
		"Edge": isEdge,
		"Chrome": isChrome,
		"EdgeChromium": isEdgeChromium,
		"Blink": isBlink
	}
	
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


// function clearSelection(e) {
// 	console.log(e.key);
//     var sel;
//     if ( (sel = document.selection) && sel.empty ) {
//         sel.empty();
//     } else {
//         if (window.getSelection) {
//             window.getSelection().removeAllRanges();
//         }
//         var activeEl = document.activeElement;
//         if (activeEl) {
//             var tagName = activeEl.nodeName.toLowerCase();
//             if ( tagName == "textarea" || (tagName == "input" && activeEl.type == "text") ) {
// //				continue
//                 // Collapse the selection to the end
// //                activeEl.selectionStart = activeEl.selectionEnd;
// //				activeEl.selectionEnd = activeEl.selectionStartactiveEl.value.length;
// //				activeEl.selectionStart = activeEl.value.replace(/[^0-9]/g,"").length+3;
// //				activeEl.selectionEnd = activeEl.value.replace(/[^0-9]/g,"").length+3;
// //				activeEl.selectionEnd = activeEl.value.length;
// 				var activeEllength = activeEl.value.replace(/[^0-9]/g,"").length
// //				if (activeEllength == 1) {
// //					var iunder = activeEl.value.indexOf("_")
// //					activeEl.selectionStart = activeEllength+
// //					activeEl.selectionEnd = activeEllength
// 				/*} else*/ if (activeEllength <= 4) {
// 					activeEl.selectionStart = activeEllength+3
// 					activeEl.selectionEnd = activeEllength+3
// 				} else if (activeEllength <= 7) {
// 					activeEl.selectionStart = activeEllength+5
// 					activeEl.selectionEnd = activeEllength+5
// 				} else if (activeEllength <= 10) {
// 					activeEl.selectionStart = activeEllength+6
// 					activeEl.selectionEnd = activeEllength+6
// 				}
// //				if (activeEl.value[activeEl.selectionStart-1] == "-") {
// //					activeEl.selectionStart = iunder-2
// //					activeEl.selectionEnd = iunder-2
// //					
// //				} else {

// //				}
//             }
//         }
//     }
// }


// function replaceAt(index, replacement) {
// 	return this.substr(0, index) + replacement + this.substr(index + replacement.length);
// }

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function indexOfLastDigit(input) {

  let numsOnly = input.replace(/\D/g, "")
  return input.lastIndexOf(numsOnly.slice(-1))

  // let i = input.length;
  // for (; input[i] >= '0' && input[i] <= '9'; i--);
  // return i == -1 ? -1 : i;

  // let i = input.length;
  // console.log("here")
  // for (; input[i] < '0' || input[i] > '9'; i--);
  // 	console.log('??')
  // return i == -1 ? -1 : i;
}

function phone_mask(event) {

	const keyPressed = event.key
	const el = document.getElementById("phoneNumber")
	var placeholder = el.placeholder
	const digits = el.value.replace(/[^0-9]/g,"").length

	if (el.value == "") {
		el.value = placeholder
	}
	if (digits == 0) {
		el.value = placeholder
	}

	const nextLoc = el.value.indexOf("_")



	// el.value.replaceAt(nextLoc, keyPressed)
	// var temp = el.value
	// console.log(temp)
	// console.log(nextLoc)
	// temp = temp.replaceAt(nextLoc, keyPressed)
	// console.log(temp)


	if ((event.charCode >= 48 && event.charCode <= 57) || event.keyCode == 9 || event.keyCode == 10 || event.keyCode == 13 || event.keyCode == 116 || event.keyCode == 46 || (event.keyCode <= 40 && event.keyCode >= 37)) {
		if (nextLoc != -1) {
			el.value = el.value.replaceAt(nextLoc, keyPressed)
			el.setSelectionRange(nextLoc+1,nextLoc+1)
		}
	}
	// console.log(temp)
	// console.log(keyPressed)
	// temp[nextLoc] = keyPressed
	// 	console.log(temp)

	// el.value = temp
	// console.log(el.value)
	// el.value[nextLoc] = keyPressed

	// var hashes = (placeholder.split("_").length-1)





	/*
	 * charCode [48,57] 	Numbers 0 to 9
	 * keyCode 46  			"delete"
	 * keyCode 9  			"tab"
	 * keyCode 13  			"enter"
	 * keyCode 116 			"F5"
	 * keyCode 8  			"backscape"
	 * keyCode 37,38,39,40	Arrows
	 * keyCode 10			(LF)
	 */
	// return (event.charCode >= 48 && event.charCode <= 57) || event.keyCode == 9 || event.keyCode == 10 || event.keyCode == 13 || event.keyCode == 8 || event.keyCode == 116 || event.keyCode == 46 || (event.keyCode <= 40 && event.keyCode >= 37) ? true : false
	event.preventDefault()
	return false
}

function onDelete(event) {
		const el = document.getElementById("phoneNumber")

	if (event.keyCode == 8) {
		let d = indexOfLastDigit(el.value)
		if (d>1) {
			el.value = el.value.replaceAt(d, "_")
			el.setSelectionRange(d,d)
		}
		event.preventDefault()
	}
}

function tabFocus(e) {
	var el = document.getElementById("phoneNumber")
	if ((e.keyCode ? e.keyCode : e.which)) {
		if (el.value == "") {
			el.value = el.placeholder
		}
		var i = el.value.indexOf("_") == -1 ? el.value.length : el.value.indexOf("_")
		el.setSelectionRange(i, i)
	}
}

function emptyFill() {
	var el = document.getElementById("phoneNumber")
	var i = el.value.indexOf("_") == -1 ? el.value.length : el.value.indexOf("_")
	el.setSelectionRange(i, i)
	if (el.value == "") {
		el.value = el.placeholder
	}
}

document.getElementById("phoneNumber").onkeypress = phone_mask;
document.getElementById("phoneNumber").onkeydown = onDelete;
document.getElementById("phoneNumber").onkeyup = tabFocus;
document.getElementById("phoneNumber").onclick = emptyFill;


/**
 * charCode [48,57] 	Numbers 0 to 9
 * keyCode 46  			"delete"
 * keyCode 9  			"tab"
 * keyCode 13  			"enter"
 * keyCode 116 			"F5"
 * keyCode 8  			"backscape"
 * keyCode 37,38,39,40	Arrows
 * keyCode 10			(LF)
 */
// function validate_int(myEvento) {
//   if ((myEvento.charCode >= 48 && myEvento.charCode <= 57) || myEvento.keyCode == 9 || myEvento.keyCode == 10 || myEvento.keyCode == 13 || myEvento.keyCode == 8 || myEvento.keyCode == 116 || myEvento.keyCode == 46 || (myEvento.keyCode <= 40 && myEvento.keyCode >= 37)) {
//     dato = true;
//       // myEvento.preventDefault()

//   } else {
//     dato = false;
//   }
//   return dato;
// }


// function phone_number_mask(event) {
//   event.preventDefault()
//   var myMask = "(___) ___-____";
//   var myCaja = document.getElementById("phoneNumber");
//   var myText = "";
//   var myNumbers = [];
//   var myOutPut = ""
//   var theLastPos = 1;
//   myText = myCaja.value;
//   //get numbers
//   for (var i = 0; i < myText.length; i++) {
//     if (!isNaN(myText.charAt(i)) && myText.charAt(i) != " ") {
//       myNumbers.push(myText.charAt(i));
//     }
//   }
//   //write over mask
//   for (var j = 0; j < myMask.length; j++) {
//     if (myMask.charAt(j) == "_") { //replace "_" by a number 
//       if (myNumbers.length == 0)
//         myOutPut = myOutPut + myMask.charAt(j);
//       else {
//         myOutPut = myOutPut + myNumbers.shift();
//         theLastPos = j + 1; //set caret position
//       }
//     } else {
//       myOutPut = myOutPut + myMask.charAt(j);
//     }
//   }
//   document.getElementById("phoneNumber").value = myOutPut;
//   document.getElementById("phoneNumber").setSelectionRange(theLastPos, theLastPos);
// }

// document.getElementById("phoneNumber").onkeypress = validate_int;
// document.getElementById("phoneNumber").onkeyup = phone_number_mask;

//function clearSelection()
//{
//	window.getSelection().removeAllRanges();
//// if (window.getSelection) {window.getSelection().removeAllRanges();}
//// else if (document.selection) {document.selection.empty();}
//}



//


// function handleDelete(e, ele) {
	
// 	if (e.key ==="Backspace") {
// 		var ele = document.getElementById("phoneNumber")
// 		if (ele.value[ele.value.length-1] == "-") {
// 			ele.selectionStart = ele.value.length-2
// 			ele.selectionEnd = ele.value.length-2
// 		}
// 		return false
// 	} else {
// 		return true
// 	}
// }

// This code empowers all input tags having a placeholder and data-slots attribute
// document.addEventListener('DOMContentLoaded', () => {
// 	// console.error("Here!")
//     for (const el of document.querySelectorAll("[placeholder][data-slots]")) {
//         const pattern = el.getAttribute("placeholder"),
//             slots = new Set(el.dataset.slots || "_"),
//             prev = (j => Array.from(pattern, (c,i) => slots.has(c)? j=i+1: j))(0),
//             first = [...pattern].findIndex(c => slots.has(c)),
//             accept = new RegExp(el.dataset.accept || "\\d", "g"),
//             clean = input => {
//             	console.log("clean")
//                 input = input.match(accept) || [];
//                 return Array.from(pattern, c =>
//                     input[0] === c || slots.has(c) ? input.shift() || c : c
//                 );
//             },
//             format = () => {
//             	console.log("format")
// //				if ((event.originalEvent.isTrusted === true && event.originalEvent.isPrimary === undefined) || event.originalEvent.isPrimary === true) {
// 					const [i, j] = [el.selectionStart, el.selectionEnd].map(i => {
// 						i = clean(el.value.slice(0, i)).findIndex(c => slots.has(c));
// 						return i<0? prev[prev.length-1]: back? prev[i-1] || first: i;
// 					});
// 					el.value = clean(el.value).join``;
// 					el.setSelectionRange(i, j);
// 					back = false;
// //				}
//             };
// //			format_select = (event) => {
// //				if (e.screenX && e.screenX != 0 && e.screenY && e.screenY != 0) {
// //					const [i, j] = [el.selectionStart, el.selectionEnd].map(i => {
// //						i = clean(el.value.slice(0, i)).findIndex(c => slots.has(c));
// //						return i<0? prev[prev.length-1]: back_f? prev[i-1] || first: i;
// //					});
// //					el.value = clean(el.value).join``;
// //					el.setSelectionRange(i, j);
// //					back_f = false;
// //				}
// //			};
//         let back = false;
// //		let back_f = false;
//         el.addEventListener("keydown", (e) => back = e.key === "Backspace");
// //		el.addEventListener("keydown", handleDelete)
//         el.addEventListener("input", format);
//         el.addEventListener("focus", format);
// 		el.addEventListener("keydown", clearSelection);
// 		// el.onselect = clearSelection;
//         el.addEventListener("blur", () => el.value === pattern && (el.value=""));
//     }
// });

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