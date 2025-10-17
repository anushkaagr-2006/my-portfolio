const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Contact Form API Endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
            error: 'All fields are required' 
        });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ 
            error: 'Invalid email address' 
        });
    }

    // Create contact data object
    const contactData = {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
    };

    // Save to a JSON file (simple storage solution)
    const dataFile = path.join(__dirname, 'contacts.json');
    
    // Read existing contacts
    let contacts = [];
    if (fs.existsSync(dataFile)) {
        try {
            const fileData = fs.readFileSync(dataFile, 'utf8');
            contacts = JSON.parse(fileData);
        } catch (error) {
            console.error('Error reading contacts file:', error);
        }
    }

    // Add new contact
    contacts.push(contactData);

    // Save to file
    try {
        fs.writeFileSync(dataFile, JSON.stringify(contacts, null, 2));
        console.log('New contact message received:', contactData);
        
        res.status(200).json({ 
            success: true,
            message: 'Message received successfully!' 
        });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ 
            error: 'Failed to save message. Please try again.' 
        });
    }
});

// API endpoint to view all contacts (for you to check messages)
app.get('/api/contacts', (req, res) => {
    const dataFile = path.join(__dirname, 'contacts.json');
    
    if (!fs.existsSync(dataFile)) {
        return res.json({ contacts: [] });
    }

    try {
        const fileData = fs.readFileSync(dataFile, 'utf8');
        const contacts = JSON.parse(fileData);
        res.json({ contacts });
    } catch (error) {
        console.error('Error reading contacts:', error);
        res.status(500).json({ error: 'Failed to retrieve contacts' });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📧 Contact form will save messages to contacts.json`);
});