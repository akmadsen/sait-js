// An array of posts
const posts = [{
        id: 23,
        title: 'Becoming an ES6 Wizard',
        body: 'Ille vivere. Ut ad te ...'
    },
    {
        id: 29,
        title: 'JavaScript Pro Tips',
        body: 'Pellentesque euismod ...'
    },
    {
        id: 31,
        title: 'Acing your next JS interview',
        body: 'Lorem ipsum dolor sit amet...'
    }
];

// Find the post with ID 29
const currentId = 29;
const currentPost = posts.find(post => post.id === currentId); 
console.log(currentPost.title);
console.log(currentPost.body);