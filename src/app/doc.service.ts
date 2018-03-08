import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Doc} from './doc'

@Injectable()
export class DocService {
    
    documentos: Doc[] = [
    { id: 1, nombre: 'Documento 1', creador: 'jorge', participante: 'carlos', texto: 'La guerra comercial abierta por Donald Trump ya tiene su primera víctima. El poderoso consejero económico de la Casa Blanca, Gary Cohn, ha presentado este martes su dimisión por sus diferencias con el presidente en la batalla arancelaria. La caída de Cohn supone una derrota del sector moderado frente a halcones, pero sobre todo, representa la partida de uno de los más prestigiosos miembros del gabinete, el cerebro de la reforma fiscal y uno de los pocos altos cargos capaz de enmendarle la plana al mandatario, como hizo en agosto pasado cuando Trump, tras el crimen racista de Charlottesville, mantuvo la equidistancia.' , etapa: 'llamada' },
        
    { id: 2, nombre: 'Documento 2', creador: 'carlos', participante: 'jorge', texto: 'Procedente de Goldman Sachs, Cohn, de 56 años, era un tecnócrata que apostaba más por el pacto que por la batalla. Pragmático, de verbo fácil y reconocido por sus colegas financieros, estaba en los antípodas del consejero comercial, Peter Navarro, el desmesurado economista que ha logrado que Trump rompa amarras y prepare la subida unilateral de aranceles al acero (25%) y el aluminio (10%). Una medida que la Unión Europea ha respondido con la amenaza de represalias.', etapa: 'revision'},
        
    { id: 3, nombre: 'Documento 3', creador: 'carlos', participante: 'carlos', texto: 'Cohn trató por todos los medios frenar la conflagración. Al igual que con el Tratado de Libre Comercio de América del Norte (TLCAN), buscó que primase la negociación. Pero en esta ocasión falló. Ni siquiera su triunfo con la titánica reforma fiscal, el mayor éxito político hasta la fecha de la Casa Blanca, le valió para hacer valer su palabra. Trump, jaleado por Navarro y los epígonos de Steve Bannon que aún quedan en la Casa Blanca, volvió a sus raíces, alzó la bandera del América Primero y anunció que las guerras comerciales son “buenas y fáciles de ganar”.', etapa: 'cambios'},
        
    { id: 4, nombre: 'Documento 4', creador: 'jorge', participante: 'jorge', texto: 'El golpe fue excesivo para el financiero de Wall Street. Su teórico subordinado, Peter Navarro, le había ganado la partida y había impuesto la línea dura en un tema altamente volátil y que marcará la estrategia económica el mandato. Estados Unidos, en contra de su criterio, se enfrentaba a cara de perro con sus socios y vecinos. Europa, Canadá, México iban a sufrir los embates. Y el siguiente en la lista era China. El gigante asiático, que hasta ahora se ha mantenido a salvo de las iras de Trump por su apoyo en el cerco a Corea Norte, entraba en rumbo de colisión.', etapa: 'revision' }
        
    ];
    
    
    activo: Doc;
    
    
    getDoc(id:number): Doc{
        
        return this.documentos[id-1];
        
    }
    
    activarDoc(doc: Doc): void{
        
        this.activo = doc;
        
    }
    
    
    add(titulo:string, creador:string){
        
        this.documentos[this.documentos.length] = {id:this.documentos.length+1, nombre:titulo, creador: creador,  participante:creador, texto:'', etapa: 'redaccion'}
        
        this.activo = this.documentos[this.documentos.length-1];
        
      
    }
    
}