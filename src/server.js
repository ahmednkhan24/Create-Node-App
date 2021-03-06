import app from './app';

const startServer = () => {
  const PORT = process.env.PORT || 3000;
  const IP = process.env.IP || '0.0.0.0';

  const server = app.listen(PORT, IP, () => {
    const { address, port } = server.address();
    console.log(`Server running at http://${address}:${port}`);
  });
};

startServer();
