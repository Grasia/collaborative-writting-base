import { Injectable } from '@angular/core';
import {Doc} from './doc'

@Injectable()
export class DocService {
    
    documentos: Doc[] = [
    { id: 1, nombre: 'Documento 1', creador: 'jorge', participante: 'carlos' },
    { id: 2, nombre: 'Documento 2', creador: 'carlos', participante: 'jorge' },
    { id: 3, nombre: 'Documento 3', creador: 'carlos', participante: 'carlos' },
    { id: 4, nombre: 'Documento 4', creador: 'jorge', participante: 'jorge' }
    ];
    
    
    
    
    
    
}