let calculate = document.querySelector('.calculate');


calculate.addEventListener('click', ()=> {
    let result = document.querySelector('.result');
    let initial = document.querySelector('.initial').value;
    let quantity = document.querySelector('.quantity').value;
    let current = document.querySelector('.current').value;
    initial = Number(initial);
    quantity = Number(quantity);
    current = Number(current);
    if(initial=="" || quantity=="" || current=="") {
        result.style.color="#ecf0f1";
        result.innerHTML='uh-oh! Looks like you missed typing something.';
    } else if(initial > current) {
        let loss = (initial-current)*quantity;
        let perc = (loss/(initial*quantity))*100;
        perc=perc.toFixed(2);
        result.style.color="red";
        result.innerHTML='uh-oh! You made a loss of '+loss+', and the percentage loss is '+perc+'%';
    } else if (current > initial) {
        let profit = (current-initial)*quantity;
        let perc = (profit/(initial*quantity))*100;
        perc=perc.toFixed(2);
        result.style.color="green";
        result.innerHTML='yay! You made a profit of '+profit+', and the percentage profit is '+perc+'%';
    } else {
        result.style.color="#ecf0f1";
        result.innerHTML='yay! I guess. No profits, No loss.';
    }
});