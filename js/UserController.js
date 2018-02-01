function UserController(){
  var userModel = new UserModel;
  var userView = new UserView;
 this.init = function(){
   var userList = userModel.getUsersList();

   userView.render(userList);
 }
}
