$(document).ready(function() {
  $.get( "Cards.csv", function( CSVdata) {
      data = $.csv.toArray(CSVdata);
      console.log(data)
   });

 });

function generate(){




  reader.readAsText(csv)
  var cardIdea = document.getElementById('cardIdea').value;
  var blackCard1 = "In LA County Jail, word is you can trade 200 cigarettes for _."
  blackCard1 = blackCard1.replace("_", cardIdea);
  document.getElementById("1").innerHTML = cardIdea;
  document.getElementById("2").innerHTML = cardIdea;
  document.getElementById("3").innerHTML = cardIdea;
  document.getElementById("4").innerHTML = cardIdea;
}


  const reader = new FileReader()
  const csv = new File([""], "C:\Users\TyDocuments\CAHTester\Cards.csv")

  reader.onload = function(e){
    reader.readAsText(csv);
    var content = reader.result;
    var lines = content.split("\n");
    var choices = [];
    for (var i=0; i<4; i++) {
      choices.push(Math.floor(Math.random() * lines.length));
      //console.log(choices[i]);
      //console.log(lines[2]);
      console.log(content);
    }
  }
