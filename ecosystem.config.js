module.exports = {
  apps: [
    {
      name: "pm2-deploy",
      script: "index.js",
    },
  ],
  deploy: {
    production: {
      user: "remote-server-username",
      host: "remote-server-ip",
      path: "project-path-in-remote-server",
      repo: "git@github.com:T410/pm2-deploy.git",
      ref: "origin/main",
      key: "ssh-key-path-in-local-machine",
      "post-deploy": "npm i; pm2 reload ecosystem.config.js --env production",
    },
  },
};
