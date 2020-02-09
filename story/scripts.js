const app = document.getElementById('root');
//const logo = document.createElement('img');
const h1 = document.createElement('h1');
h1.textContent = "Please select film title:";
//logo.src = 'logo.png';
const container = document.createElement('div');
container.setAttribute('class', 'container');
 //app.appendChild(logo);
app.appendChild(h1);
app.appendChild(container);
var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    var mySelect =  document.createElement('select');
    mySelect.id = "mySelect";
    let description = [];

    number =0;
    data.forEach(movie => {
      mySelect.options.add(new Option(movie.title,movie.description));
      number = number +1;
      description.push(`${movie.description}`);
    })

   app.appendChild(mySelect);
   var obj=document.getElementById('mySelect');
   var index=obj.selectedIndex;
   var val = obj.options[index].value;
   var p = document.createElement('p');
   p.textContent = val;
   mySelect.addEventListener('click', () => {
     var obj=document.getElementById('mySelect');
     var index=obj.selectedIndex;
     var val = obj.options[index].value;
     p.textContent = val
    });
   app.appendChild(p);
   app.appendChild(container);
   } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send()
