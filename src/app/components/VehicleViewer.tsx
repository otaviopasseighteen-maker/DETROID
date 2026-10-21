"use client";

import { useState } from "react";
import { Box, Rotate3D, ExternalLink } from "lucide-react";

const MITSUBISHI_MODELS = [
  {
    id: "lancer-evolution-final-edition",
    name: "Lancer Evolution Final Edition",
    year: "2015",
    sketchfabId: "a31a821037c94684bbbd3312cd4d5896",
    source: "https://sketchfab.com/3d-models/2015-mitsubishi-lancer-evolution-final-edition-a31a821037c94684bbbd3312cd4d5896",
    creator: "Ddiaz Design",
    license: "CC BY-NC-SA",
  },
  {
    id: "eclipse-gsx",
    name: "Eclipse GSX",
    year: "1999",
    sketchfabId: "38ea726a6aae496981069cdfdb140adc",
    source: "https://sketchfab.com/3d-models/1999-mitsubishi-eclipse-gsx-38ea726a6aae496981069cdfdb140adc",
    creator: "Ddiaz Design",
    license: "CC BY-NC-SA",
  },
  {
    id: "3000gt-vr4",
    name: "3000GT VR-4 Turbo",
    year: "1998",
    sketchfabId: "3e7ffda18a274ce4a5453a2c2591d2ac",
    source: "https://sketchfab.com/3d-models/1998-mitsubishi-3000gt-vr-4-turbo-3e7ffda18a274ce4a5453a2c2591d2ac",
    creator: "SIU Car Garage",
    license: "CC BY-NC",
  },
];

export default function VehicleViewer() {
  const [selectedId, setSelectedId] = useState(MITSUBISHI_MODELS[0].id);
  const selectedModel =
    MITSUBISHI_MODELS.find((model) => model.id === selectedId) ??
    MITSUBISHI_MODELS[0];

  return (
    <div className="experience-visual">
      <div className="viewer-overlay">
        <div className="viewer-kicker">
          <Box size={15} /> SHOWROOM 3D <span>• MITSUBISHI COLLECTION</span>
        </div>
      </div>

      <div className="viewer-model-picker" aria-label="Escolher modelo Mitsubishi">
        {MITSUBISHI_MODELS.map((model) => (
          <button
            key={model.id}
            type="button"
            className={selectedModel.id === model.id ? "viewer-model-option is-active" : "viewer-model-option"}
            onClick={() => setSelectedId(model.id)}
            aria-pressed={selectedModel.id === model.id}
          >
            <span>{model.year}</span>
            {model.name}
          </button>
        ))}
      </div>

      <iframe
        key={selectedModel.sketchfabId}
        className="sketchfab-model-frame"
        title={`Modelo 3D interativo Mitsubishi ${selectedModel.name} ${selectedModel.year}`}
        src={`https://sketchfab.com/models/${selectedModel.sketchfabId}/embed?autostart=1&ui_theme=dark&ui_infos=1&ui_watermark=1`}
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />

      <div className="viewer-hint">INSPECIONE • GIRE • APROXIME</div>
      <div className="viewer-controls-hint">
        ARRASTE PARA GIRAR
        <br />
        PINÇA OU RODA PARA ZOOM
      </div>

      <a
        className="viewer-source-link"
        href={selectedModel.source}
        target="_blank"
        rel="noreferrer"
      >
        <ExternalLink size={12} />
        {selectedModel.creator} · {selectedModel.license}
      </a>
    </div>
  );
}
