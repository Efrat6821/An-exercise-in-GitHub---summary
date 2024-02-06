const h1_ = document.getElementById('h1_');
const btn = document.getElementById('btn');
let num = 1;

const func = (num) =>{
    h1_.innerHTML=num;
}

btn.onclick = () => {func(num++)};
