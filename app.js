const email=document.querySelector('.email');
const update=document.querySelector('.update');

email.addEventListener('input',inputmail);
function inputmail(e){
  const input=e.target.value;
  if(input && /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/.test(input)){
    update.innerHTML='Valid Email';
    update.classList.add('success');
    update.classList.remove('failure');
  }
  else{
    update.innerHTML='keep going.....';
    update.classList.remove('success');
    update.classList.add('failure');
  }
}
