let produse = [];
for(let idx=1; idx<perf.length; idx++) {
    let perfume = perf[idx];
    let perfume_object = new Perfume(perfume.nume,
        perfume.quantity,
        perfume.ingredients,
        perfume.price,
        perfume.size,
        perfume.tags,
        perfume.relatedPerfumes,
        perfume.season,
        perfume.ocazie,
        perfume.sex);
    let name = "nume-" + idx;
    let pret = "pret-" + idx;
    let image = "image-" + idx;
    let descriere = "descriere-" + idx;
    document.getElementById('produs').innerHTML += "<div class=\"card\" onload=\"\">\n" +
        "    <h1 id=\"nume-" + idx + "\"></h1>\n" +
        "</div>\n" +
        "\n" +
        "<div class=\"card\">\n" +
        "    <div class=\"productinfo\">\n" +
        "        <div id=class=\"fakeimg\"><img id=\"image-" + idx + "\" src=\"\" align=\"center\"></div>\n" +
        "        <div>\n" +
        "            <p id=\"pret-" + idx + "\">Pret</p>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <p id=\"descriere-" + idx + "\"></p>\n" +
        "    <button id='button-" + idx + "' type='button'>Add to cart</button>"
        "</div>";

    document.addEventListener('DOMContentLoaded', init, false);
    function init(){
        document.getElementById("button-" + idx).addEventListener("click", function (){
            produse.push(perfume_object);
            alert(perfume_object.getName() + " has been added to cart!");
        });
    }

    document.getElementById(name).innerHTML = perfume_object.getName();
    document.getElementById(pret).innerHTML = perfume_object.getPrice() + " lei";
    document.getElementById(image).src = perfume_images[perfume_object.getName()];
    document.getElementById(descriere).innerHTML = description = "Ingredients : " + perfume_object.getIngredients().toString() + "<br />" +
        "Size(ml) : " + perfume_object.getSize().toString() + "<br />" +
        "Tags : " + perfume_object.getTags().toString() + "<br />" +
        "Sex : " + perfume_object.getSex() + "<br />" +
        "Season : " + perfume_object.getSeason() + "<br />" +
        "Ocazie : " + perfume_object.getOcazie() + "<br />";
}



