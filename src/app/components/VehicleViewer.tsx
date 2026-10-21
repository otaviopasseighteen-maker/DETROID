"use client";

import { useEffect, useState } from "react";
import { Box, Rotate3D } from "lucide-react";

const MODEL_URL =
  "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/CarConcept/glTF-Binary/CarConcept.glb";

export default function VehicleViewer() {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    import("@google/model-viewer").catch(() => setFailed(true));
  }, []);

  return (
    <div className="experience-visual">
      <div className="viewer-overlay">
        <div className="viewer-kicker"><Box size={15} /> SHOWROOM 3D <span>• MODELO CONCEITUAL</span></div>
      </div>
      {!loaded && !failed && (
        <div className="viewer-loading" role="status">
          <Rotate3D size={30} />
          <span>CARREGANDO MODELO 3D...</span>
        </div>
      )}
      {failed ? (
        <div className="viewer-fallback">
          <Box size={32} />
          <strong>Visualizador 3D indisponível</strong>
          <span>Confira sua conexão e recarregue a página.</span>
        </div>
      ) : (
        <model-viewer
          class="vehicle-model-viewer"
          src={MODEL_URL}
          alt="Modelo conceitual de automóvel em 3D"
          camera-controls
          auto-rotate
          rotation-per-second="18deg"
          shadow-intensity="1"
          exposure="1"
          environment-image="neutral"
          interaction-prompt="auto"
          loading="eager"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
      <div className="viewer-hint">INSPECIONE • GIRE • DESCUBRA</div>
      <div className="viewer-controls-hint">ARRASTE PARA GIRAR<br />PINÇA OU RODA PARA ZOOM</div>
    </div>
  );
}
