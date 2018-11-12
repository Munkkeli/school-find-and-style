// 1

const strawberry = document.getElementById('berry');
console.log(strawberry);
console.log('I found the berry:', strawberry.innerHTML);
strawberry.style.backgroundColor = 'red';

// 2

const orange = document.querySelector('[data-foodtype="squishy"]');
console.log(orange);
console.log('I found the fruit:', orange.innerHTML);
orange.style.backgroundColor = 'orange';

// 3

const fruits = document.getElementsByTagName('li');
console.log(fruits);

console.log('Using the for loop here:');
for (const fruit of fruits) {
  console.log(fruit.innerHTML);

  if (fruit.innerHTML === 'Pear') {
    fruit.style.backgroundColor = 'green';
  }

  fruit.style.width = '100px';
}

document.getElementsByClassName('fruits')[0].style.listStyle = 'none';

// 4

const fruitsNode = document.querySelectorAll('li');
console.log(fruitsNode);

console.log('Using forEach here:');
fruitsNode.forEach(fruit => {
  console.log(fruit.innerHTML);
  fruit.style.border = '1px solid black';
});