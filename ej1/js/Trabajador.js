//utilizamos programación orientada a objetos mediante la estructura : función constructora
function Trabajador (nombre_completo, salario) 
{
     //atributos de la clase
      this._nombre_completo = nombre_completo||"";
      this._salario = salario||0;
    
    //llamo a los Setters y Getters
    //llamo a los métodos de la clase 
}
  //Setters y Getters 
  function setNombreCompleto(nombre_completo)
  {
    if(verificarTexto(nombre_completo))
    {
        this._nombre_completo=nombre_completo;
    }
  }
  function getNombreCompleto()
  {
    return this._nombre_completo;
  }
  function getSalario()
  {
    return this._salario;
  }
  //Metodos

  //metodo que verifica valor correcto del nombre introducido
  function verificarTexto(nombre_completo)
  {
    let resultado=false;
    if(nombre_completo.length>=6&&nombre_completo.indexOf(" "))
    {
        resultado= true;
    }
  }
  //metodo que muestra mensaje con la informacion de un trabajador 
  function toString()
  {
    let cadenaTexto = "Trabajador"+this._nombre_completo+"cobra: "+this._salario;
    return cadenaTexto;
  }
  //metodo para verificar que salario mayor a 0
  function verificarSalario(salario)
  {
    let resultado = false;
    if(salario>0)
    {
        resultado = true
    }
  }
  //metodo para aumentar el salario de un trabajador
  function aumentarSalario(aumento)
  {
    if(verificarSalario(salario))
    {
        this._salario=this._salario+aumento;
    }
    return this._salario
  }