$(document).ready(function() {
  $("form#latin").submit(function(event) {
      event.preventDefault();

      var sentenceInput = $("#sentence").val().toLowerCase();
      var vowels = ('a')

      var characters = sentenceInput.split(" ")
      characters.forEach(function(character) {
        console.log(character);
        if (character[0] === 'a') {
          alert(character + 'way');

          // var vowels= /[a]/g
          // if (sentenceInput === /\b[a]/g){
            //   var newWord = $(sentenceInput).append("way");
            // }
            //   console.log(newWord);


        }
      });



      // sentenceInput.forEach(function(sentence) {
      //
      //     console.log(characters);
      //     if (characters[0] === "a") {
      //       return characters + "way"
      //       alert(characters);
      //     }
      //
      // });

    // function vowelWord(word) {
    //   }
    //
    // };

    // console.log(vowelWord);
    //
    //
    // $('.output').show(sentenceInput);


    if (sentenceInput === /^[a]/g){
      var newWord = $(sentenceInput).append("way");
    }
  });
});
