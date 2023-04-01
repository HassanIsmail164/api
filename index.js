// async function test() {
//   await fetch("http://localhost:3000/users")
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//       var ul = document.getElementById("ul");
//       json.Sheet1.forEach((element) => {
//         var li = document.createElement("li");
//         li.innerHTML = element.A + " " + element.B;
//         li.className = "list-group-item";
//         ul.appendChild(li);

//         // for the images
//         var img = document.createElement("img");
//         img.src = element.C;
//         ul.appendChild(img);
//       });
//     });
// }
// test();

// with Bootstrap
async function test() {
  await fetch("https://playful-banoffee-854187.netlify.app/users")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      var ul = document.getElementById("ul");
      json.Sheet1.forEach((element) => {
        var li = document.createElement("li");
        li.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${element.C}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.A + " " + element.B}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <br/>`;
        // li.className = "list-group-item";
        ul.appendChild(li);

        // // for the images
        // var img = document.createElement("img");
        // img.src = element.C;
        // ul.appendChild(img);
      });
    });
}
test();
