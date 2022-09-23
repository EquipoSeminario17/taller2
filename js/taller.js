class calcular{
    constructor(){
        this.empl = new Empleado;
    }
    darEmpleado(){
        return this.empl
    }
    nuSalario(sal){
        this.empl.caSalario(sal);
    }
    calcularPrestaciones(prestacion1, prestacion2){
        this.empl.caPrestaciones
    }
}

class Empleado{
    constructor(nombre, apellido, sexo ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo ;
        this. ingreso = 0;
        this. sala=0;
        this.calculoPrestaciones=0;

    }
    darNombre(){
        return this.nombre;
    }
     darApellido(){
        return this.apellido;
     }
     darSexo(){
        return this.sexo;
     }
     darIngreso(){
        return this.ingreso
     }
     darSalario(){
        return this.salario;
     }
     darCalculoPrestaciones(){
        return this.calculoPrestaciones;
     }
     caSalario(sal){
        this.salario = sal;
     }

     caPrestaciones(prestacion1, prestacion2){
        this.calculoPrestaciones = (prestacion1*prestacion2)/12;

     }

}
 let calc = new Calculos();

 function salario_btn(){
 let sala = document.getElementById('salario1').value;
 calc.nuSalario(parseInt(sala));
 const s= calc.darEmpleado().darSalario();
 alert('nuevo Salario $' + sala );
 }

 function prestaciones_btn(){
    let psal = document.getElementById("salario1").value;
    let pant = document.getElementById("calcantiguedad").value;
    calc.calcularPrestaciones(psal, pant);
    const p = calc.darEmpleado().darCalculoPrestaciones();
    document.getElementById("calcprestaciones").value=p;
 }


function f_fecha() {
    var fecha = document.getElementById("fecha").value;
    var fechaNac = new Date(fecha);
    var mesF = fechaNac.getMonth() + 1;
    var anioF = fechaNac.getFullYear();
    var diaF = fechaNac.getDate();




    var fechaAct = new Date();
    var mesH = fechaAct.getMonth() +1;
    var anioH = fechaAct.getFullYear();
    var diaH = fechaAct.getDate();

    var diasSum = diasFin(anioF,mesF);

     var mesAdicional =0;
     if ( diaF > diaH){
        diaH = parseInt(diaH) + parseInt(diasSum);
        mesAdicional =1;
     }
     var dias =diaH - diaF;

     var anioAdicional = 0;
     if (mesF > mesH)
     {
        mesH = parseInt(mesH) +12;
        anioAdicional = 1;
     }

     var meses = parseInt(mesH) -(parseInt(mesF) + parseInt(mesAdicional));

     var anios = parseInt(anioH) - (parseInt(anioF) + parseInt(anioAdicional));

     
document.getElementById('calcularedad').value=anios+" años";


}
function diasFin(anio, mes)
{
    var anionAux =anio;
    if(anio < 12)
    {
        var mesSig =parseInt(mes) +1;
    

}
else {
    var mesSig =1;
    anionAux = anio + 1;
}
 var fecha= anionAux+"-"+mesSig+"+01";
 ms =Date.parse(fecha);
 fechaD = new Date(ms);
 fechaD.setDate(fechaD.getDate() -1);
 var diaH = fechaD.getDate();

 return diaH;
}
function btn_ingreso(){

    var fecha = document.getElementById("ingreso").value;
    var fechaNac = new Date(fecha);
    var mesF = fechaNac.getMonth() + 1;
    var anioF = fechaNac.getFullYear();
    var diaF = fechaNac.getDate();




    var fechaAct = new Date();
    var mesH = fechaAct.getMonth() +1;
    var anioH = fechaAct.getFullYear();
    var diaH = fechaAct.getDate();

    var diasSum = diasFin(anioF,mesF);

     var mesAdicional =0;
     if ( diaF > diaH){
        diaH = parseInt(diaH) + parseInt(diasSum);
        mesAdicional =1;
     }
     var dias =diaH - diaF;

     var anioAdicional = 0;
     if (mesF > mesH)
     {
        mesH = parseInt(mesH) +12;
        anioAdicional = 1;
     }

     var meses = parseInt(mesH) -(parseInt(mesF) + parseInt(mesAdicional));

     var anios = parseInt(anioH) - (parseInt(anioF) + parseInt(anioAdicional));

     
document.getElementById('calcantiguedad').value=anios+" años";

}