let creditScore1 = 0;
let creditScore2 = 0;

let sgpa1 = 0;
let sgpa2 = 0;

let cgpa = 0;

const submit1 = document.getElementById('submit1')

submit1.addEventListener("click", function(e){
  e.preventDefault()
  let mat = 3 * (parseInt(parseInt(document.getElementById('mat').value)/10) + 1)
  let phy = 3 * (parseInt(parseInt(document.getElementById('phy').value)/10) + 1)
  let ele = 3 * (parseInt(parseInt(document.getElementById('ele').value)/10) + 1)
  let civ = 3 * (parseInt(parseInt(document.getElementById('civ').value)/10) + 1)
  let evn = 3 * (parseInt(parseInt(document.getElementById('evn').value)/10) + 1)
  let phyl = (parseInt(parseInt(document.getElementById('phyl').value)/10) + 1)
  let elel = (parseInt(parseInt(document.getElementById('elel').value)/10) + 1)
  let egh = 2 * (parseInt(parseInt(document.getElementById('egh').value)/10) + 1)
  let idt = (parseInt(parseInt(document.getElementById('idt').value)/10) + 1)

  let mat2 = 3 * (parseInt(parseInt(document.getElementById('mat2').value)/10) + 1)
  let che = 3 * (parseInt(parseInt(document.getElementById('che').value)/10) + 1)
  let psp = 3 * (parseInt(parseInt(document.getElementById('psp').value)/10) + 1)
  let eln = 3 * (parseInt(parseInt(document.getElementById('eln').value)/10) + 1)
  let eme = 3 * (parseInt(parseInt(document.getElementById('eme').value)/10) + 1)
  let chel = (parseInt(parseInt(document.getElementById('chel').value)/10) + 1)
  let cpl = (parseInt(parseInt(document.getElementById('cpl').value)/10) + 1)
  let egh2 = 2 * (parseInt(parseInt(document.getElementById('egh2').value)/10) + 1)
  let sfh = (parseInt(parseInt(document.getElementById('sfh').value)/10) + 1)

  creditScore1 = mat + phy + ele + civ + evn + phyl + elel + egh + idt;
  creditScore2 = mat2 + che + psp + eln + eme + chel + cpl + egh2 + sfh;

  sgpa1 = creditScore1/20;
  sgpa2 = creditScore2/20;

  cgpa = (sgpa1+sgpa2)/2;

  document.getElementById('sgpa1').innerText = `SGPA for Physics Cycle : ${sgpa1}`;
  document.getElementById('sgpa2').innerText = `SGPA for Chemistry Cycle : ${sgpa2}`;
  document.getElementById('cgpa').innerText = `CGPA for First Year : ${cgpa}`;
  clearAll()
})

function clearAll(){
  let subs = document.getElementsByClassName("subject")
  for (let i=0; i<subs.length; i++){
    subs[i].value = '';
  }
}

