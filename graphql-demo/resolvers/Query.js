exports.Query = {
    courses: (parent, args, { db }) => {
        let filteredCourses = db.courses;
        const { filter } = args;
        if(filter){
            if(filter.discount){
                filteredCourses = filteredCourses.filter(product => product.discount)
            }
        }
        return filteredCourses
    },
    course: (parent, args, { db }) => {
        const courseId = args.id;
        const course = db.courses.find(item => item.id === courseId);
        if(!course) return null;
        else return course;
    },
    genres: (parent, args, { db }) => db.genres,
    genre: (parent, args, { db }) => {
        const catId = args.id;
        const genre = db.genres.find(item => item.id === catId);
        if(!genre) return null;
        else return genre;
    },
    numOfCourses: () => {
        return 12
    },
    price: () => {
        return 134.43
    },
    isTrainer: () => {
        return true
    }
}