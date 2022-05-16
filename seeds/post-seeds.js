const { Post } = require('../models');

const postdata = [
  {
    title: 'Humans are the new internet.',
    post_text: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, a',
    user_id: 1
  },
  {
    title: 'You cant java my script.',
    post_text: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, a',
    user_id: 2
  },
  {
    title: 'Im partial to partials.',
    post_text: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, a',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;