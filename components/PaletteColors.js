// components/ColorPalette.jsx
export default function ColorPalette({ colors }) {
  return (
    <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
      {colors.map((color, index) => (
        <div
          key={color + index}
          style={{
            backgroundColor: color,
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            border: "1px solid #ccc",
            borderRadius: "50%",
          }}
          title={color}
          // Agregar un label accesible, se puede entender qué color está siendo representado
        />
      ))}
    </div>
  );
}
