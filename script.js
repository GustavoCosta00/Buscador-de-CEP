let submt_cep = document.getElementById('submt_cep')
let display_card = document.getElementById('display_card')
let close_card = document.getElementById('close_card')

// Pegando os itens do card
let cep = document.getElementById('show_cep')
let localidade = document.getElementById('localidade')
let bairro = document.getElementById('bairro')
let uf = document.getElementById('uf')
let logradouro = document.getElementById('logradouro')
let ddd = document.getElementById('ddd')

submt_cep.addEventListener('click',serch_cep)

close_card.addEventListener('click',close_card_function)

function serch_cep(){
    let number_cep = document.getElementById('number_cep')
    let int_numer_cep = parseInt(number_cep.value)

    if(int_numer_cep){
        let url_cep = `https://viacep.com.br/ws/${int_numer_cep}/json/`
    
        fetch(url_cep,)
            .then(res=> res.json())
            .then(data => show_cep(data))
    
        console.log(number_cep.value)
    
        display_card.style.display = 'block'
    }else{
        alert('O campo está vazio')
    }

}

function close_card_function(){
    display_card.style.display = 'none'
}

function show_cep(data){
    class information_cep {
        constructor(){
            ({
                cep: this.cep,
                bairro: this.bairro,
                ddd: this.ddd,
                localidade: this.localidade,
                logradouro: this.logradouro,
                uf: this.uf
            } = data)
        }
    }

    const show_informations = new information_cep();

    console.log(show_informations)

    cep.innerText = "CEP: " + show_informations.cep
    localidade.innerText = 'Localidade: ' + show_informations.localidade
    bairro.innerText = 'Bairro: ' +show_informations.bairro
    uf.innerText = 'UF: ' + show_informations.uf
    logradouro.innerText = 'Logradouro: ' + show_informations.logradouro
    ddd.innerText = 'DDD: ' + show_informations.ddd

}


