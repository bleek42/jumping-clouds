const jumpingClouds = (clouds) => {
	return clouds.length < 4
		? 1
		: 1 + jumpingClouds(clouds.slice(clouds[2] === 0 ? 2 : 1));
};

const cloudArray = [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0];

console.log(jumpingClouds(cloudArray));
