const COLABORADORES = [

    {id: 1,pais: "Albania",capital:"Tirana	",moneda:"Lek" },
    {id: 2,pais: "Alemania",capital:"Berlin",moneda:"Euro" },
    {id: 3,pais: "Andorra",capital:"Andorra la Vella",moneda:"Euro" },
    {id: 4,pais: "Armenia",capital:"Erevan",moneda:"Dram" },
    {id: 5,pais: "Austria",capital:"Viena",moneda:"Euro" },
    {id: 6,pais: "Azerbaiyan",capital:"Baku",moneda:"Manat" },
];

$(COLABORADORES).each(function(index,value){
    console.log(value.pais)
    console.log(value.moneda)

    var fila = "<tr>";
    fila += "<td>" + value.id + "</td>";
    fila += "<td>" + value.pais + "</td>";
    fila += "<td>" + value.capital + "</td>";
    fila += "<td>" + value.moneda + "</td>";
    fila += "</td>";
    $("#paises-tb").append(fila);
})