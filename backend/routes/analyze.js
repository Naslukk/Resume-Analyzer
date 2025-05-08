const express = require('express');
const multer = require('multer');
const { runPythonScript } = require('../utils/pythonRunner');
const router = express.Router();

const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

router.post('/', upload.single('resume'), async (req, res) => {
  const jd = req.body.jd;
  const resumePath = req.file.path;

  try {
    const result = await runPythonScript(resumePath, jd);
    res.json(JSON.parse(result));
  } catch (err) {
    res.status(500).json({ error: 'Processing failed', details: err.message });
  }
});


module.exports = router;
