//Random Quote API
//@Author: Conner Isaacs

//Uses express,body-parser,cors,request
//initialize dependencies
const express = require("express");
const body = require("body-parser");
const cors = require("cors");
const request = require("request");

//initialize app
const app = express();

app.use(body.json());
app.use(cors());

//display static content
app.use(express.static("public"));

//object to hold all the quotes/quote categories
const quotes = {
funny: [
        {
            quote:"Well, don't expect us to be too impressed. We just saw Finnick Odair in his underwear.",
            author:"Suzanne Collins, Mockingjay"
        },
        {
            quote:"Going to church doesn’t make you a Christian any more than going to a garage makes you an automobile.",
            author: "Billy Sunday"
        },
        {
            quote:"Never go to bed mad. Stay up and fight.",
            author:"Phyllis Diller"
        },
        {
            quote:"The planet is fine. The people are ****ed.",
            author:"George Carlin"
        },
        {
            quote:'I did not attend his funeral, but I sent a nice letter saying I approved of it.' ,
            author:'Mark Twain'
        },
        {
            quote:"My fake plants died because I did not pretend to water them.",
            author:"Mitch Hedberg"
        },
        {
            quote:"Accept who you are. Unless you're a serial killer.",
            author:"Ellen DeGeneres"
        },
        {
            quote:"It's not true that I had nothing on. I had the radio on.",
            author:"Marilyn Monroe"
        },
        {
            quote:"They love their hair because they're not smart enough to love something more interesting..",
            author:"John Green"
        },
        {
            quote:"When life gives you lemons, squirt someone in the eye.",
            author:"Cathy Guisewite"
        }  
        ],
    
    
motivational:[
    {
        quote:"Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.",
        author:"Steve Maraboli"
    },
    {
        quote:"Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.",
        author:"Zig Ziglar"
    }, 
    {
        quote:"The only way of discovering the limits of the possible is to venture a little way past them into the impossible.",
        author:"Arthur C. Clarke"
    }, 
    {
        quote:"It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.",
        author:"Roy T. Bennett"
    }, 
    {
        quote:"The man who moves a mountain begins by carrying away small stones",
        author:"Confucius"
    }, 
    {
        quote:"Although the world is full of suffering, it is full also of the overcoming of it.",
        author:"Helen Keller"
    }, 
    {
        quote:"Whatever the mind can conceive and believe, it can achieve.",
        author:"Napoleon Hill"
    }, 
    {
        quote:"You have to accept whatever comes, and the only important thing is that you meet it with the best you have to give.",
        author:"Eleanor Roosevelt"
    }, 
    {
        quote:"You are the average of the five people you spend the most time with.",
        author:"Jim Rohn"
    }, 
    {
        quote:"I write for the same reason I breathe - because if I didn't, I would die.",
        author:"Isaac Asimov"
    }   
],
success:[
    {
        quote:"Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author:'Winston S. Churchill'
    },
    {
        quote:"I can't give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.",
        author:'Herbert Bayard Swope'
    },
    {
        quote:"If at first you don't succeed, try, try again. Then quit. No use being a damn fool about it.",
        author:'W.C. Fields'
    },
    {
        quote:"Try not to become a man of success. Rather become a man of value.",
        author:'Albert Einstein'
    },
    {
        quote:"It is better to fail in originality than to succeed in imitation.",
        author:'Herman Melville'
    },
    {
        quote:"Success is getting what you want, happiness is wanting what you get",
        author:'W.P. Kinsella'
    },
    {
        quote:"Failure is the condiment that gives success its flavor.",
        author:'Truman Capote'
    },
    {
        quote:"The worst part of success is trying to find someone who is happy for you.",
        author:'Bette Midler'
    },
    {
        quote:"Have no fear of perfection - you'll never reach it.",
        author:'Salvador Dalí'
    },
    {
        quote:"Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.",
        author:'Steve Maraboli'
    }
],
time:[
    {
        quote:"Time flies like an arrow; fruit flies like a banana.",
        author:'Anthony G. Oettinger'
    },
    {
        quote:"Books have a unique way of stopping time in a particular moment and saying: Let’s not forget this.",
        author:'Dave Eggers'
    },
    {
        quote:"How did it get so late so soon?",
        author:'Dr. Seuss'
    },
    {
        quote:"Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.",
        author:'Mother Teresa'
    },
    {
        quote:"It is the time you have wasted for your rose that makes your rose so important.",
        author:'Antoine de Saint-Exupéry'
    },
    {
        quote:"You can have it all. Just not all at once.",
        author:'Oprah Winfrey'
    },
    {
        quote:"Don't waste your time with explanations: people only hear what they want to hear.",
        author:'Paulo Coelho'
    },
    {
        quote:"Don't spend time beating on a wall, hoping to transform it into a door.",
        author:'Coco Chanel'
    },
    {
        quote:"Time is the longest distance between two places.",
        author:'Tennessee Williams'
    },
    {
        quote:"They always say time changes things, but you actually have to change them yourself.",
        author:'Andy Warhol'
    },
],
education:[
    {
        quote:"Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author:"Mahatma Gandhi"
    },
    {
        quote:"I have never let my schooling interfere with my education.",
        author:"Mark Twain"
    },
    {
        quote:"You can never be overdressed or overeducated.",
        author:"Oscar Wilde"
    },
    {
        quote:"You educate a man; you educate a man. You educate a woman; you educate a generation..",
        author:"Brigham Young"
    },
    {
        quote:"The world is a book and those who do not travel read only one page.",
        author:"Augustine of Hippo"
    },
    {
        quote:"Education is the most powerful weapon which you can use to change the world.",
        author:"Nelson Mandela"
    },
    {
        quote:"I did then what I knew how to do. Now that I know better, I do better.",
        author:"Maya Angelou"
    },
    {
        quote:"Whatever the cost of our libraries, the price is cheap compared to that of an ignorant nation.",
        author:"Walter Cronkite"
    },
    {
        quote:"Education is the ability to listen to almost anything without losing your temper or your self-confidence.",
        author:"Robert Frost"
    },
    {
        quote:"The past has no power over the present moment.",
        author:"Eckhart Tolle"
    },
]          
};
var motivational = 0;
var time = 0; var education = 0;
var success = 0;
var funny = 0;
//begin listening on local host

