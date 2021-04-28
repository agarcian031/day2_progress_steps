// initialize variables 
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// will index the active circle 
let currentActive = 1; 

// add an event listener to the next button that will increment and stop at 4. 
next.addEventListener('click', ()=>{
  currentActive++

  if(currentActive > circles.length){
    currentActive = circles.length
  }

  update()
})

//  add a event listener that will decrement on the prev button and set the index to one to prevent negative 
prev.addEventListener('click', ()=>{
  currentActive--

  if(currentActive < 1){
    currentActive = 1
  }

  update()

})

// if the index is less than the current active, it will add the active class onto the circle

function update(){
  circles.forEach((circle, idx) => {
    if(idx < currentActive){
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  // get active circles 
const actives = document.querySelectorAll('.active')

progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

if(currentActive === 1 ){
  prev.disabled = true  
} else if(currentActive === circles.length){
  next.disabled = true
} else {
  prev.disabled = false 
  next.disabled = false 
}


}