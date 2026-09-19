document.querySelector('input').addEventListener('input', debounce(function(event) {
    console.log('Input value:', event.target.value);
}, 300));

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
} 

function throttle(func,delay){
    let timmer=0;
    return function(...args){
        let curr= Date.now();
        if(curr-timmer>=delay){
            timmer=curr;
            func(...args);
        }
    };
}

document.querySelector('#id2').addEventListener('input', throttle(function(event) {
    console.log('Input value:', event.target.value);
}, 300));