/*Created a static object */
const bicycle = {
    color: "green",
    electric: false,
    ride() {
            console.log("You began to ride!");
        },
};
bicycle.color;
bicycle.ride();

class Dog {
    /*Construct the method of your argument. These will generate the key portion of the property */
    constructor(color, gender, breed) {
        /*Whatever we pass through the color, gender, and breed will go through the 'this' attribute. refers to the object itself (which is Dog in this case)*/
        this.color = color,
        this.gender = gender,
        this.breed = breed
    }
    /**Methods */
    bark() {
        /*Without Template Literal*//*console.log("The dog has barked!");*/
        /**Template literal uses a backtick (the one on the tilde key) */
        /**With template literal ${} */ console.log(`The ${this.color} dog has barked!`);
    }
}

class Cat extends Dog {
    constructor(color, gender, breed){
        super(color, gender, breed);
    }
    meow(){
        console.log(`The ${this.color} ${this.breed} cat goes meow!`)
    }
}
const dog1 = new Dog("White", "Female", "Shitzu");
const dog2 = new Dog("Black", "male", "Poodle");
const cat1 = new Cat("Gray", "male", "Chesire");
const cat2 = new Cat("Brown", "Female", "Tabby");
/**if you use dog1 or dog2.bark() you won't be able to tell the difference unless you use a template literal with a keyword */
dog1.bark();
dog2.bark();
cat1.meow();
cat2.meow();
/**Will output an array with the properties you added/input into parameters of dog1. */
console.log(dog1);
console.log(dog2);
console.log(cat2);
console.log(cat1);
/**If you want to find a specific elemenet from constructor, you can justt hyphenate/add it to the element name */
console.log(dog2.gender);

class Music {
    constructor(artist, genre) {
        this.genre = genre,
        this.artist = artist
    }
    /**Methods */
    shoutout() {
        console.log(`${this.artist} creates ${this.genre} music! You should give it a listen!`);
    }
}
class KMusic extends Music {
    constructor(artist, genre){
        super(artist, genre);
    }
    newmusic(){
        console.log(`${this.artist} creates ${this.genre} music and it's really good!`);
        console.log(`${this.artist} is my favorite.`)
    }
}

const music1 = new Music("Rihanna", "R&B");
const music2 = new Music("Taylor Swift", "Pop");
const kmusic1 = new KMusic("BTS", "Pop");
const kmusic2 = new KMusic("NCT", "Pop");

music1.shoutout();
music2.shoutout();
kmusic1.newmusic();
kmusic2.newmusic();