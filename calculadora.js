input1 = document.getElementById('numero1');
input2 = document.getElementById('numero2');

gustoPersona = [
    {comida:"arroz"},
    {color:"azul"}
]

vehiculo= {
    cantCauchos: 4,
    color: "rojo"
}
persona = {
    edad: 15,
    sexo: "F",
    estatura: 1.7,
    gustos: gustoPersona,
    vehiculo:  vehiculo
}

console.log(typeof persona.sexo.isEmpty())

test = function(){
    return false
}
    input1.addEventListener('keyup',function(event){
        console.log(this.value)
        if(event.key == "," ) {
            str = this.value;
            this.value = parseFloat(str.replace(",","."))
        };

        if((event.key==2 && event.key==3) && test() && event.key.isNull()){
            console.log('se presiono la tecla numero 2')
        }else if(event.key=="azul"){
            console.log('se presiono la tecla azul 2')
        }
        else{
            console.log("no se presiono la tecla numero 2")
        }
    })


    input2.addEventListener('keyup',function(event){
        console.log(this.value)
        if(event.key == "," ) {
            str = this.value;
            this.value = parseFloat(str.replace(",","."))
        };
    })



function suma(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    
    var resultado = numero1 + numero2;

    document.getElementById(`resultado`).value = resultado; 
}