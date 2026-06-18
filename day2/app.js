//selecting elemnets:
    //getelementbyid:
    let header= document.getElementById("myHeader");

    //queryselector: selects the first element that matches the selector
    let header2= document.querySelector("h1");

    //queryselectorall: selects all elements that match the selector
    let headers= document.querySelectorAll("h1");
    headers[0], headers[1] // selects the first and second h1 elements

//reading , changing:
    //textContent: changes the text content of an element
    header.textContent="islam"; 

    //innerHTML:
    header2.innerHTML="<a href='#'>islam</a>"; // changes the inner HTML of an element

    //innerHTML vs textContent: textConent is safer and better used, innerHTML can be used to inject HTML code into the page, but it can also be used to inject malicious code, so it should be used with caution

    //value: always used with input elements, changes the value of an input element
    let input= document.querySelector("input");
    input.value="islam"; // changes the value of an input element

//styleing elements: after .style we can write any css property (if it has - it becaomes camelCase) exemple: background-color => backgroundColor
    let myPara= document.querySelector("p");
    myPara.style.backgroundColor="lightgray";
    myPara.style.color="white";
    myPara.style.padding="10px";

//manipulating attributes and classes:
    let myLink= document.querySelector("a");
    myLink.href="https://www.google.com"; // changes the href attribute of an anchor element

    let myParagraphs= document.querySelectorAll("p");
    //classList: adds, removes, toggles classes of an element
    myParagraphs[1].classList.add("myTest"); // adds a class to an element
    myParagraphs[1].classList.remove("myTest"); // removes a class from an element
    myParagraphs[1].classList.toggle("myTest"); // toggles a class on and off (if exists removes it, if not adds it)

//Events: // (event, what to do when event happens)
    //click, mouseover, mouseout:
    let myButton= document.querySelector("#myButton2");
    myButton.addEventListener("click", function(){   // anonymous function
        alert("Button clicked");
    });

    myButton.addEventListener("click", clickMe); // calling a function when the event happens
    function clickMe(){
        alert("Button clicked");
    }

    myButton.addEventListener("mouseover", () => { // arrow function
        myButton.style.backgroundColor="lightblue";
    });

    let myBtn = document.querySelector("#myBtn");
    myBtn.addEventListener("click", () => {
        let name = document.querySelector("#myInput2").value;
        console.log(name);
        alert("Hello " + name);
    });

    myButton.addEventListener("mouseover", () => {
        myButton.style.backgroundColor="lightblue";
    });
    
    myButton.addEventListener("mouseout", () => {
        myButton.style.backgroundColor="lightgray";
    });

//creating and removing elements:
    //create the element: document.createElement("tagName")
    let myP= document.createElement("p");
    // set the text content of the element
    myP.textContent="Web Dev Summer Course";
    //style the element
    myP.style.backgroundColor="red";
    myP.style.color="white";
    myP.style.padding="10px";
    //add element to the page:
        //add first: parentElement.prepend(newElement)
        document.body.prepend(myP);
        //add last: parentElement.append(newElement)
        document.body.append(myP);
        //add before: referenceElement.before(newElement)
        myButton.before(myP);

