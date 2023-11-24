import { GiMuscleUp } from "react-icons/gi";
import aboutImg from "../assets/about.jpg";
const About = () => {
  return (
    <div className="min-h-screen text-black">
      <img src={aboutImg} alt="workout" className="object-cover h-96 w-full" />
      <div className="max-w-4xl mx-auto  py-10  p-2">
        <h1 className="flex text-4xl font-bold mb-4 text-primary ">
          Welcome to Gym
          <GiMuscleUp />
          Bruh
        </h1>

        <p className="mb-8">
          At GymBruh, we believe in the transformative power of movement and
          well-being. Our mission is to inspire and guide individuals on their
          journey to a healthier and happier life.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Who We Are:</h2>
          <p className="text-gray-700">
            We are a passionate team of fitness enthusiasts, dedicated to
            creating a supportive community for individuals seeking positive
            changes in their lives. Committed to providing you with the tools
            and knowledge you need to achieve your wellness goals.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us:</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Holistic Approach: We believe in a holistic approach to
              well-being, addressing both physical and mental fitness to ensure
              long-term success.
            </li>
            <li>
              Innovation: Stay ahead of the curve with the latest trends and
              innovations in the fitness world. We regularly update our programs
              to keep your workouts exciting and effective.
            </li>
            <li>
              Results-Driven: Your success is our success. We are dedicated to
              helping you achieve and surpass your fitness goals through proven
              methods and expert guidance.
            </li>
          </ul>
        </div>

        <p className="mb-8 text-gray-700">
          <strong>Join Us on Your Wellness Journey:</strong> Embark on a path to
          a better version of yourself with GymBruh. Whether you're looking to
          build strength, improve flexibility, or enhance your overall
          well-being, we're here to support you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default About;
