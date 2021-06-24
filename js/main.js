const pageNames = {
    0: "Welcome",
    // 1: "About",
    1: "Portfolio",
    2: "Contact"
}

let prevPage = ""

function toggleModal(act='toggle') {
    console.log('======')
    console.log(act)
    console.log('======')
    // modal.classList.toggle('pointer-events-none')
      if (act == 'toggle') {
          document.querySelector('body').classList.toggle('modal-active')
          document.querySelector('.modal').classList.toggle('hidden')
      } else if (act == 'show') {
          document.querySelector('body').classList.add('modal-active')
          document.querySelector('.modal').classList.remove('hidden')
      } else if (act == 'hide') {
          document.querySelector('body').classList.remove('modal-active')
          document.querySelector('.modal').classList.add('hidden')
      }
  }

  var closemodal = document.querySelectorAll('.modal-close')
  for (var i = 0; i < closemodal.length; i++) {
      console.log(closemodal[i])
      console.log('===')
    closemodal[i].addEventListener('click', function(){
        toggleModal(act='toggle');
    })
  }
  
  document.onkeydown = function(evt) {
    evt = evt || window.event
    var isEscape = false
    if ("key" in evt) {
      isEscape = (evt.key === "Escape" || evt.key === "Esc")
    } else {
      isEscape = (evt.keyCode === 27)
    }
    if (isEscape && document.body.classList.contains('modal-active')) {
      toggleModal()
    }
  };
  
  


  // toggleModal()

  document.addEventListener('mouseup', function(e) {
      var container = document.querySelector('.modal')
      
      if (!container.contains(e.target)) {
          toggleModal(act='hide')
          // container.style.display = 'none';
      }
  });

//Source: https://stackoverflow.com/questions/65952068/determine-if-a-snap-scroll-elements-snap-scrolling-event-is-complete
function scrollHandler(e) {
    // toggleModal()
    // console.log('???')
    // document.querySelector('.modal').classList.add('hidden')
    toggleModal(act='hide')

    var atSnappingPoint = e.target.scrollTop % e.target.offsetHeight === 0;
    var timeOut         = atSnappingPoint ? 0 : 150; //see notes

    clearTimeout(e.target.scrollTimeout);
    e.target.scrollTimeout = setTimeout(function() {
        // toggleModal()
//         let width  = window.innerWidth || document.documentElement.clientWidth || 
// document.body.clientWidth;
        let height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;
        console.log('Scrolling is done! ' + height );

        let currentPage = e.target.scrollTop/height
        
        document.getElementById("currentPageViewer").innerHTML = e.target.scrollTop%height===0 ? (prevPage=pageNames[currentPage], pageNames[currentPage]) : prevPage


    }, timeOut);
}

let mainScroller = document.getElementById("mainScroller")
mainScroller.addEventListener('scroll', scrollHandler);


//Source: https://stackoverflow.com/questions/51229742/javascript-window-scroll-behavior-smooth-not-working-in-safari
function SmoothVerticalScrolling(e, time, where) {
    var eTop = e.getBoundingClientRect().top;
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 100;
    }
}

