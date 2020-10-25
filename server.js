const { PeerServer } = require('peer');

const PORT =  process.env.PORT || 9000;
const peerServer = PeerServer({ port: 9000, path: '/myapp' });