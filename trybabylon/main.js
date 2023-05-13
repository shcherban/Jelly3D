import * as BABYLON from '@babylonjs/core';

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = function() {
  const scene = new BABYLON.Scene(engine);

  scene.createDefaultCameraOrLight(true, false, true);
  const box = new BABYLON.MeshBuilder.CreateBox('myBox', {
    size: 0.1,
    width: 0.2,
    height: 0.3,
    depth: 0.2,
    faceColors: [
      new BABYLON.Color4(1,1,0,1),
      BABYLON.Color3.Green()
    ]
  });
  // const sphere = new BABYLON.MeshBuilder.CreateSphere('mySphere', {
  //   segments: 50,
  //   diameter: 0.3,
  //   diameterY: 0.4
  // }, scene);

  // const ground = new BABYLON.MeshBuilder.CreateGround('',{
  //   height:10,
  //   width:10,
  //   subdivisions:1
  // });

  
  const groundFromHM = new BABYLON.MeshBuilder.CreateGroundFromHeightMap('','./479f69b7b683401fdfb85bc43e2c186cea5552e4.jpg', {
    height: 10,
    width: 10,
    subdivisions: 50
  });
  
  groundFromHM.material = new BABYLON.StandardMaterial();
  groundFromHM.material.wireframe = true;

  return scene;
}

const scene = createScene();

engine.runRenderLoop(function() {
  scene.render();
});

window.addEventListener('resize', function() {
  engine.resize();
})