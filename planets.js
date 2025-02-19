import * as THREE from "three";

// Sun
const sunTexture = new THREE.TextureLoader().load("./img/sun.jpg");
const sun = new THREE.Mesh(
  new THREE.SphereGeometry(3, 64, 64),
  new THREE.MeshStandardMaterial({
    map: sunTexture,
    //emissive: 0xffaa00,
    //emissiveIntensity: 1,
  }),
);

// Mercury
const mercuryTexture = new THREE.TextureLoader().load("./img/mercury.jpg");
const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(3, 64, 64),
  new THREE.MeshStandardMaterial({ map: mercuryTexture }),
);
mercury.position.x = 0.39 * 30;

// Venus
const venusSufaceTexture = new THREE.TextureLoader().load(
  "./img/venus_surface.jpg",
);
const venus = new THREE.Mesh(
  new THREE.SphereGeometry(3, 64, 64),
  new THREE.MeshStandardMaterial({ map: venusSufaceTexture }),
);
venus.position.x = 0.723 * 30;

const venusAtmosphereTexture = new THREE.TextureLoader().load(
  "./img/venus_atmosphere.jpg",
);
const venusAtmosphere = new THREE.Mesh(
  new THREE.SphereGeometry(3.05, 64, 64),
  new THREE.MeshStandardMaterial({
    alphaMap: venusAtmosphereTexture,
    transparent: true,
  }),
);
venus.add(venusAtmosphere);

// Earth
const earthTexture = new THREE.TextureLoader().load("./img/earth.png");
const earthBumpTexture = new THREE.TextureLoader().load("./img/earth_bump.tif");
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(3, 64, 64),
  new THREE.MeshStandardMaterial({
    map: earthTexture,
    BumpMap: earthBumpTexture,
    bumpScale: 0.03,
  }),
);
earth.position.x = 1 * 30;

const cloudsTexture = new THREE.TextureLoader().load("./img/earth_clouds.jpg");
const clouds = new THREE.Mesh(
  new THREE.SphereGeometry(3.05, 64, 64),
  new THREE.MeshStandardMaterial({
    alphaMap: cloudsTexture,
    transparent: true,
  }),
);
earth.add(clouds);
//
// Mars
const marsTexture = new THREE.TextureLoader().load("./img/mars.jpg");
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(3, 64, 64),
  new THREE.MeshStandardMaterial({ map: marsTexture }),
);
mars.position.x = 1.524 * 30;

// Jupiter
const jupiterTexture = new THREE.TextureLoader().load("./img/jupiter.jpg");
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(3, 64, 64),
  new THREE.MeshStandardMaterial({ map: jupiterTexture }),
);
jupiter.position.x = 5.203 * 30;

// saturn
const saturnTexture = new THREE.TextureLoader().load("./img/saturn.jpg");
const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(3, 64, 64),
  new THREE.MeshStandardMaterial({ map: saturnTexture }),
);
saturn.position.x = 9.539 * 30;

// uranus
const uranusTexture = new THREE.TextureLoader().load("./img/uranus.jpg");
const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(3, 64, 64),
  new THREE.MeshStandardMaterial({ map: uranusTexture }),
);
uranus.position.x = 19.18 * 30;

// neptune
const neptuneTexture = new THREE.TextureLoader().load("./img/neptune.jpg");
const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(3, 64, 64),
  new THREE.MeshStandardMaterial({ map: neptuneTexture }),
);
neptune.position.x = 30.06 * 30;

sun.name = "theSun";
mercury.name = "theMercury";
venus.name = "theVenus";
earth.name = "theEarth";
mars.name = "theMars";
jupiter.name = "theJupiter";
saturn.name = "theSaturn";
uranus.name = "theUranus";
neptune.name = "theUranus";

const planetsName = [
  "theSun",
  "theMercury",
  "theVenus",
  "theEarth",
  "theMars",
  "theJupiter",
  "theSaturn",
  "theUranus",
  "theUranus",
];

export {
  sun,
  mercury,
  venus,
  earth,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune,
  planetsName,
};
