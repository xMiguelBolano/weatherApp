import './App.css'
// import Header from "./components/header";
// import Footer from "./components/footer";

function Comments() {
    return (
      <div className="flex flex-col gap-6 items-center justify-center h-screen bg-gray-800 text-white">
        <div className="bg-gray-700 p-6 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-2">Comments</h1>
          <p>This is the comments section.</p>
        </div>
  
        <div className="bg-gray-700 p-6 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-xl font-bold mb-2">Comment 1</h1>
          <p>This is the first comment.</p>
        </div>
      </div>
    );
  }

export default Comments;
