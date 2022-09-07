const listaCompra = ["Leche", "Verduras", "Fruta", "Cereales", "Huevos"];

listaCompra.push("Aceite de Girasol");

console.log(listaCompra);

listaCompra.splice(5);
console.log(listaCompra);

const peliculas = [
    {titulo: "Mad Max", director: "George Miller", fecha: "2015/may/15"},
    {titulo: "El retorno del Rey", director: "Peter Jackson", fecha: "2003/dec/17"},
    {titulo: "La lista de Schindler", director: "Steven Spielberg", fecha: "1994/mar/04"}
];

const peliculasFecha = peliculas.filter(obj => obj.fecha >= "2010/ene/01");
console.log(peliculasFecha);


const peliculasDirectores = peliculas.map((peliculas, indice) =>`${indice + 1} - ${peliculas.director}`);
console.log(peliculasDirectores);

const peliculasTitulos = peliculas.map((peliculas, indice) =>`${indice + 1} - ${peliculas.titulo}`);
console.log(peliculasTitulos);

const peliculasConcat = peliculasDirectores.concat(peliculasTitulos);
console.log(peliculasConcat);

const peliculasPropagacion = [...peliculasDirectores, ...peliculasTitulos];
console.log(peliculasPropagacion);