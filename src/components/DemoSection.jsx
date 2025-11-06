import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

function WallsAndFloor({ wallColor = '#94a3b8' }) {
  return (
    <group>
      {/* Floor */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <boxGeometry args={[8, 0.5, 8]} />
        <meshStandardMaterial color="#e2e8f0" />
      </mesh>
      {/* Walls */}
      <mesh position={[0, 1, -4]} castShadow>
        <boxGeometry args={[8, 2, 0.2]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>
      <mesh position={[0, 1, 4]} castShadow>
        <boxGeometry args={[8, 2, 0.2]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>
      <mesh position={[-4, 1, 0]} castShadow>
        <boxGeometry args={[0.2, 2, 8]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>
      <mesh position={[4, 1, 0]} castShadow>
        <boxGeometry args={[0.2, 2, 8]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>
    </group>
  );
}

export default function DemoSection() {
  const fileInput = useRef(null);
  const [wallColor, setWallColor] = useState('#94a3b8');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('Drop a blueprint (PNG/JPG/SVG) or click Upload');

  const analyzeMock = async () => {
    setLoading(true);
    setStatus('Analyzing blueprint...');
    await new Promise(r => setTimeout(r, 900));
    // mock response
    const res = { success: true, walls: [{ x: 0, y: 0, w: 8, h: 2 }], floor: { w: 8, h: 8 } };
    setLoading(false);
    setStatus('Success: layout generated');
    return res;
  };

  const handleUpload = async (file) => {
    if (!file) return;
    await analyzeMock();
  };

  const onDrop = async (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    await handleUpload(f);
  };

  return (
    <section id="demo" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Panel */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Upload Blueprint</h3>
            <div
              onDrop={onDrop}
              onDragOver={(e) => e.preventDefault()}
              className="flex flex-col items-center justify-center h-48 border-2 border-dashed rounded-xl border-slate-300 dark:border-slate-700 hover:border-indigo-400 transition"
            >
              <p className="text-slate-600 dark:text-slate-300 text-center px-6">{status}</p>
              <div className="mt-4 flex gap-3">
                <button onClick={() => fileInput.current?.click()} className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-500 text-white">Upload</button>
                <button onClick={analyzeMock} className="px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900">Share Demo</button>
                <button onClick={() => alert('Downloading GLTF...')} className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700">Download GLTF</button>
              </div>
              <input ref={fileInput} type="file" accept="image/png,image/jpeg,image/svg+xml" className="hidden" onChange={(e) => handleUpload(e.target.files?.[0])} />
            </div>
            <div className="mt-6 rounded-xl bg-slate-50 dark:bg-slate-800 p-4">
              <p className="text-sm text-slate-600 dark:text-slate-300">AI Suggestions</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button onClick={() => setWallColor('#94a3b8')} className="px-3 py-1.5 rounded-lg border">Optimize Layout</button>
                <button onClick={() => setWallColor('#334155')} className="px-3 py-1.5 rounded-lg border">Recolor Walls</button>
                <button onClick={() => alert('Add Windows action')} className="px-3 py-1.5 rounded-lg border">Add Windows</button>
              </div>
            </div>
          </div>

          {/* Viewer */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">3D Viewer</h3>
            <div className="h-96 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
              <Canvas shadows camera={{ position: [6, 5, 6], fov: 50 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 8, 5]} intensity={0.8} castShadow />
                <Environment preset="city" />
                <WallsAndFloor wallColor={wallColor} />
                <OrbitControls />
              </Canvas>
            </div>
            {loading && <p className="mt-3 text-sm text-indigo-600">Loading...</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
