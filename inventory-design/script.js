
var barra;

document.addEventListener("DOMContentLoaded", function(event) {
    Load();    
});

$(function() {

    $("#personal-inventory").click(function() {
        document.getElementById('personal-inventory').style.backgroundColor = "rgb(27,27,27)";
        document.getElementById('personal-inventory').style.color = "rgb(244, 244, 244)";
        // ------------------------------------------------------------------------------
        document.getElementById('personal-clothes').style.backgroundColor = "rgb(244, 244, 244)";
        document.getElementById('personal-clothes').style.color = "rgb(27,27,27)";
        document.getElementById('container').style.height = "500px";
    });

    $("#personal-clothes").click(function() {
        document.getElementById('personal-clothes').style.backgroundColor = "rgb(27,27,27)";
        document.getElementById('personal-clothes').style.color = "rgb(244, 244, 244)";
        // ------------------------------------------------------------------------------
        document.getElementById('personal-inventory').style.backgroundColor = "rgb(244, 244, 244)";
        document.getElementById('personal-inventory').style.color = "rgb(27,27,27)";
        document.getElementById('container').style.height = "700px";
    });

});

function Load() {
    for( i = 0; i < 42; i++) {
        nuevoDiv = document.createElement("div");
        nuevoDiv.className = "items-box";
        nuevoDiv.setAttribute("id","box"+(i+1));
        document.getElementById("table").appendChild(nuevoDiv);
        if(i<5) {
            nuevoDiv.style.backgroundColor = "rgb(52,0,52)";
            nuevoDiv.textContent = i+1 ;
        }
        nuevoDiv.addEventListener('click', function(event)  {
            console.log("click ", event.target.id);
        });
    }

    document.getElementById("box1").style.backgroundImage = "url('water.png')";
    document.getElementById("box2").style.backgroundImage = "url('bread.png')";
    //document.getElementById("box3").textContent = 1;
    
    new Sortable(document.getElementById('table'), {
        animation: 400,
        ghostClass: 'sortable-ghost',
        onEnd: function (evt) {
          // Imprimir en consola la nueva ordenación
            console.log('Id: ', evt.item.dataset.id);
            console.log('Nuevo orden:', evt.newIndex + 1);
            barra = document.querySelectorAll('.items-box');
            evt.item.style.backgroundColor = 'rgb(72, 72, 72)';
            for(i=0;i<5;i++) {
                barra[i].style.backgroundColor = 'rgb(52,0,52)';
                console.log(barra[i].id);
            }
            if(i==5) {
                barra[i].style.backgroundColor = 'rgb(72, 72, 72)';
            }
        }
    });
}