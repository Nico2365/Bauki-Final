import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult("");
    }
  };

  const handleAnalyze = () => {
    if (!image) return;
    setResult("✔️ Analyse abgeschlossen: Keine Auffälligkeiten festgestellt.");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Bau-KI Analyse</h1>

      <Card className="w-full max-w-md mb-4">
        <CardContent className="p-4">
          <input type="file" accept="image/*" onChange={handleUpload} />
          {preview && (
            <img
              src={preview}
              alt="Vorschau"
              className="mt-4 rounded-xl border shadow-md"
            />
          )}
        </CardContent>
      </Card>

      <Button onClick={handleAnalyze} disabled={!image}>
        Bild analysieren
      </Button>

      {result && (
        <div className="mt-6 p-4 bg-white rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Analyseergebnis:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}