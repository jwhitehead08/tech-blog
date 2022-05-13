const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_text: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue ',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue ',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue ',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;