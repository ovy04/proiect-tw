class Perfume{
    constructor(name, quantity, ingredients, price, size, tags, relatedPerfumes, season, ocazie, sex) {
        this.name = name;
        this.quantity = quantity;
        this.ingredients = ingredients;
        this.price = price;
        this.size = size;
        this.tags = tags;
        this.relatedPerfumes = relatedPerfumes;
        this.ocazie = ocazie;
        this.season = season;
        this.sex = sex;
    }

    getName() {return this.name;}
    getQuantity() {return this.quantity};
    getIngredients() {return this.ingredients};
    getPrice() {return this.price};
    getSize() {return this.size};
    getTags() {return this.tags};
    getRelatedPerfumes() {return this.relatedPerfumes};
    getSex() {return this.sex};
    getSeason() {return this.season};
    getOcazie() {return this.ocazie};
    tostring(){
        return this.name + " : " + this.size + " ml : " + this.price + " lei ";
    }

}

