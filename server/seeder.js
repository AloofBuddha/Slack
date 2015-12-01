Meteor.startup(() => {
  Factory.define('message', Messages, { 
    text() { return Fake.sentence(); } 
  });

  // Add this if you want to remove all messages before seeding
  // Messages.remove({});

  // if (Messages.find({}).count() === 0) {
  //   _(10).times(() => Factory.create('message'));
  // }
});