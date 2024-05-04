const Redis = require("ioredis");

const redis = new Redis();

redis.on("error", (error) => {
  console.error("Error connecting to Redis:", error);
});

export default redis;
