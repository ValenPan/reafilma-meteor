

Template.layout.created = function(){
  Session.set('currentScroll', null);
}

Template.layout.rendered = function(){
    if(currentScroll=Session.get('currentScroll')){
      $('body').scrollTop(currentScroll);
      Session.set('currentScroll', null);
    }

  
}
