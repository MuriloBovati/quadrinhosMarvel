
const randomRareNumber = () => {
    const numbersRare = []
    for(let count = 0; count <= 10; count ++){
        while(true){
            const randomNumber = Math.floor(Math.random() * 100 + 0)
            if(!(randomNumber in numbersRare)){
                numbersRare.push(randomNumber)
                break
            }
        }
    }
    return numbersRare
}

const setSessionstorage = (namelistHq ,arraylistHq) =>{
    if(sessionStorage.getItem(namelistHq) == null){
        sessionStorage.setItem(namelistHq, JSON.stringify(arraylistHq))
    }

}

const listQuadrinho = (listaGeral) => {
    const numbersRare = randomRareNumber()
    const listaGeralRaro = []
    const newlistaGeral = listaGeral.slice() 
        numbersRare.forEach(element => {
            listaGeralRaro.push(listaGeral[element])
            newlistaGeral.splice(element, 1)
    });
    setSessionstorage('QuadrinhosRaros', listaGeralRaro)
    setSessionstorage('QuadrinhosComun', newlistaGeral)
}


export default listQuadrinho
