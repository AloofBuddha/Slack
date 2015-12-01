Template.footer.events({
	'submit form': function(event) {
		event.preventDefault();

		var text = event.target.text.value; 
		event.target.text.value = "";

		if (text !== "") {
      Meteor.call('newMessage', { text });
		}
	}
});