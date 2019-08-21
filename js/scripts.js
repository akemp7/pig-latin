$(document).ready(function() {
  $("form#latin").submit(function(event) {
      event.preventDefault();

      var sentenceInput = $("#sentence").val().toLowerCase();
      var vowels = ['a', 'e', 'i', 'o', 'u'];
      var characters = sentenceInput.split(" ");


      characters.forEach(function(character) {

          if (character[0] === 'a' || character[0] === 'e' || character[0] === 'i' || character[0] === 'o' || character[0] === 'u') {
            $(".output").append(character + 'way ');
            // } else if (character[0] === "q" && character[1] === "u") {
            //   console.log(character.slice(2).append("quay"));
            // }
          } else if (!vowels.includes(character[0])) {
            var letters = character.split("");
            letters.push(letters.splice(0, 1)[0]);
            var consonant = letters.join('')
            $(".output").append (consonant + "ay ");



        }
      });
  });
});
