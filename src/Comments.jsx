import './App.css'
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Comments({isCitySearched, resetKey}) {
    const [comment, setComment] = useState("");        // input del texto
    const [image, setImage] = useState("");            // input del imagen
    const [comments, setComments] = useState([]);      // lista de comentarios
    const [showForm, setShowForm] = useState(false);
    
    useEffect(() => {
        setComments([]);
    }, [resetKey]);

    const handleAddComment = () => {
      if (comment.trim() !== "" || image) {
        setComments([...comments, {text: comment, image}]);  // agrega el nuevo comentario o imagen
        setComment("");
        setImage("");
        setShowForm(false);
      }
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];                // obtiene el archivo de la imagen
      if (file) {
        const imageUrl = URL.createObjectURL(file);  // crea una URL para la imagen
        setImage(imageUrl);                        // establece la URL de la imagen
      }
    }
  
    return (
      <div className="flex flex-col gap-6 items-center justify-center min-h-screen text-white p-4 w-full">
        {isCitySearched && (
          <>
            <button
              onClick={() => setShowForm(!showForm)}
              className="mb-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded text-white"
            >
              {showForm ? "Cancelar" : "Agregar Comentario"}
            </button>
    
            {showForm && (
              <div className="bg-gray-700 p-6 rounded-lg shadow-md w-full max-w-md mb-6">
                <h1 className="text-2xl font-bold mb-4">Nuevo Comentario</h1>
                <textarea
                  className="w-full p-2 rounded text-white"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Escribe tu comentario..."
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-2"
                />
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded"
                  onClick={handleAddComment}
                >
                  Enviar
                </button>
              </div>
            )}
          </>
        )}
    
        {comments.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {comments.map((c, index) => (
              <div
                key={index}
                className="bg-gray-700 p-4 rounded-lg shadow-md"
              >
                <h2 className="text-lg font-semibold">Comentario {index + 1}</h2>
                <p>{c.text}</p>
                {c.image && (
                  <img
                    src={c.image}
                    alt={`Comentario ${index + 1}`}
                    className="mt-2 rounded max-h-100 w-full object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
Comments.propTypes = {
    isCitySearched: PropTypes.bool.isRequired,
    resetKey: PropTypes.number.isRequired,
};


export default Comments;
