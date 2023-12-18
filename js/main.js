
// var x ;
function thequote() {
    
    //for image
    var imagequote = [ "image/1.jpg" ,"image/2.jpg","image/3.jpg","image/4.jpg" ,"image/5.jpg"]
    //for quote
    var quote = ["“Be yourself; everyone else is already taken.”", "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”", "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", "“So many books, so little time.”", "“A room without books is like a body without a soul.”"];
    //for artist
    var name_aratist = ["Oscar Wilde", "Marilyn Monroe", "Albert Einstein", "Frank Zappa", "Bernard M. Baruch"];
    // math to random code
    var num_quote = Math.floor(Math.random() * quote.length);
    // print in pragraph one
    var x = document.getElementById("quote-one").innerHTML = quote[num_quote];
    // print in pragraph twp
    var y = document.getElementById("quote-two").innerHTML = name_aratist[num_quote];
    // print image
    var z = document.getElementById("photo-quote").src = imagequote[num_quote];
    // document.getElementById("quote-two").innerHTML = name_aratist[0];
    // var lastnumber;
    // if(num_quote == x){
    //     thequote();
        
    // }
    // x == num_quote;
}
