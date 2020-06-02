   console.log("hello"); 

const texts = ['Developer', 'Creator'];
let count = 0;
let index = 0; 
let currentText = ""; 
let letter = ""; 

(function type(){

    if(count === texts.length) {
        count = 0; 
    }
    currentText = texts[count]; 
    letter =  currentText.slice(0, ++index); 

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length) {
        count++;
        index = 0; 
    }
    setTimeout(type, 400)

}());







   /* const TypeWriter = function(txtElement, words, wait = 3000) {
       this.txtElement = txtElement
       this.words = words;
       this.txt = "";
       this.wordIndex = 0;
       this.wait = parseInt(wait, 10);
       this.type();
       this.isDeleting = false;
   }

   TypeWriter.prototype.type = function() {
    const current = this.wordIndex % this.words.length;

    const fullTxt = this.words[current]; 

    //check if isDeleting
    if(this.isDeleting) {
        //remove a character
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }else {
        //add a character
        this.txt = fullTxt.substring(0, this.txt.length + 1)

    }

    //inset into element 
    this.txtElement.innerHtML = `<span class="txt">${this.txt}</span>`; 

    //type speed 
    let typeSpeed = 300; 

    if(this.isDeleting) {
        typeSpeed /= 2; 

    }

    //if words is complete
    if(!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait; 
        //set delete is true 
        this.isDeleting = true; 

    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false

        this.wordIndex++;
        //pause before start typing 
        typeSpeed = 500; 
    }


    

       setTimeout(() => this.type(), 500);
   }

    document.addEventListener('DOMcontentLoaded', init);  

   function init() {
       const txtElement = document.getElementById('#txt-type');
       const words = JSON.parse(txtElement.getAttribute('data-words')); 
       const wait = txtElement.getAttribute('data-wait'); 
       new TypeWriter(txtElement, words, wait);


    
   } */