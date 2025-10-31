

const Libro =  function(titulo,autor){
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;  
    this.prestar= function(){
        if(!this.prestado){
            
            console.log(`El libro ${this.titulo} esta disponible.`);
            this.prestado = true;
            
        }else{
        //console.log(`El libro ${this.titulo} ha sido prestado.`);
        return `Error: ${this.titulo} ya está prestado.`};
    }

}
const libro1 = new Libro("Cien Años de Soledad","Gabriel García Márquez");
const libro2 = new Libro("Don Quijote de la Mancha","Miguel de Cervantes");
console.log(libro1.prestar());
console.log(libro1.prestar());
console.log(libro2.prestar());