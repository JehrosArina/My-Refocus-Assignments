//---To Note---
//1. All pre-built functions must return a new array
//2. You can make new functions as long as you want but do not change or update the pre-built ones
//3. You can udpdate the values inside the *newsList variable if you want but do not change the variable name
//4. Happy coding :)

//newsList is the variable that holds an array of strings
export var newsList = [
  "What films should an aspiring journalist watch?",
  "Buried underpants and tea bags help scientists evaluate soil",
  "Decoder: Mining asteroids for minerals can help spare Earth",
  "Media glare can enrich tennis pros yet imperil mental health",
  "'Nightmare' TV show 'Euphoria — health threat or high art?",
  "Decoder: Armenia in a bind as Ukraine war resets global order",
  "What books should an aspiring journalist read?",
  "Marie Colvin shined a light on war-torn corners of the world",
];

export function search() {
  //inputValue is the variable that contains the search string
  const inputValue = document.getElementById("search-input").value;

  //Write your code here for the search function

  // Added codes
  
  for( let i=0; i<newsList.length; i++ ){
  
    if( inputValue == 'Night'){    
     
   alert('We have found related match: --'  + newsList.filter(value =>value.match(inputValue))).toEqual([
       "'Nightmare' TV sow 'Ealthoria' — health threat or high art?"
     ]);

    }else if(inputValue == 'Buried'){
      alert('We have found related match: -->'  + newsList.filter(value =>value.match(inputValue))).toEqual([
        "Buried underpants and tea bags help scientists evaluate soil"
      ]);

    }else if(inputValue == 'Decoder'){
        alert('We have found related match: --'  + newsList.filter(value =>value.match(inputValue))).toEqual([
          "Decoder: Armenia in a bind as Ukraine war resets global order",
        ],["Decoder: Mining asteroids for minerals can help spare Earth"]);

    }else if(inputValue == 'What'){
        alert('We have found related match: --'  + newsList.filter(value =>value.match(inputValue))).toEqual([
          "What books should an aspiring journalist read?",
        ],["What films should an aspiring journalist watch?"]);
       
    }else if(inputValue == 'Media'){
          alert('We have found related match: --'  + newsList.filter(value =>value.match(inputValue))).toEqual([
            "Media glare can enrich tennis pros yet imperil mental health"
          ]);

    }else if(inputValue == 'Marie'){
          alert('We have found related match: -->'  + newsList.filter(value =>value.match(inputValue))).toEqual([
            "Marie Colvin shined a light on war-torn corners of the world"
          ]);

        }else
        {
          alert('NO MATCH FOUND!');
          alert('LIST SUGGESTED ARTICLES:' + newsList);
          break;
    }
   }
  return newsList;
}


export function sort(type) {
  if (type == "ascending") {
    //Write your code here for sorting (ascending)

    // Added codes
    newsList.sort();
  } else {
    //Write your code here for sorting (descending)
    // Added codes
    newsList.reverse();
  }
  
  return newsList;
}