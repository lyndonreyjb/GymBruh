import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}>
        <div className="hero-content text-center  text-white">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Get Fit Bruh</h1>
            <p className="mb-5 text-xl">
              Empower your journey to greatness with our transformative exercise
              programs, sculpting not just your body, but the hero within.
            </p>
            <Link to="/exercises" className="btn btn-primary">
              Check Our Exercises
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
