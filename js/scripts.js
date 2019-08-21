$(document).ready(function() {
  $("form#latin").submit(function(event) {
      event.preventDefault();

      var sentenceInput = $("#sentence").val().toLowerCase();
      var vowels = ('a', 'e', 'i', 'o', 'u')

      var characters = sentenceInput.split(" ")
      characters.forEach(function(character) {
        console.log(character);
        if (character[0] === 'a'|| character[0] === 'e'||character[0] === 'i'|| character[0] === 'o'|| character[0] === 'u') {
          $(".output").append(character + 'way ');
        } else if (character[0] !== vowels) {
            $(".output").append(character + "ay  ");
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
