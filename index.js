const cal = document.querySelector('.cal');
const output = document.querySelector('.age');
const input = document.querySelector('#date');
input.max = new Date().toISOString().split('T')[0];
   
function calcu(){
  let birthDate = new Date(input.value);
  
  let bd = birthDate.getDate();
  let bm = birthDate.getMonth() + 1;
  let by = birthDate.getFullYear();

  let today = new Date();

  let td = today.getDate();
  let tm = today.getMonth() + 1;
  let ty = today.getFullYear();

  let ageD,ageM, ageY;

  ageY = ty-by;

  if(tm>=bm){
    ageM = tm-bm;
  } else{
    ageY--;
    ageM = 12 + tm -bm;
  }
  if(td>=bd){
    ageD = td-bd;
  } else {
    ageM--;
    ageD = getDaysInMonth(by,bm) + td -bd;
  }
  if(ageM<0){
    ageM=11;
    ageY--;
  }

  output.innerHTML = `You are <span>${ageY}</span> years,<span>${ageM}</span> months and <span>${ageD}</span> days old`
}

function getDaysInMonth(year,month){
  return new Date(year, month,0).getDate();
}

