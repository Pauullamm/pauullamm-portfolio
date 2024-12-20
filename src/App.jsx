import { Canvas } from '@react-three/fiber'
import './App.css'
import { FirstPersonControls } from 'three/examples/jsm/Addons.js'

function App() {

  return (
    <div id='canvas-container'>
      <Canvas camera={{position: [0, 0, 5]}}>
        <mesh>
          <torusKnotGeometry args={[1, 0.3, 255, 256]}/>
          <meshToonMaterial color={0x00bfff}/>
        </mesh>
        <directionalLight position={[4, 5, 1]}/>
      </Canvas>
    </div>
  )
}

export default App
