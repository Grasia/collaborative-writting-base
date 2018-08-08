import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doc } from '../doc';
import { DocService } from '../doc.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SwellService } from '../swell.service';
import { isLoweredSymbol } from '../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})



export class DocumentoComponent implements OnInit{
  
    @Input() doc: Doc;
    error: string;
    editar: boolean;
    id:number;
    x:number;
    object:any;
    constructor(private route: ActivatedRoute,
               private docService: DocService,
                 private userService: UserService,
                 private router:Router,
                 private service: SwellService
               ){};
    
    
    change(nombre, des, ref){

        this.doc.nombre = nombre;
        this.doc.descripcion = des;
        this.doc.referencias = ref;
        this.docService.activo = this.doc;
        this.docService.actualizar();
        this.editar = false;



    }

    ngOnInit(){
        
        if(!this.isLog()) this.router.navigate(['/participar'], {replaceUrl: true});

        this.route.queryParams
        .subscribe(params => {
            this.id = params.id;
            this.x = params.x;
        });

        this.doc = this.docService.getDoc(this.id);
        
        this.service.get().open({

            id: "local.net/Axt6M" + this.id

        })
        .then(object => {console.log("Exitoo, creado o abierto el doc"); object.addParticipant(this.userService.getName() + "@local.net"); this.service.setObject(object);})
        .catch(error => {console.log(error)});

        //this.doc = this.docService.getDoc(+this.route.snapshot.paramMap.get('id'));
        this.docService.activarDoc(this.doc);
        //this.editar = false;
       /* const documento = +this.route.snapshot.paramMap.get('id');
        this.docService.getDoc(documento)
            .subscribe(doc => this.doc = doc);
        */
    }


    getObject(){

        return this.object;

    }

    edit():void{

        this.editar = true;

    }

    noEdit():void{


        this.editar = false;

    }

    isEditar():boolean{

        if(this.editar == false && this.isAdmin() == true) return true;
        else return false;

    }

    isEdit():boolean{

        return this.editar;

    }

    isFin():boolean{

        if(this.docService.getFase() == 'cambios') return true;
        else return false;

    }

    siguiente():void{

        this.docService.next();

    }

    fin():void{

        this.docService.last();

    }

    getRefs(){
        
        return this.doc.referencias;
           
    }
    
    getDes(){
        
        return this.doc.descripcion;
        
    }
    
    verDoc(){
        //window.open('/analisis', '_blank');
        if(this.doc.etapa == 'analisis') this.router.navigate(['/'+this.doc.etapa], {replaceUrl: true});
            else if(this.doc.etapa == 'llamada') this.router.navigate(['/'+ this.doc.etapa], {replaceUrl: true});
                else this.router.navigate(['/texto'], { replaceUrl: true });
           
    }
    
    probar(){

        if(this.isLog()){

            return true;

        }else this.router.navigate(['/participar'], {replaceUrl: true});

    }

    isLog(){
           
        return this.userService.isLog();
        
    }
    
    etapa(){
        
        return this.doc.etapa;
        
        
    }
    
    getNombre(){
        
        return this.doc.nombre;
        
    }
    
    isAdmin(){
        
        return this.userService.isAdmin();
        
    }
    
    mostrar(){
        
        if(this.isLog()){
            
            if (this.userService.isAdmin()){
                
                if(this.doc.creador == this.userService.getName()){
                    
                    return true;
                    
                }else this.error = "No eres administrador de este documento";
                
            }else{
                
                if(this.doc.participante == this.userService.getName()){
                    
                    return true;
                    
                }else this.error = "No eres usuario de este documento"
                
            }
            
            
        }else this.error = "No has hecho login"
        
        return false;
        
    }
    
    documentos(){
        
        this.router.navigate(['/participar'], { replaceUrl: true });
        this.service.get().close({

            id: "local.net/Axt6M" + this.id

        })
        .then(profile => {console.log("cerrado correctamente"); this.service.setObject("")})
        .catch(error => {console.log(error)});
        
    }
  
}
