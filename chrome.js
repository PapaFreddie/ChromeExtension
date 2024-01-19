    // ChromeExtension Step1: Log out 'button clicked' when the user clicks the save button---create function
 /*function save(){
    console.log('Button clicked from save function!')
 } */
 // ChromeExtension Step3: Create myLeads array and inputEl
      // required: create two varibales; 
            //myLeads should be assigned to anm empty array
            //inputEl should be assigned to the text input

 //let myLeads = ['www.awesomelead.com', 'www.epiclead.com', 'www.greatlead.com']
 let myLeads = []  //set myLeads to be empty array
 let oldLeads = []
 const inputEl = document.querySelector('#input-el')
 const inputBtn = document.querySelector('#input-btn')  ///const cannot be reassigned
 const ulEl = document.querySelector('#ul-el') // ChromeExtension Step&: Create unordered list and grab unordered list and store in const variable ulEl

 const deleteBtn = document.querySelector('#delete-btn') //ChromeExtension Step21: grab the delete btn and store in deleteBtn variable

 // ChromeExtension Step24: Create the tabBtn
const tabBtn = document.querySelector('#tab-btn') //ChromeExtension Step25: grab the save tab button and store in tabBtn variable

 //ChromeExtension Step19: get the leads from local storage
    //required: get the leads from the local storage, store iti in a variable leadsFromLocalStorage and log out the variable
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
//ChromeExtension Step20: truthy and falsey statements: check localstorage before rendering
//required: check if leadsfromlocalstorage is truthy. if so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// ChromeExtension Step26: Listen for clicks on tabBtn. log Fred's URL to the console


tabBtn.addEventListener('click', function() {

        // ChromeExtension Step25: How to get the current tab
                //grab url of the current tab
                //how to use chrome api to get the tab
                        //chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

                       // })
                            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                                   // ChromeExtension Step25: save tab url
                                        myLeads.push(tabs[0].url) ///first push it to myLeads array
                                        localStorage.setItem('myLeads', JSON.stringify(myLeads))
                                        render(myLeads)

                                        //console.log(tabs[0].url)


                            })


     


})



//renderLeads()
// ChromeExtension Step: 24: Refactor renderLeads() to use a parameter
    // Required: Refactor renderLeads() so that it takes a parameter, leads, that it uses instaed of the global myLeads variable. rememebr to update all the invocations of the functions as well.
function render(leads){
    ///ChromeExtension Step11: improving the performance of our chromeExtension
//required: step11(a): create a variable, listItems, to hold all the HTML for the list items and assign it to an empty string to begin with
let listItems = ''

for (let i = 0; i < leads.length; i++){   // ChromeExtension Step6: use a for loop to logout leads // required: logout the items in the muLeads array using a for loop
    //ulEl.textContent += myLeads[i] + ' '//ChromeExtension Step8: render the leads in the unorderedlist // required: render the leads in unordered list using ulEl.

    //step11(b): add/concanate the item to the listItems variable instaed of ulEl.innerHTML
            //listItems += '<li>' + myLeads[i] + '</li>'

            // ChromeExtension Step14: add the <a> tag
                //required: wrap the lead in an anchor tag <a> inside the <li> and make the link open in new tab
                //listItems += '<li><a target = "_blank" href = "#"> ' + myLeads[i] + '</a></li>'//wrap anchor tag. the target = '_blank' is used to command opening of the link in another tab
                //ChromeExtension Step15: template strings (backspace)PP
                listItems += 
                        `
                            <li>
                                <a target = "_blank" href = "${leads[i]}"> 
                                 ${leads[i]} 
                                </a>
                            </li>
                        `



//ulEl.innerHTML += '<li>' + myLeads[i] + '</li>'//ChromeExtension Step9: rendering ordered list <li> using innerHtml property

/// ChromeExtension Step10: use createElement() and append() instead of innerHTML. required: create element, set textContent and append ul           
        //const li = document.createElement('li') //creating element
        //li.textContent = myLeads[i] //setting textcontent
        //ulEl.append(li)
}

// step11(c):  render the listItems inside the unordered list using ulEl.innerHTML
            ulEl.innerHTML = listItems

}



