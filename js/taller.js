class Calculos{
	constructor(){
		this.emple = new Empleado;
	}

	darEmpleado(){
		return this.emple;
	}

	nuSalario(sal){
		this.emple.casalario(sal);
	}

	calcularEdad(anoN,mesN,diaN,anoA,mesA,diaA){
		this.emple.caedad(anoN,mesN,diaN,anoA,mesA,diaA);
	}

	calcularAntiguedad(anoI,mesI,diaI,anoA,mesA,diaA){
		this.emple.cantiguedad(anoI,mesI,diaI,anoA,mesA,diaA);
	}

	calcularPrestaciones(presS,presA){
		this.emple.caprestaciones(presS,presA);
	}



}

class Empleado{
	constructor(nomre,apellido,sexo){
		this.nombre = nombre;
		this.apellido = apellido;
		this.sexo = sexo;
		this.nacimiento = 0;
		this.ingreso = 0;
		this.sala = 0;
		this.calculoEdad = 0;
		this.calculoAntiguedad = 0;
		this.calculoPrestaciones = 0;
	


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

	darNacimiento(){
		return this.nacimiento;
	}

	darIngreso(){
		return this.ingreso;
	}

	darSalario(){
		return this.salario;
	}

	darCalculoEdad(){
		return this.calculoEdad;
	}

	darCalculoAntiguedad(){
		return this.calculoAntiguedad;
	}

	darCalculoPrestaciones(){
		return this.calculoPrestaciones;
	}

	

	casalario(sal){
		this.salario = sal;
	}

	caedad(anoN,mesN,diaN,anoA,mesA,diaA){
		let eda = anoA - anoN;
		if (mesA > mesN) {
			eda--;
	        this.calculoEdad = eda+1;
	    } else if (mesA < mesN) {
	        	eda--;
	            this.calculoEdad = eda;
	        }else if(mesA == mesN){
	        		if (diaA < diaN) {
	        			eda--;
	            		this.calculoEdad = eda;
	    			} else{
	    				eda--;
	            		this.calculoEdad = eda+1;
	    			}
	    	}
	}

	cantiguedad(anoI,mesI,diaI,anoA,mesA,diaA){
		let anti = anoA - anoI;
		if (mesA > mesI) {
			anti--;
	        this.calculoAntiguedad = anti+1;
	    } else if (mesA < mesI) {
	        	anti--;
	            this.calculoAntiguedad = anti;
	        }else if(mesA == mesI){
	        		if (diaA < diaI) {
	        			anti--;
	            		this.calculoAntiguedad = anti;
	    			} else{
	    				anti--;
	            		this.calculoAntiguedad = anti+1;
	    			}
	    	}
	}

	caprestaciones(presS,presA){
		this.calculoPrestaciones = (presS*presA)/12;
	}

	
}

let cal = new Calculos();

function salario_btn(){
	let sala = document.getElementById('salario').value;
	cal.nuSalario(parseInt(sala));
	const s = cal.darEmpleado().darSalario();
	alert("Nuevo salario $"+sala);
}

function edad_btn(){
	let fechaNacimiento = document.getElementById('nacimiento').value;
    const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    cal.calcularEdad(anoNacimiento, mesNacimiento, diaNacimiento, anoActual, mesActual, diaActual);
    let anio = cal.darEmpleado().darCalculoEdad();
    document.getElementById('caledad').value = anio ;
}

function antiguedad_btn(){
	let fechaIngreso = document.getElementById("ingreso").value;
    const anoIngreso = parseInt(String(fechaIngreso).substring(0, 4));
    const mesIngreso = parseInt(String(fechaIngreso).substring(5, 7));
    const diaIngreso = parseInt(String(fechaIngreso).substring(8, 10));

    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    cal.calcularAntiguedad(anoIngreso, mesIngreso, diaIngreso, anoActual, mesActual, diaActual);
    let a = cal.darEmpleado().darCalculoAntiguedad();
    document.getElementById('calantig').value = a;
}

function prestaciones_btn(){
	let psal = document.getElementById("salario").value;
	let pant = document.getElementById("calantig").value;
	cal.calcularPrestaciones(psal, pant);
	const p = cal.darEmpleado().darCalculoPrestaciones();
	document.getElementById('calpresta').value = p;
}

