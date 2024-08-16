/* Realizar programa para taller de motores. Clasificar motores en eléctricos, explosión o vapor.
Por ahora sólo eléctrico. Se clasifican según tipo de corriente (CC, CA).
Estructura

[Motores](serial, fabricante){datosMotor()}
    <-> [Eléctricos](potencia, corriente){tipoCorriente()}
        -> [CC](voltaje, tipo)
        -> [CA](fases, frecuencia)

Método "datosMotor" retorna datos del motor (serial, fabricante)
Método "tipoCorriente"  retorna tipo de corriente
2 Instancias de cada 1
*/
function separador(){
    console.log("|---------------------------------------------------|")
}

class Motores {
    constructor(serial, fabricante) {
        this.serial = serial;
        this.fabricante = fabricante;
    }
    datosMotor(){
        return `Mi serial es ${this.serial}, y fui fabricado por ${this.fabricante}.`;
    }
}

class Electricos extends Motores {
    constructor(serial, fabricante, potencia, corriente){
        super(serial, fabricante)
        this.potencia = potencia;
        this.corriente = corriente;
    }
    tipoCorriente(){
        return `mi tipo de corriente es ${this.corriente}`
    }
}

class CC extends Electricos{
    constructor(serial, fabricante, potencia, corriente, voltaje, tipo){
        super(serial, fabricante, potencia, corriente);
        this.voltaje = voltaje;
        this.tipo = tipo;
    }
}

class CA extends Electricos{
    constructor(serial, fabricante, potencia, corriente, fases, frecuencia){
        super(serial, fabricante, potencia, corriente);
        this.fases = fases;
        this.frecuencia = frecuencia;
    }
}
// serial, fabricante, potencia, corriente, fases, frecuencia
const motorCC1 = new CC("1000", "Motoritos", "suave", "CC", "una buena cantidad", "baja")
const motorCA1 = new CA("1010", "Motorotes", "brigida", "CA", "caleta", "1MHz")
const motorCC2 = new CC("1001", "Motorito", "no tan suave", "CC", "una buena cantidad", "alta")
const motorCA2 = new CA("1012", "Motorotes", "brigidita", "CA", "varias", "5MHz")

console.log(motorCC1)
console.log(motorCA1)
separador()
console.log(motorCC2)
console.log(motorCA2)
separador()
console.log(motorCC1.datosMotor(), motorCC1.tipoCorriente())
console.log(motorCA1.datosMotor())
separador()
console.log(motorCA2.datosMotor(), motorCA2.tipoCorriente())
console.log(motorCC2.datosMotor())
