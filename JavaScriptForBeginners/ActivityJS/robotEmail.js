//Villa del pueblo
const caminos = [
    "Casa de Alicia-Casa de Bob", "Casa de Alicia-Cabaña",
    "Casa de Alicia-Oficina de Correos", "Casa de Bob-Ayuntamiento",
    "Casa de Daria-Casa de Ernie", "Casa de Daria-Ayuntamiento",
    "Casa de Ernie-Casa de Grete", "Casa de Grete-Granja",
    "Casa de Grete-Tienda", "Mercado-Granja",
    "Mercado-Oficina de Correos", "Mercado-Tienda",
    "Mercado-Ayuntamiento", "Tienda-Ayuntamiento"
];

//Rutas del pueblo
function construirGrafo(bordes) {
    let grafo = Object.create(null);
    function añadirBorde(desde, hasta) {
        if (grafo[desde] == null) {
            grafo[desde] = [hasta];
        } else {
            grafo[desde].push(hasta);
        }
    }
    for (let [desde, hasta] of bordes.map(c => c.split("-"))) {
        añadirBorde(desde, hasta);
        añadirBorde(hasta, desde);
    }
    return grafo;
}
const grafoCamino = construirGrafo(roads);

//Ubicacion de los pueblos y sus paquetes
class EstadoPueblo {
    constructor(lugar, paquetes) {
        this.lugar = lugar;
        this.paquetes = paquetes;
    }

    mover(destino) {
        if (!grafoCamino[this.lugar].includes(destino)) {
            return this;
        } else {
            let paquetes = this.paquetes.map(p => {
                if (p.lugar != this.lugar) return p;
                return { lugar: destino, direccion: p.direccion };
            }).filter(p => p.lugar != p.direccion);
            return new EstadoPueblo(destino, paquetes);
        }
    }
}

//Se crean nuevos objetos con el metodo muever de la aldea pero nos deja el antigua intacta
//mover hace que se entregue el paquete
let primero = new EstadoPueblo(
    "Oficina de Correos",
    [{ lugar: "Oficina de Correos", direccion: "Casa de Alicia" }]
);
let siguiente = primero.mover("Casa de Alicia");

console.log(siguiente.lugar);
// → Casa de Alicia
console.log(siguiente.parcels);
// → []
console.log(primero.lugar);
// → Oficina de Correos

//Object.freeze() lo utilizamos para que nuestros objetos no cambien, aunque puede ser tedioso, asi que la mejor opcion es omitir el objeto
let objeto = Object.freeze({ valor: 5 });
objeto.valor = 10;
console.log(objeto.valor);
// → 5

//Queremos que el robot sea capaz de almacenar y ejecutar planes
function correrRobot(estado, robot, memoria) {
    for (let turno = 0; ; turno++) {
        if (estado.paquetes.length == 0) {
            console.log(`Listo en ${turno} turnos`);
            break;
        }
        let accion = robot(estado, memoria);
        estado = estado.mover(accion.direccion);
        memoria = accion.memoria;
        console.log(`Moverse a ${accion.direccion}`);
    }
}

//La estrategia mas simple seria utilizar eventos ramdons donde por probalidad el llegara a todos los paquetes y todas las dirrecciones
function eleccionAleatoria(array) {
    let eleccion = Math.floor(Math.random() * array.length);
    return array[eleccion];
}

function robotAleatorio(estado) {
    return { direccion: eleccionAleatoria(grafoCamino[estado.lugar]) };
}
/*
Recuerda que Math.random () retorna un número entre cero y uno, pero siempre debajo de uno. Multiplicar dicho 
número por la longitud de un array y luego aplicarle Math.floor nos da un índice aleatorio para el array.
*/
//Crearemos un metodo estatico
EstadoPueblo.aleatorio = function (numeroDePaquetes = 5) {
    let paquetes = [];
    for (let i = 0; i < numeroDePaquetes; i++) {
        let direccion = eleccionAleatoria(Object.keys(grafoCamino));
        let lugar;
        do {
            lugar = eleccionAleatoria(Object.keys(grafoCamino));
        } while (lugar == direccion);
        paquetes.push({ lugar, direccion });
    }
    return new EstadoPueblo("Oficina de Correos", paquetes);
};
//Comencemos un mundo virtual.
correrRobot(EstadoPueblo.aleatorio(), robotAleatorio);
// → Moverse a Mercado
// → Moverse a Ayuntamiento
// → …
// → Listo en 63 turnos
//Opcion alterna craer una ruta para el robot
const rutaCorreo = [
    "Casa de Alicia", "Cabaña", "Casa de Alicia", "Casa de Bob",
    "Ayuntamiento", "Casa de Daria", "Casa de Ernie",
    "GCasa de Grete", "Tienda", "Casa de Grete", "Granja",
    "Mercado", "Oficina de Correos"
];
//Para que el robot haga uso de la ruta se espcifica el uso de la memoria
function robotRuta(estado, memoria) {
    if (memoria.length == 0) {
        memoria = rutaCorreo;
    }
    return { direction: memoria[0], memoria: memoria.slice(1) };
}
//EL robot es mas rapido se tomara un maximo de 26 turnos, 2 veces la ruta 13
runRobotAnimation(EstadoPueblo.aleatorio(), robotRuta, []);

//Busquedas de rutas
function encontrarRuta(grafo, desde, hasta) {
    let trabajo = [{ donde: desde, ruta: [] }];
    for (let i = 0; i < trabajo.length; i++) {
        let { donde, ruta } = trabajo[i];
        for (let lugar of grafo[donde]) {
            if (lugar == hasta) return ruta.concat(lugar);
            if (!trabajo.some(w => w.donde == lugar)) {
                trabajo.push({ donde: lugar, ruta: ruta.concat(lugar) });
            }
        }
    }
}

//
function robotOrientadoAMetas({ lugar, paquetes }, ruta) {
    if (ruta.length == 0) {
        let paquete = paquetes[0];
        if (paquete.lugar != lugar) {
            ruta = encontrarRuta(grafoCamino, lugar, paquete.lugar);
        } else {
            ruta = encontrarRuta(grafoCamino, lugar, paquete.direccion);
        }
    }
    return { direccion: ruta[0], memoria: ruta.slice(1) };
}
runRobotAnimation(EstadoPueblo.aleatorio(),
    robotOrientadoAMetas, []);

//
function compararRobots(robot1, memoria1, robot2, memoria2) {
    // Tu código aqui
}

/*
Eficiencia del robot
Puedes escribir un robot que termine la tarea de entrega más rápido que robotOrientadoAMetas? Si observas el 
comportamiento de ese robot, qué obviamente cosas estúpidas este hace? Cómo podrían mejorarse?

Si resolviste el ejercicio anterior, es posible que desees utilizar tu función compararRobots para verificar 
si has mejorado al robot.

// Tu código aqui
*/
runRobotAnimation(EstadoPueblo.aleatorio(), tuRobot, memoria);
