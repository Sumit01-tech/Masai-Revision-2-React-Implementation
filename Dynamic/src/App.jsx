import { useState } from "react";

export default function DynamicFormBuilder() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    setQuestions(prev => [
      ...prev,
      { id: Date.now(), text: "", type: "text" }
    ]);
  };

  const removeQuestion = (id) => {
    setQuestions(prev => prev.filter(q => q.id !== id));
  };

  const updateQuestion = (id, field, value) => {
    setQuestions(prev =>
      prev.map(q =>
        q.id === id ? { ...q, [field]: value } : q
      )
    );
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: "8px"
      }}
    >
      <h2 style={{ textAlign: "center" }}>Survey Builder</h2>

      <button onClick={addQuestion}>Add Question</button>

      {questions.map((q, index) => (
        <div key={q.id} style={{ marginTop: 10 }}>
          <input
            type="text"
            placeholder={`Question ${index + 1}`}
            value={q.text}
            onChange={(e) =>
              updateQuestion(q.id, "text", e.target.value)
            }
          />

          <select
            value={q.type}
            onChange={(e) =>
              updateQuestion(q.id, "type", e.target.value)
            }
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
          </select>

          <button onClick={() => removeQuestion(q.id)}>
            Remove
          </button>
        </div>
      ))}

      <hr />

      <h3>Live Preview</h3>

      {questions.map(q => (
        <div key={q.id}>
          <label>{q.text}</label>
          <input type={q.type} disabled />
        </div>
      ))}
    </div>
  );
}
