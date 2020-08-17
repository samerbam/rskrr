// //Example Request: {"name": "Sam Ryan","device": "iPhone","issue": "Will Not Turn On.","contact_method": "Email","contact_details": "example@example.com"}



// // Example POST method implementation:
// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
// //    credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'plain/text'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
// // body: data
//   })//.then(function (text) {
//   // console.log(text)
//   //});
//   return response // parses JSON response into native JavaScript objects
// }

// //postData('https://example.com/answer', { answer: 42 })
// //  .then(data => {
// //    console.log(data); // JSON data parsed by `data.json()` call
// //  });

// async function submit_form() {
//  const data = {"name": "Sam Ryan","device": "iPhone","issue": "Will Not Turn On.","contact_method": "Email","contact_details": "example@example.com"}
	
// // postData('https://tech-form.imsam.ca', data)
// // .then(function (text) {
// //   console.log(text)
// // });
	
	
	
	
	
//  .then(data => {
//  let v = data.text()
//    console.log(data); // JSON data parsed by `data.json()` call
//  });
	
//  const data = {
//        message: 'We send a message to the backend with fetch()'
//    };
//  const endpoint = 'https://rskrr.duckdns.org:8123/api/webhook/ApbWZRjsh75sj7kZFLsMNewxVgVWNKCf';
//
//fetch(endpoint, {
//    method: 'POST',
//    body: JSON.stringify(data)
//})
//.then((resp) => resp.json())
//.then(function(response) {
//    console.info('fetch()', response);
//    return response;
//});
	
//  var xhr = new XMLHttpRequest();
//  
//  xhr.onreadystatechange = function () {
//    if (this.readyState != 4) return;
//
//    if (this.status == 200) {
//        var data = JSON.parse(this.responseText);
//    console.log(data)
//
//        // we get the returned data
//    }
//
//    // end of state change: it can be after some time (async)
//};
//  xhr.open("POST", "https://tech-form.imsam.ca", true);
//  xhr.setRequestHeader('Content-Type', 'application/json');
//  xhr.send(JSON.stringify(data));
//  console.log(xhr.responseText);
//  res = await fetch("https://tech-form.imsam.ca", {
//  method: "POST",
//    mode: 'cors',
//  body: JSON.stringify(data)
////  headers: {
////      'Content-Type': 'application/json'
////  }
//  }).then()
//  console.log(res)
//  }).then(res => {
////    console.log("Request complete! response:", res);
//  });
//}

// OLD (KEEPING FOR NOW)
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

