import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Load mock databases
const productsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'products.json'), 'utf-8'));
const blogsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'blogs.json'), 'utf-8'));

// Store in-memory demo bookings & contact requests
const demoRequests = [];
const contactSubmissions = [];

// Health Check
app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString(), service: 'SecureStack AI API' });
});

// GET /api/v1/products - Fetch all or filter products
app.get('/api/v1/products', (req, res) => {
  let { category, search } = req.query;
  let results = [...productsData];

  if (category && category !== 'All') {
    results = results.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.vendor.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q)
    );
  }

  res.json({ success: true, count: results.length, products: results });
});

// GET /api/v1/products/:slug - Fetch single product
app.get('/api/v1/products/:slug', (req, res) => {
  const product = productsData.find(p => p.slug === req.params.slug || p.id === req.params.slug);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  res.json({ success: true, product });
});

// POST /api/v1/compare - Compare multiple products
app.post('/api/v1/compare', (req, res) => {
  const { productIds } = req.body;
  if (!Array.isArray(productIds) || productIds.length === 0) {
    return res.status(400).json({ success: false, message: 'Array of productIds is required' });
  }

  const selected = productsData.filter(p => productIds.includes(p.id) || productIds.includes(p.slug));
  res.json({
    success: true,
    comparedCount: selected.length,
    products: selected
  });
});

// POST /api/v1/demo/book - Book a demo
app.post('/api/v1/demo/book', (req, res) => {
  const { fullName, workEmail, companyName, companySize, industry, primaryInterest, message, preferredMeetingTime } = req.body;

  if (!fullName || !workEmail || !companyName) {
    return res.status(400).json({ success: false, message: 'Full Name, Work Email, and Company Name are required' });
  }

  const newBooking = {
    id: `DEMO-${Date.now()}`,
    fullName,
    workEmail,
    companyName,
    companySize: companySize || '10-50',
    industry: industry || 'Technology',
    primaryInterest: primaryInterest || 'Security Product Comparison & Compliance',
    message: message || '',
    preferredMeetingTime: preferredMeetingTime || new Date(),
    status: 'CONFIRMED',
    createdAt: new Date().toISOString()
  };

  demoRequests.push(newBooking);

  res.status(201).json({
    success: true,
    message: 'Demo successfully booked. A confirmation email has been dispatched to your address.',
    booking: newBooking
  });
});

// GET /api/v1/resources/blogs - Fetch blogs & guides
app.get('/api/v1/resources/blogs', (req, res) => {
  res.json({ success: true, count: blogsData.length, blogs: blogsData });
});

// POST /api/v1/contact - Process contact message
app.post('/api/v1/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, Email, and Message are required' });
  }

  const submission = {
    id: `MSG-${Date.now()}`,
    name,
    email,
    subject: subject || 'General Inquiry',
    message,
    timestamp: new Date().toISOString()
  };

  contactSubmissions.push(submission);

  res.status(201).json({
    success: true,
    message: 'Thank you for reaching out. A security consultant will get back to you within 2 business hours.',
    submissionId: submission.id
  });
});

// GET /api/v1/search - Unified Search
app.get('/api/v1/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
    return res.json({ success: true, products: [], blogs: [] });
  }

  const query = q.toLowerCase();
  const matchedProducts = productsData.filter(p => 
    p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
  );

  const matchedBlogs = blogsData.filter(b => 
    b.title.toLowerCase().includes(query) || b.category.toLowerCase().includes(query)
  );

  res.json({
    success: true,
    products: matchedProducts,
    blogs: matchedBlogs
  });
});

app.listen(PORT, () => {
  console.log(`[SecureStack AI Server] REST API running on port ${PORT}`);
});
