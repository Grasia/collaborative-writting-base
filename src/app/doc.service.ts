import { Injectable } from '@angular/core';
import {Doc} from './doc'

@Injectable()
export class DocService {
    
    documentos: Doc[] = [
    { id: 1, nombre: 'Documento 1', creador: 'admin', participante: 'usuario' },
    { id: 2, nombre: 'Documento 2', creador: 'usuario', participante: 'admin' },
    { id: 3, nombre: 'Documento 3', creador: 'usuario', participante: 'usuario' },
    { id: 4, nombre: 'Documento 4', creador: 'admin', participante: 'admin' }
    ];
    
    
    
    
    
    
}