function SVS_B(eAmt, where) {
    if(where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
    if (where == "top")
        window.scrollBy(0, eAmt);
}

//Source: https://stackoverflow.com/a/48816344
// Add something to given element placeholder

let timeoutList = []

function timeoutClearCheck(el) {
    if (document.getElementById("animatedInput") === document.activeElement) {
        clearPlaceholder(el);
        timeoutList.forEach(item => {
            clearTimeout(item)
        })
        clearPlaceholder(el);
    }
}

// function animatedFocus(el) {
//     timeoutClearCheck(document.getElementById("animatedPlaceholder"))
// }

function addToPlaceholder(toAdd, el) {
    el.setAttribute('placeholder', el.getAttribute('placeholder') + toAdd);
    // Delay between symbols "typing" 
    return new Promise(resolve => {
        timeoutList.push(setTimeout(resolve, 100))
    });
}

// Cleare placeholder attribute in given element
function clearPlaceholder(el) {
    el.setAttribute("placeholder", "");
}

//Animated placeholder clear
function animateClearPlaceholder(el) {
    // return new Promise(resolve => {

        var letters = el.getAttribute("placeholder")
        console.log(letters)
        console.log(letters.slice(0, -1))
        const lettersLength = letters.length
        // timers = []


        for (var i=0; i<lettersLength; i++) {
            timeoutList.push(setTimeout(() => {
                letters = letters.slice(0, -1)
                el.setAttribute("placeholder", letters)
            }, i*100))
        }

        return new Promise(resolve => {
            timeoutList.push(setTimeout(resolve, (lettersLength+2)*100))
        });


}

// Print one phrase
function printPhrase(phrase, el) {
    console.log(document.activeElement)
    console.log(el)
    if (document.getElementById("animatedInput") !== document.activeElement) {
        return new Promise(async (resolve) => {
            // Clear placeholder before typing next phrase
            // animateClearPlaceholder(el);
            // (async () => {
            await animateClearPlaceholder(el);
            // })();

            let letters = phrase.split('');
            // For each letter in phrase
            letters.reduce(
                (promise, letter, index) => promise.then(_ => {
                    // Resolve promise when all letters are typed
                    // if (document.getElementById("animatedInput") === document.activeElement) {
                        // resolve()
                        // Promise.resolve()
                        // clearPlaceholder(el);
                        // if (document.getElementById("animatedInput") === document.activeElement) {

                        // }
                    // }
                    if (index === letters.length - 1) {
                        // Delay before start next phrase "typing"
                        timeoutList.push(setTimeout(resolve, 5000));
                    }
                    console.log('ugh')
                    return addToPlaceholder(letter, el);
                }),
                Promise.resolve()
            );
        });
    } else {
        clearPlaceholder(el);
        return new Promise(resolve => setTimeout(resolve, 1000))
    }

} 

// Print given phrases to element
function printPhrases(phraseses, el) {
    // For each phrase
    // wait for phrase to be typed
    // before start typing next
    // console.log(Object.values(phraseses))
    let tempList = Object.values(phraseses)
    let phrases = tempList[0]
    phrases = phrases.concat(tempList[1], tempList[2]);
    phrases.reduce(
    // Object.values(phraseses).reduce(
        // (promises, phrases) => promises.then(_ => phrases.reduce(
                (promise, phrase) => promise.then(_ => printPhrase(phrase, el)), 
                Promise.resolve()
            )
            // Promise.resolve()
    //))
}

const wordList = {
    'Tech Support': ["Computer", "Tech Support", "Personal Computer", "PC", "Mac", "Linux", "Windows", "Mac Computer", "Linux Computer", "Server", "Linux Server", "Windows Server", "Windows Computer", "Computer Help"],
    'Website': ["Website", "Wordpress", "Squarespace", "Wix", "Format", "Custom Website"],
    'Programming': ["Programming", "Custom Software", "Custom Solution", "Other"]
}


const wordListConcat = Object.values(wordList)[0].concat(Object.values(wordList)[1], Object.values(wordList)[2]);

const wordCats = ['Tech Support', 'Website', 'Programming']


/*function autocomplete(event) {
    console.log(event)
    var currentAuto = false



    if ((event.key == "Tab" || event.key == "Enter") && (currentAuto == true)) {
        //Complete current suggestion and prevent default action
        event.preventDefault()
        return false
    } else {
        //Otherwise do nothing
        return true
    }
}*/



// Start typing
function run() {
    let phrases = [
        "My Computer",
        "My Website",
        "My Printer",
        "Other"
    ];
    console.log('load')
    // clearPlaceholder(document.getElementById("animatedPlaceholder"))
    printPhrases(wordList, document.getElementById("animatedPlaceholder"));
    document.getElementById("animatedInput").addEventListener("keydown", autocomplete)
    document.getElementById("animatedInput").addEventListener("onclick", function() {currentlyPlaceholder=false})

}

run();



//Source: https://codepen.io/2undercover/pen/wfBuL
// var names = [
//     'Muhammad',
//     'Ali',
//     'John',
//     'Mike',
//     'Jane',
//     'Hanna',
//     'Pedro',
//     'Alfred',
//     'ali'
//   ];


  var name = '';
  var currentlyPlaceholder = false;

/*   $('#input').keyup(*/
function autocomplete(e) {

    // var val = $(this).val();
    var val = document.getElementById('animatedInput').value
    
    if(val == '') {
      document.getElementById('animatedPlaceholder').setAttribute('placeholder', '');
      return;
    } else if (document.getElementById('animatedInput').getAttribute('placeholder') == '') {
        currentlyPlaceholder = false
    }
    
    console.log(val)
    console.log(document.getElementById("animatedPlaceholder").getAttribute('placeholder'))
    console.log(currentlyPlaceholder)

    if ((e.key === "Tab" || e.key === "Enter") && currentlyPlaceholder === true) {
      e.preventDefault();
      document.getElementById('animatedInput').value = name;
      document.getElementById('animatedPlaceholder').setAttribute('placeholder', '');
      currentlyPlaceholder = false
      return;
    }
    
    var find = false;
    for (var i = 0; i < wordListConcat.length; i++) {
      name = wordListConcat[i];
      if(name.indexOf(val) === 0) {
        find = true;
        break;
      } else {
        name = '';
      }
    }
    
    if(find === true) {
        document.getElementById('animatedPlaceholder').setAttribute('placeholder', name);
        currentlyPlaceholder = true
    } else {
        document.getElementById('animatedPlaceholder').setAttribute('placeholder', '');
        currentlyPlaceholder = false
    }
}//)
