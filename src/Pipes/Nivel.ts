import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'Nivel'})
export class NivelPipe implements PipeTransform {
    transform(value: any): any {
        let nivel ='';
        if(value==="1"){
            nivel = 'Principiante'
        }else if(value==="2"){
            nivel = 'Semi-Profesional'
        }else if(value==="3"){
            nivel = 'Profesional'
        }else if(value==="4"){
            nivel = 'Experto'
        }
        return nivel;
    }
    
}