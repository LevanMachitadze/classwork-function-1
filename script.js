let point = Number(prompt('შეიყვანე თქვენი ქულა'));
let name = prompt('შეიყვანე თქვენი სახელი');
function result(point, name) {
  if (point < 50) {
    alert(
      `${name}, სამწუხაროდ თქვენ ვერ გადალახეთ მინიმალური ბარიერი, თქვენ დაგაკლდათ ${
        51 - point
      } ქულა`
    );
  } else if (point >= 51 && point < 90) {
    alert(`გილოცავ ${name}, შენ ${point - 51}-ით მეტი ქულა აიღე ბარიერზე`);
  } else if (point >= 90 && point <= 100) {
    alert(`გილოცავ ${name}, შენ უმაღლესი შედეგი გაქვს`);
  } else {
    alert('რაღაც შეცდომაა, სცადე თავიდან');
  }
}
let final = result(point, name);
