//Attempting to use as little JS as possible - both for browser support and page load times.

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