app.get("/:category",(req,res,next)=>{
    var amount = req.query.amount;
    var category = req.params.category;
  switch(category){
    case "funny":
      funny++;
      break;
    case "motivational":
      motivational++;
      break;
    case "time":
      time++;
      break;
    case "success":
      success++;
      break;
    case "education":
      education++;
      break;
                 }
    var quotesToSend = [];
  if(amount == undefined){
    if(category.toLowerCase() == 'mostpopular'){
      var x = Math.max(Math.max(Math.max(Math.max(success,time),education),motivational),funny);
      if(funny == x) var mostPopular = "Funny";
      else if(motivational == x) var mostPopular = "Motivational";
      else if(education == x) var mostPopular = "Education";
      else if(success== x) var mostPopular = "Success";
      else var mostPopular = "Time";
      res.json({
        mostPopular: mostPopular,
        Amount: x
      });
    }
    else{
      amount = 1;
    }
  }
  if(category.toLowerCase() == 'mostpopular'&&amount != undefined){
    res.json({
      Error: "you can't specify an amount when getting most popular category"
    })
  }
    if(amount<=5){
      if(amount ==1){
        var x = Math.floor(Math.random()*10);
        res.json({
          quote: quotes[category][x].quote,
          author: quotes[category][x].author
        })
      }
      else{
        while(amount > 0){
        var x = Math.floor(Math.random()*10);
        var isIn = false;
            for(var i = 0; i < quotesToSend.length;i++){
                if(quotes[category][x].quote === quotesToSend[i].quote){
                    isIn = true;
                }
            }
            if(!isIn){
                quotesToSend.push(quotes[category][x]);
                amount--;
            }
    }
    res.json({
        quotes: quotesToSend
    })
      }
        
}
else{
    res.json({
        alert: "Please choose to get a number of quotes less than or equal to 5"
    })
}
    
})
app.listen(3000);
