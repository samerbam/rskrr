//Example Request: {"name": "Sam Ryan","device": "iPhone","issue": "Will Not Turn On.","contact_method": "Email","contact_details": "example@example.com"}


// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'plain/text'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
//	body: data
  })//.then(function (text) {
	 // console.log(text)
  //});
  return response // parses JSON response into native JavaScript objects
}

//postData('https://example.com/answer', { answer: 42 })
//  .then(data => {
//    console.log(data); // JSON data parsed by `data.json()` call
//  });

async function submit_form() {
	const data = {"name": "Sam Ryan","device": "iPhone","issue": "Will Not Turn On.","contact_method": "Email","contact_details": "example@example.com"}
	
//	postData('https://tech-form.imsam.ca', data)
//	.then(function (text) {
//		console.log(text)
//	});
	
	
	
	
	
//  .then(data => {
//	let v = data.text()
//    console.log(data); // JSON data parsed by `data.json()` call
//  });
	
//	const data = {
//        message: 'We send a message to the backend with fetch()'
//    };
//	const endpoint = 'https://rskrr.duckdns.org:8123/api/webhook/ApbWZRjsh75sj7kZFLsMNewxVgVWNKCf';
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
	
//	var xhr = new XMLHttpRequest();
//	
//	xhr.onreadystatechange = function () {
//    if (this.readyState != 4) return;
//
//    if (this.status == 200) {
//        var data = JSON.parse(this.responseText);
//		console.log(data)
//
//        // we get the returned data
//    }
//
//    // end of state change: it can be after some time (async)
//};
//	xhr.open("POST", "https://tech-form.imsam.ca", true);
//	xhr.setRequestHeader('Content-Type', 'application/json');
//	xhr.send(JSON.stringify(data));
//	console.log(xhr.responseText);
//	res = await fetch("https://tech-form.imsam.ca", {
//	method: "POST",
//		mode: 'cors',
//	body: JSON.stringify(data)
////	headers: {
////			'Content-Type': 'application/json'
////	}
//	}).then()
//	console.log(res)
//	}).then(res => {
////		console.log("Request complete! response:", res);
//	});
}