var postsData = [
  {
  	title: 'Introducing Telescope',
  	url: 'http://sachagrief.com/Introducing-telescope/'
  },
  
  {
    title: 'Meteor',
    url: 'http://Meteor.com'  
  },

  {
     title: 'The Meteor Book',
     url: 'http://themeteorbook.com'
  }
];
  Template.postsList.helpers({
  	posts: postsData
  });