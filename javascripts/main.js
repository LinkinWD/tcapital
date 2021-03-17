
const estraadi = document.querySelector('.animaatio')
/* First thing we need to do is to create a scene. Scene is like a universe where we can add objects, camera and lights etc. */
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x2f2828 ); 
/* Next we need to setup the camera. basically it’s the width of the perception angle. Let’s set it to 75, next is the aspect ratio, we’re going to use current width divided by height. */
const camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight );
camera.position.z = 5
camera.position.x = 0



const renderer = new THREE.WebGLRenderer( { antialias: true});

renderer.setSize( window.innerWidth , window.innerHeight);
estraadi.append( renderer.domElement );

const hlight = new THREE.PointLight( 0xff0000, 100 );
scene.add( hlight );

let loader = new THREE.GLTFLoader()

loader.load('img/logo.glb', function(glb){
    scene.add(glb.scene)
    renderer.render(scene,camera);
})
glb.rotation.x =5

var animate = function(){
    glb.rotation.x += 0.01;
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
}


animate()
