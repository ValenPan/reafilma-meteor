Template.reelList.helpers({
  reels: function() {
    return Reels.find();
  }
});


Template.reelList.events({
	'click #player': function (event) {
	var playername=event.currentTarget.id;
	
     $('#'+playername).toggleClass("rotatey");
  },

  'click .player': function (event) {
	
	
     $(event.target).toggleClass("rotatez");
  }
})

