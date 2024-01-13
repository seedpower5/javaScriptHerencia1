// Crearemos la clase hija Directivo
function Directivo(nombre_completo, salario, cargo) {
    // Llamamos a los atributos de la clase Padre
    Trabajador.call(this, nombre_completo, salario);
    this._cargo = cargo || "escogido a dedo";
}

// Creamos la herencia de la clase
Directivo.prototype = Object.create(Trabajador.prototype);
Directivo.prototype.constructor = Directivo;

// Setters y Getters
Directivo.prototype.setCargo = function(cargo) {
    if (this.verificarTexto(cargo)) {
        this._cargo = cargo;
    }
};

Directivo.prototype.getCargo = function() {
    return this._cargo;
};

// Método que aumenta el salario multiplicándolo por 2
Directivo.prototype.aumentarSalario = function(aumento) {
    let resultado = Trabajador.prototype.aumentarSalario.call(this, aumento);
    this._salario = resultado * 2;
    return this._salario;
};

// Método de verificarTexto como Trabajador pero ahora verifica el cargo 
Directivo.prototype.verificarTexto = function(cargo) {
    return Trabajador.prototype.verificarTexto.call(this, cargo);
};

// Método de Trabajador añadiendo el cargo 
Directivo.prototype.toString = function() {
    let resultado = Trabajador.prototype.toString.call(this);
    resultado += " Puesto: " + this._cargo;
    return resultado;
};

// Ejemplo de prueba
let directivo1 = new Directivo("Ana Smith", 60000, "Gerente");

// Verificar el nombre completo y salario antes del aumento
console.log(directivo1.getNombreCompleto()); // Debería imprimir: Ana Smith
console.log(directivo1.getSalario()); // Debería imprimir: 60000

// Aumentar el salario y verificar el nuevo salario
directivo1.aumentarSalario(10000);
console.log(directivo1.getSalario()); // Debería imprimir el nuevo salario multiplicado por 2

// Verificar el cargo y la información completa del directivo
console.log(directivo1.getCargo()); // Debería imprimir: Gerente
console.log(directivo1.toString()); // Debería imprimir la información completa del directivo
