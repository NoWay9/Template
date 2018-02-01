function UserModel(){
  var userList = [
  {id:1, name:'john', age:123, city:'kyiv'},
  {id:2, name:'alex', age:55, city:'lviv'}
  ];
  this.getUsersList = function(){
      return userList;
  };

}
