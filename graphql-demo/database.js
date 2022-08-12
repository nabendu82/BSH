const courses = [
    { id: "book-01", name: "TypeScript Basics", description: "TypeScript for Beginners", price: 599.55, discount: false, genreId: 'cat-01' },
    { id: "book-02", name: "GraphQL Basics", description: "GraphQL for Beginners", price: 499.55, discount: true, genreId: 'cat-01' },
    { id: "book-03", name: "NextJS Basics", description: "NextJS for Beginners", price: 699.55, discount: false, genreId: 'cat-01' },
    { id: "book-04", name: "The Immortal of Meluha", description: "Shiva Trilogy", price: 699.55, discount: false, genreId: 'cat-02' },
    { id: "book-05", name: "The Secret of Nagas", description: "Shiva Trilogy", price: 699.55, discount: true, genreId: 'cat-02' },
]

const genres = [
    { id: 'cat-01', name: 'Technical' },
    { id: 'cat-02', name: 'History' },
]

const reviews = [
    {
        id: "rev-01",
        date: "2022-01-01",
        title: "This is bad",
        comment: "when i bought this it broke the computer",
        rating: 1,
        courseId: "book-02",
    },
    {
        id: "rev-02",
        date: "2022-04-23",
        title: "This is good",
        comment: "one of the most decent book",
        rating: 3,
        courseId: "book-02",
    },
    {
        id: "rev-03",
        date: "2021-04-23",
        title: "is okay",
        comment: "yes it is decent i guess",
        rating: 2,
        courseId: "book-02",
    },
    {
        id: "rev-04",
        date: "2021-07-23",
        title: "terrible",
        comment: "why is it so expensive",
        rating: 1,
        courseId: "book-02",
    },
    {
        id: "rev-05",
        date: "2022-01-01",
        title: "best thing ever",
        comment: "really one of the best book",
        rating: 5,
        courseId: "book-03",
    },
    {
        id: "rev-06",
        date: "2022-04-23",
        title: "SUPER HAPPY",
        comment: "this is amazing, only 4 stars tho... :)",
        rating: 4,
        courseId: "book-03",
    },
    {
        id: "rev-07",
        date: "2021-04-23",
        title: "life changing",
        comment: "life changing spritual book",
        rating: 5,
        courseId: "book-03",
    },
    {
        id: "rev-08",
        date: "2021-07-23",
        title: "This is coooooool!",
        comment: "I would totally recommend it",
        rating: 5,
        courseId: "book-03",
    },
    {
        id: "rev-09",
        date: "2021-07-23",
        title: "Its ok",
        comment: "It's a spoon...",
        rating: 3,
        courseId: "book-05",
    },
    {
        id: "rev-10",
        date: "2021-07-23",
        title: "terrible!!!!!!",
        comment: "Not good at all!! used it once and its full of bugs",
        rating: 1,
        courseId: "book-04",
    },
    {
        id: "rev-11",
        date: "2021-07-23",
        title: "great",
        comment: "Great for learing",
        rating: 5,
        courseId: "book-04",
    },
    {
        id: "rev-12",
        date: "2021-07-23",
        title: "Made well and awesome",
        comment: "Strong and firm technical knowledge",
        rating: 5,
        courseId: "book-04",
    },
    {
        id: "rev-13",
        date: "2021-07-23",
        title: "Plants grew well",
        comment: "Oxygen and nitrogen rich!",
        rating: 3,
        courseId: "book-02",
    },
    {
        id: "rev-14",
        date: "2021-07-23",
        title: "I too loved it",
        comment: "My loved it too much",
        rating: 5,
        courseId: "book-01",
    },
    {
        id: "rev-15",
        date: "2021-07-23",
        title: "I did liked it",
        comment: "My name is Ashib and this is awesome book",
        rating: 5,
        courseId: "book-02",
    },
    {
        id: "rev-16",
        date: "2021-07-23",
        title: "I love spritual books",
        comment: "I love these kind of books",
        rating: 5,
        courseId: "book-01",
    },
    {
        id: "rev-17",
        date: "2021-07-23",
        title: "Just Awesome",
        comment: "I need more of it",
        rating: 5,
        courseId: "book-03",
    },
    {
        id: "rev-18",
        date: "2021-07-23",
        title: "meh",
        comment: "I don't like it",
        rating: 3,
        courseId: "book-03",
    }
];

exports.db = { courses, genres, reviews }