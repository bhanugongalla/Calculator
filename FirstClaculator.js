var firstnum,secnumm,res
function inputvalues(){
    firstnum=Number(document.getElementById('firstnum').value)
   secnumm=Number(document.getElementById('secnum').value)
    
}

function Addfun(){
    inputvalues()
    res=firstnum +secnumm
    document.getElementById('result').value=res
  /* console.log(res)*/
  
 

}
function  Subfun(){
  inputvalues()
  res=firstnum - secnumm
  document.getElementById('result').value=res
/* console.log(res)*/



}
function Mulfun(){
  inputvalues()
  res=firstnum * secnumm
  document.getElementById('result').value=res
/* console.log(res)*/



}
function Divfun(){
  inputvalues()
  res=firstnum/secnumm
  document.getElementById('result').value=res
/* console.log(res)*/



}
function clearfun(){
 
document.getElementById("firstnum").value=''
document.getElementById("secnum").value=''
document.getElementById("result").value=''




// document.getElementById('firstnum','secnumm').innerHTML= eval()
 
 
/* console.log(res)*/
 


}