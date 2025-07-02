import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

app.get('/api', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server error!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});