//ChromeExtension step22:  listen for double clicks on delete button. when clicked, clear localstorage, myleads and DOM
deleteBtn.addEventListener('dblclick', function() {    ///we use dblclick for double click
    localStorage.clear() //clears local storage
    myLeads = [] ///set myLeads to empty array when double clicking delete btn to clear myleads
    render(myLeads) //this clears the DOM
})



 //ChromeExtension Step16: What is localStorage
//your first localstorage
//localStorage.setItem('myLeads', 'www.example.com') 
console.log(localStorage.getItem('myLeads')) //this code runs because the browser remembers this line of code localStorage.setItem('myLeads', 'www.example.com') 



 // ChromeExtension Step2: Refactor to addEventListener method/function
inputBtn.addEventListener('click', function(){

  // ChromeExtension Step4: Push to myLeads array. When the user clickes the save button, the lead is pushed to myLeads array
  // required: push the value 'www.awesomelead.com' to myLeads when input is clicked.

        // myLeads.push('www.awesomelead.com')
        //console.log(myLeads)


  // ChromeExntension Step5: pushing the value from the input field to myLeads array
    //required: push the value from inputEl into myLeads array instead of the hardcoded 'www.awesomelead.com'
    myLeads.push(inputEl.value) 

    // ChromeExtension Step13: clearing the input field
    inputEl.value = '' //clear the input field after texting the lead

    //ChromeExtension Step18: Saving the leads array to local storage 
        // required: //save the myLeads array to localStorage
        //PS: remmember JSON.stringify()
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
    

    //chromeExtension Step12(b): call the renderLeads() function
    render(myLeads)

    console.log(localStorage.getItem('myLeads'))

})

//ChromeExtension step12: create the render function
//chromeExtension Step12(a): wrap the code below in a renderLeads() function




                ///challenge//
                //required: gran thre box from the DOM and store it in a variable
                        //  add a click event listener to the box
                        //  logout 'i want to open the box' when its clicked

                        let openBtn = document.querySelector('#open-btn')
                        openBtn.addEventListener('click', function () {
                            console.log('I want to open box')


                        })

////notes: when to declare varibale using const and let

            //example
            const playerName  = 'Fred'
            let credits = 30  /// in this example, the credits can change but the name of the player can't be changed

                    ///challenge
                    // //require: which varibales below should be changed from let to const
                    const basePrice = 520 // from let basePrice = 520 
                    const discount = 120 // from let discount = 120
                    let shippingCost = 12
                    let shippingTime = '5 - 12 days'
                    
                    //oops! turns out the shipping will be more complex
                    shippingCost = 15
                    shippingTime = '7 - 14 days'

                    ///calculate the full price 
                    const fullPrice = basePrice - discount + shippingCost// from let fullPrice = basePrice - discount + shippingCost

                    //finally notify the customer
                    console.log('Total cost: ' + fullPrice + '. It will arrive in ' + shippingTime)


            ///innerHTML property
                        //challenge
                            //writing innerHTML
                            //required: use .innerHTML to render a buy button inside the div container

                        const container = document.querySelector('.container')
                        container.innerHTML += '<button onclick =" buy() " >Buy!</button>' //required: write a function, when button is clicked, render a parsagraph under the button in the container that says 'thank you for buying

                        function buy(){
                            container.innerHTML += '<p>Thank you for buying!</p>'
                            console.log(container.innerHTML)
                        }


            ///challenge1: writng template/literal strings js
                        const recipient = 'james'
                        //required: refactor the email string to use template strings
                        //const email = 'Hey' + ' '+ recipient + '!' +   ' ' + 'How is it going? Cheers Fred'

                        const email = `Hey ${recipient}! How is it going? Cheers Fred.`
                        console.log(email)

            //challenge2: make template string even more dynamic
            const reciever = 'Odhiambo'
              //required: create a new variable, sender, and set its value to any name
            const sender = 'Papa'
              //use yojur sender variable instaed of 'fred'

            const emaiil = `Hey ${reciever}! How is it going? Cheers ${sender}`
            console.log(emaiil)

            //challenge3: template strings on multiple lines
            const reciepiente = 'Odhis'
            const senderr = 'Papa'
            //required: break the email string into multiple lines
            const emaili = 
            `
                Hey ${reciepiente}! 
                How is it going? 
                Cheers ${senderr}.
            `

            console.log(emaili)

