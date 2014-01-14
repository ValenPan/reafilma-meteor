Meteor.publish('reels',function(){
	return Reels.find();
});