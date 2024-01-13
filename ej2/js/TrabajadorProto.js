//realizaremos la construcción de una clase mediante prototype con herencia 
function Trabajador(nombre_completo, salario) {
    this._nombre_completo = nombre_completo || "";
    this._salario = salario || 0;
}

// Setters y Getters
Trabajador.prototype.setNombreCompleto = function(nombre_completo) {
    if (this.verificarTexto(nombre_completo)) {
        this._nombre_completo = nombre_completo;
    }
};

Trabajador.prototype.getNombreCompleto = function() {
    return this._nombre_completo;
};

Trabajador.prototype.getSalario = function() {
    return this._salario;
};

// Métodos

// Método que verifica valor correcto del nombre introducido
Trabajador.prototype.verificarTexto = function(nombre_completo) {
    let resultado = false;
    if (nombre_completo.length <= 6 && nombre_completo.indexOf(" ") !== -1) {
        resultado = true;
    }
    return resultado;
};

// Método para verificar que salario mayor a 0
Trabajador.prototype.verificarSalario = function(salario) {
    let resultado = false;
    if (salario > 0) {
        resultado = true;
    }
    return resultado;
};

// Método para aumentar el salario de un trabajador
Trabajador.prototype.aumentarSalario = function(aumento) {
    if (this.verificarSalario(this._salario)) {
        this._salario = this._salario + aumento;
    }
    return this._salario;
};

// Método que muestra mensaje con la información de un trabajador
Trabajador.prototype.toString = function() {
    let cadenaTexto = "Trabajador: " + this._nombre_completo + " salario: " + this._salario;
    return cadenaTexto;
};

// PRUEBA DEL CÓDIGO
// Crear un trabajador
let trabajador1 = new Trabajador("Juan Pérez", 50000);

// Obtener el nombre completo
console.log(trabajador1.getNombreCompleto()); // Debería imprimir: Juan Pérez

// Obtener el salario
console.log(trabajador1.getSalario()); // Debería imprimir: 50000

// Intentar establecer un nombre incorrecto (debería fallar)
trabajador1.setNombreCompleto("Ana"); // No debería cambiar el nombre

// Establecer un nombre correcto
trabajador1.setNombreCompleto("Ana Smith");
console.log(trabajador1.getNombreCompleto()); // Debería imprimir: Ana Smith

// Intentar aumentar el salario con un valor negativo (debería fallar)
console.log(trabajador1.aumentarSalario(-1000)); // No debería cambiar el salario

// Aumentar el salario correctamente
console.log(trabajador1.aumentarSalario(10000)); // Debería imprimir el nuevo salario

// Mostrar la información del trabajador
console.log(trabajador1.toString()); // Debería imprimir: Trabajador: Ana Smith salario: (nuevo salario)
