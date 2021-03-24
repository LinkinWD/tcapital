//Variables for setup

let container;
let camera;
let renderer;
let scene;
let house;

function init() {
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();

  const fov = 30;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 500;

  //Camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(-9, -24, 70);

  const ambient = new THREE.AmbientLight(0x404040, 1.4);
  scene.add(ambient);
  const hemilight = new THREE.HemisphereLight(0xb1e1ff, 0xb97a20, 1);
    scene.add(hemilight);
  const light = new THREE.DirectionalLight(0xffffff, 1.4);
  light.position.set(50, 50, 50);
  scene.add(light);
  
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  //Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("./img/logo.gltf", function(gltf) {
    scene.add(gltf.scene);
    move = gltf.scene.children[0];
    
   
    animate();
  });
}

function animate() {
  requestAnimationFrame(animate);
  move.rotation.z += 0.01;
  
  
  renderer.render(scene, camera);
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);