Template.header.events ({
    "click .user-avatar" : function(e, tmpl){
        var panelToOpenClose = $('.dropdown.user-avatar');

        //realizzo il toggle del pannello
        if (panelToOpenClose.hasClass('open'))
            panelToOpenClose.removeClass('open');
        else
            panelToOpenClose.addClass('open');

        return false;
    }
});

Template.userloggedout.events({
       "click #login": function(e, tmpl){
           Meteor.loginWithGoogle({
               requestPermissions: ['email', 'profile']
           }, function (err) {
               if(err) {
                   //error handling
                   alert('error : '+ err);
                   throw new Meteor.Error(Accounts.LoginCancelledError.numericError, 'Error');
               } else {
                   //show an alert
                   // alert('logged in');
               }
           });
       }
   });

Template.userloggedin.events({
   "click #logout": function(e, tmpl) {
       Meteor.logout(function(err) {
           if(err) {
               //show err message
           } else {
               //show alert that says logged out
               //alert('logged out');
           }
       });
   }
});

Template.sidebar.helpers({
    selectedProduct: function() {
        var currentProduct = Session.get('currentProduct');
        if (currentProduct)
            return currentProduct;
        else
            return null ;
    },

    selectedTeam: function() {
        var currentTeam = Session.get('currentTeam');
        if (currentTeam)
            return currentTeam;
        else
            return null;
    }
});

Template.sidebar.rendered = function() {

    var selectedMenu = Session.get('selectedMenu');
    if (selectedMenu != null)
        $('.sidebarMenu .'+selectedMenu).addClass('active');

}