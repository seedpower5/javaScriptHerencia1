// Jorge Balmori Arenas

//Tengo que crear un objeto literal por cada elemento del array y despues tengo que meter cada objeto literal dentro de un array
var datosImportados = [["Alejandro García",34,"Empleado"],["Rafael Costas",undefined,"Conserje"],["Gina Sota",39,undefined],["Edgar Ríos",undefined,undefined]];
var datosConvertidos = [];
//bucle que recorre el array
for (let i = 0; i < datosImportados.length-1; i++) 
{  
    //creamos el objeto literal
    var Trabajador ={};
       
        if(datosImportados[i][0]==undefined||datosImportados[i][0]=="")
        {
              console.log("vacio");
        }else
        {
            //si el valor no es undefined agregamos el atributo
            Object.defineProperty(Trabajador, 'nombreCompleto', 
            {
            value: datosImportados[i][0],
            writable: true,
            enumerable: true,
            configurable: true
            });
        }
        if(datosImportados[i][1]==undefined||datosImportados[i][1]=="")
        {
            console.log("vacio");
        }else
        {
            Object.defineProperty(Trabajador, 'salario', 
            {
            value: datosImportados[i][1],
            writable: true,
            enumerable: true,
            configurable: true
            });
        }
        if(datosImportados[i][2]==undefined||datosImportados[i][2]=="")
        {
            console.log("vacio");
        }else
        {
            Object.defineProperty(Trabajador, 'cargo', 
            {
            value: datosImportados[i][2],
            writable: true,
            enumerable: true,
            configurable: true
            });
        }   
        datosConvertidos.push(Trabajador);
        // console.log(Object.values(Trabajador));
    }     
        console.log(datosConvertidos);