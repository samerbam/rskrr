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