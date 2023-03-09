const incrementBtn = document.querySelector('#increment')
const decrementBtn = document.querySelector('#decrement')

const counterEl = document.getElementById('counter')

const ulElement = document.getElementById('list-items')

let counter = 0 


function incrementCounter(){
    // const counterEl = document.getElementById('counter')
    counter++
    counterEl.innerText = counter

    
    //*** create an element 
    const li = document.createElement('li')
    li.setAttribute('data-counter',counter)
    if(counter%2==0){
        // li.setAttribute('class','red')
        li.style.background='red'
        li.style.padding='10px'
    }else{
        li.setAttribute('class','yellow')
        li.style.padding='20px'
    }
    li.innerHTML = '<b>Sentence </b>' + counter
    // const textNode = document.createTextNode('Sentence ' + counter)
    // li.appendChild(textNode)

    //*** append that element
    ulElement.appendChild(li)
}

function decrementCounter(){
    // const counterEl = document.getElementById('counter')
    const li =ulElement.querySelector('[data-counter="'+counter+'"]')
    const number=parseInt(li.getAttribute('data-counter'),10)
    // if(number%2==0){
    //     li.remove()
    // }
    
    // if(counter%2==0){
    //     li.remove()
    // }else{
    //     li.remove()
    // }

    li.remove()
    counter--
    counterEl.innerText = counter
}

incrementBtn.addEventListener('click',incrementCounter)
decrementBtn.addEventListener('click',decrementCounter)