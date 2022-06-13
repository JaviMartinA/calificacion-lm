function textoNota(nota){
    if(nota<3){
        return "(Muy deficiente)"
    }else if(nota>=3 && nota<5){
        return "(Insuficiente)"
    }else if(nota>=5 && nota<6){
        return "(Suficiente)"
    }else if(nota>=6 && nota<7){
        return "(Bien)"
    }else if(nota>=7 && nota<9){
        return "(Notable)"
    }else{
        return "(Sobresaliente)"
    }
}
function llamar1(){
    fetch('https://api.jsonbin.io/b/62853d3138be2967610b5eec')
    .then(response => response.json())
    .then(alumno => mostrar(alumno))
    function mostrar(alumno){
        var tabla=document.getElementById("body");
        tabla.innerHTML="";
        for(j=0;j<alumno.length;j++){
            total=0;
            for(i=0;i<alumno[j].notas.length;i++){    
                total=total+alumno[j].notas[i];
            }
            var media=Math.round(total/alumno[j].notas.length)
            tabla.innerHTML+=
            `<tr>
                <td>`+alumno[j].nombre+`</td>
                <td>`+alumno[j].apellidos+`</td>
                <td>`+alumno[j].notas[0]+" "+textoNota(alumno[j].notas[0])+`</td>
                <td>`+alumno[j].notas[1]+" "+textoNota(alumno[j].notas[1])+`</td>
                <td>`+alumno[j].notas[2]+" "+textoNota(alumno[j].notas[2])+`</td>
                <td>`+alumno[j].notas[3]+" "+textoNota(alumno[j].notas[3])+`</td>
                <td>`+alumno[j].notas[4]+" "+textoNota(alumno[j].notas[4])+`</td>
                <td>`+alumno[j].notas[5]+" "+textoNota(alumno[j].notas[5])+`</td>
                <td>`+media+" "+textoNota(media)+`</td>
            </tr>`
        }
    }
    crear();
}