function createH1Element(text) 
{
    var h = document.createElement("H1");
    var t = document.createTextNode(text); 
    h.appendChild(t); 
    document.body.appendChild(h);
}
var money = 50 
const bichos = ['nada','Avestruz','Avestruz','Avestruz','Avestruz','Águia','Águia','Águia','Águia',
'Burro','Burro','Burro','Burro','Borboleta','Borboleta','Borboleta','Borboleta',
'Cachorro','Cachorro','Cachorro','Cachorro','Cabra','Cabra','Cabra','Cabra',
'Carneiro','Carneiro','Carneiro','Carneiro','Camelo','Camelo','Camelo','Camelo',
'Cobra','Cobra','Cobra','Cobra','Coelho','Coelho','Coelho','Coelho',
'Cavalo','Cavalo','Cavalo','Cavalo','Elefante','Elefante','Elefante','Elefante',
'Galo','Galo','Galo','Galo','Gato','Gato','Gato','Gato',
'Jacaré','Jacaré','Jacaré','Jacaré','Leão','Leão','Leão','Leão',
'Macaco','Macaco','Macaco','Macaco','Porco','Porco','Porco','Porco',
'Pavão','Pavão','Pavão','Pavão','Perú','Perú','Perú','Perú',
'Touro','Touro','Touro','Touro','Tigre','Tigre','Tigre','Tigre',
'Urso','Urso','Urso','Urso','Veado','Veado','Veado','Veado','Vaca','Vaca','Vaca','Vaca']

function resultadoBicho(){
    let r = Math.floor(Math.random() * 100)
    return r
}


const playButton = document.querySelector('button.jogar')
const input1 = document.querySelector('input.bicho')
const input2 = document.querySelector('input.valor')
var carteira = document.querySelector('h1.dinheiro')
carteira.innerHTML = money

playButton.onclick = function(){
    money-= input2.value
    carteira.innerHTML = money
    let resultado = resultadoBicho()
    console.log(resultado)
    FinalBicho = bichos[resultado]
    if (FinalBicho == input1.value){
        alert("você ganhou")
    }
    else{
        alert("você perdeu")
    } 
}

//document.writeln(`O RESULTADO FOI ${resultadoBicho()} `)

