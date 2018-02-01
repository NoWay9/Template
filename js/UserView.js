function UserView(){
var $userList = document.querySelector('#user-list');
var createTemplate = function(templateString, user){
  var result = templateString.replace('#{{','{{');
  result = result.replace(/\{\{\w{1,}\}\}/g, function (match,pos,oribinText) {
    var key_prop=match.substring(2, match.length-2);
    if(key_prop in user) return user[key_prop];
    else return '';
  });
  return '<li>'+result+'</li>';
}
 this.render = function(data){
  var templateString = 'Hello, {{city}} {{age}}! #{{name}}';
  var templateUser='';
    for(var u of data){
      templateUser+=createTemplate(templateString,u);
    }
  $userList.innerHTML = templateUser;
 }
}
