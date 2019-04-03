
let botaoResolverEl = document.querySelector('#resolver')
botaoResolverEl.addEventListener('click', function() {
    let a = document.querySelector('#coeficiente-a')
    let b = document.querySelector('#coeficiente-b')
    let c = document.querySelector('#coeficiente-c')
    let delta = document.querySelector('#resultado-delta')
    let x1 = document.querySelector('#resultado-x1')
    let x2 = document.querySelector('#resultado-x2')
    let qtdRaizes = document.querySelector('#resultado-qtdRaizes')
    let sentidoU = document.querySelector('#resultado-sentidoU')
    let verticeX = document.querySelector('#resultado-verticeX')
    let verticeY = document.querySelector('#resultado-verticeY')

    if(a.value !== 0){
        delta.value = Math.pow(b.value, 2) - 4*a.value*c.value

        //Calculando as raízes
        if(delta.value > 0) {
            console.log("Δ > 0")
            x1.value = (-b.value + Math.sqrt(delta.value) ) / 2*a.value
            x2.value = (-b.value - Math.sqrt(delta.value) ) / 2*a.value
            qtdRaizes.value = '2 Diferentes'
            verticeX.value = -b.value / 2*a.value
            verticeY.value = -delta.value / 4*a.value
        }else if(delta.value == 0){
            console.log("Δ = 0")
            x1.value = (-b.value + Math.sqrt(delta.value) ) / 2*a.value
            x2.value = (-b.value - Math.sqrt(delta.value) ) / 2*a.value
            qtdRaizes.value = '2 Iguais'
            verticeX.value = x1.value
            verticeY.value = x2.value
        }else{
            console.log("Δ < 0")
            console.log(delta.value)
            qtdRaizes.value = 'Nenhuma'
            x1.value = ''
            x2.value = ''
            verticeX.value = ''
            verticeY.value = ''
        }

        sentidoU.value = a.value > 0 ? 'CIMA' : 'BAIXO'
    }else{
        delta.value = ''
        x1.value = ''
        x2.value = ''
        qtdRaizes.value = ''
        sentidoU.value = ''
        verticeX.value = ''
        verticeY.value = ''
        window.alert('NUNCA dividirás por 0(zero)')
    }
});