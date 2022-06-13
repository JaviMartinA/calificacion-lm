function llamar2(){
    fetch('https://api.jsonbin.io/b/62853d3138be2967610b5eec')
    .then(response => response.json())
    .then(alumno => seleccion(alumno))
    function seleccion(alumno){
        var valor=document.getElementById("select").value;
        var tabla=document.getElementById("body");
        var total=0;
        for(i=0;i<alumno[valor].notas.length;i++){    
            total=total+alumno[valor].notas[i];
        }
        var media=Math.round(total/alumno[valor].notas.length)
        tabla.innerHTML=
    `<tr>
        <td>`+alumno[valor].nombre+`</td>
        <td>`+alumno[valor].apellidos+`</td>
        <td>`+alumno[valor].notas[0]+" "+textoNota(alumno[valor].notas[0])+`</td>
        <td>`+alumno[valor].notas[1]+" "+textoNota(alumno[valor].notas[1])+`</td>
        <td>`+alumno[valor].notas[2]+" "+textoNota(alumno[valor].notas[2])+`</td>
        <td>`+alumno[valor].notas[3]+" "+textoNota(alumno[valor].notas[3])+`</td>
        <td>`+alumno[valor].notas[4]+" "+textoNota(alumno[valor].notas[4])+`</td>
        <td>`+alumno[valor].notas[5]+" "+textoNota(alumno[valor].notas[5])+`</td>
        <td>`+media+" "+textoNota(media)+`</td>
    </tr>`
    crear();
    }
}