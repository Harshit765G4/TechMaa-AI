const Application = require('../models/application.model');
const Contact = require('../models/contact.model');
const Newsletter = require('../models/newsletter.model');
const Job = require('../models/job.model'); // <-- ADD THIS
const Post = require('../models/post.model'); // <-- ADD THIS
const { nanoid } = require('nanoid');

// --- Form Handlers ---
// (subscribeNewsletter and handleContactForm remain the same)
exports.subscribeNewsletter = async (req, res) => { /* ... existing code ... */ };
exports.handleContactForm = async (req, res) => { /* ... existing code ... */ };

// --- Application Handlers ---
// (createApplication and getApplicationStatus remain the same)
exports.createApplication = async (req, res) => { /* ... existing code ... */ };
exports.getApplicationStatus = async (req, res) => { /* ... existing code ... */ };


// --- Dynamic Content ---

// @desc    Get all jobs
// @route   GET /api/public/jobs
// @access  Public
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({}).sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs' });
  }
};

// @desc    Get all posts
// @route   GET /api/public/posts
// @access  Public
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ publishedAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
};