const InyectHTML = ( )=>{








    
    let $reference = document.querySelectorAll('[data-content]')
    $reference.forEach((el) => Controler(el,el.dataset.content))
} 
document.addEventListener('DOMContentLoaded',(e) => InyectHTML())