//NB: JSON === JavaScript Object Notation --> used to store and send data to browsers

///Deploying the App


                        //The local storage challenge
                        // required: save a key value pair in localStorage
                                    //refresh the page. get the value and log it to the console
                                    // clear the localstorage

                        //hint: localStorage.setItem(key, value)
                               //localStorage.getitem(key)
                               //localStorage.clear()
                               //ps: both key and value need to be strings

                        //localStorage.getItem("myName", "fred")
                        let name = localStorage.getItem("myName")//nb: local storage is primitive type of data as it can onyl store strings
                        console.log(name)
                        //localStorage.clear()

//ChromeExtension Step18: storing arrays in local storage
  // we use JSON.stringfy() and JSON.parse() methods. json.stringfy() converts the arrays to strings and JSON.parse() converts strings to arrays.   note: the .push() only works on arrays and not strings
// typeof --> specifies which type of data is this, e.g string, boolean, number, array etc

// challenge

let myLeadss = `["www.awesomelead.com"]`
        //required: turn the myLeads string into an array
        myLeadss = JSON.parse(myLeadss)
        //push the new value to the array
        myLeadss.push('www.leads.com')
        //turn the array into a string again
        myLeadss = JSON.stringify(myLeadss)
        //console.log the string using typeof to verify that its a string
        console.log(typeof myLeadss)


//ChromeExtension Step20: truthy and falsey statements

//example
    const credit = 0

    if (credit > 0){
        console.log('Lets Play')
    }else{
        console.log('Sorry, cant play')
    }

    ///falsey values : false, 0, "", null, undefined, NaN(not a number)
    // difference btn null and undefined is NULL is how developers signalize emptiness and UNDEFINED is how javaScript signalize emptiness

    ///challenge: guess whether the value is thruthy or falsey

            //let trueOfFalse = Boolean('hello')
            //console.log(trueOfFalse)   ///returns true 

            //let trueOfFalse = Boolean('')
            //console.log(trueOfFalse) // this returns false because nothing has been set. its empty string

            console.log(Boolean('')) //false
            console.log(Boolean('0')) //true
            console.log(Boolean(100)) //true
            console.log(Boolean(null)) //false
            console.log(Boolean([0])) //true
            console.log(Boolean(-0)) //false



/// Chrome Extension step23: Function Parameters
    //writing function parameters

                // const welcomeEl = document.querySelector('#welcome-el')

                    //function greetUser(name){
                    // welcomeEl.textContent = 'Welcome back ' +  name
                // }

                    //greetUser('Fred')

/// Functions with multiple parameters
                //const welcomeEl = document.querySelector('#welcome-el')

                //function greetUser(greeting, name){
                    //welcomeEl.textContent = greeting + ', ' + name
                //}
                //greetUser('Hello', 'Fred')

                const welcomeEl = document.querySelector('#welcome-el')

                function greetUser(greeting, name, emoji){
                    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
                }
                greetUser('Hello', 'Fred', 'hand emoji')


// Numbers as function parameters
        // create a function, add(), that adds two numbers together and returns the sum

                    function add(num1, num2){
                        return num1+ num2 ///or sum = num1 + num2 then console.log(sum)
                    }
                    add(3, 4)


// Arguments vs Parameters
                    function add(num1, num2) ///parameters. They are inside the function
                    {
                        return num1+ num2 ///or sum = num1 + num2 then console.log(sum)
                    }
                    add(3, 4) ////arguments. They are outside the function.


/// Arrays as Parameters
    /// Required: Create a function, getFirst(arr), that returns the first item in the array
                    
                    function getFirst(arr){
                        return arr[0]
                    }
                    let first = getFirst(['Hello', 'Bye', 'sasa'])
                    console.log(first)
    /// Call it with an array as an argument to verify that it works
// ChromeExtension Step25: How to get the current tab



///RECAP//
            


