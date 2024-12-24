import Header from "./Header";
import SecondHeader from "./SecondHeader";
import CourseCard from '../CourseCard';
import Footer from '../Footer';
import "./home.css";

const Home = () => {

        // Sample course data
        const courses = [
            {
              title: 'Introduction to React',
              description: 'Learn the fundamentals of React including components, props, and state management.',
              thumbnail: '/photos/web dev.jpg',
              instructor: 'Jane Doe',
              duration: '6 hours',
              students: 234,
              progress: 50,
              lessons: 12,
              price: 49.99,
              category: 'Programming',
            },
            {
              title: 'Mastering Python',
              description: 'Become an expert in Python programming and data analysis.',
              thumbnail: '/photos/web dev2.jpg',
              instructor: 'John Smith',
              duration: '8 hours',
              students: 120,
              progress: 75,
              lessons: 16,
              price: 59.99,
              category: 'Programming',
            },
            {
              title: 'UI/UX Design Principles',
              description: 'Design stunning user interfaces and experiences for web and mobile applications.',
              thumbnail: '/photos/ml course.jpg',
              instructor: 'Sarah Lee',
              duration: '4 hours',
              students: 98,
              progress: 20,
              lessons: 10,
              price: 39.99,
              category: 'UI/UX Design',
            },
            {
              title: 'UI Design',
              description: 'Design stunning user interfaces and experiences for web and mobile applications.',
              thumbnail: '/photos/ml course2.jpg',
              instructor: 'Sarah Lee',
              duration: '4 hours',
              students: 98,
              progress: 20,
              lessons: 10,
              price: 19.99,
              category: 'UI/UX Design',
            },
          ];

    return (
        <div>
            <Header />
            <SecondHeader/>
            <br/>
            <h3>Welcome Nuwantha!</h3>
            <br/>
  
              <img src = "/cq5dam.web.1280.1280.png" alt='image' width="100%" height="auto"/>

              {/* Most Popular Courses Section */}
              <div className="courses-section">
                <h2>Most Popular Courses</h2>
                <div className="courses-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                  ))}
                </div>
                <button className="see-more-button">See More</button>
              </div>
        
              {/* Most Viewed Courses Section */}
              <div className="courses-section">
                <h2>Most Viewed Courses</h2>
                <div className="courses-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                  ))}
                </div>
                <button className="see-more-button">See More</button>
              </div>
        
              {/* Promo Section */}
              <div className="flex flex-col md:flex-row w-full bg-gray-50 min-h-[400px]">
                {/* Left side - Content */}
                <div className="flex-1 flex flex-col justify-center items-center p-8 space-y-6">
                  <h3 className="text-3xl font-bold text-center">
                    Quality Education for Everyone, Without Barriers.
                  </h3>
                  <p className="text-xl text-gray-600">Start Today!</p>
                </div>
                
                </div>
        
              {/* Footer */}
              <Footer />

        </div>
    );
};

export default Home;
