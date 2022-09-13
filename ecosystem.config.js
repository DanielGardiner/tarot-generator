module.exports = {
  apps: [
    {
      name: "tarot-generator",
      script: 'yarn --name "tarot" --interpreter bash -- start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "4G",
    },
  ],
};
