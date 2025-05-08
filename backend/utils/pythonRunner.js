const { spawn } = require('child_process');

function runPythonScript(resumePath, jdText) {
  return new Promise((resolve, reject) => {
    const py = spawn('python3', ['resume-analysis.py', resumePath, jdText]);

    let output = '';
    let error = '';

    py.stdout.on('data', data => output += data.toString());
    py.stderr.on('data', data => error += data.toString());

    py.on('close', code => {
      if (code !== 0) return reject(new Error(error));
      resolve(output);
    });
  });
}

module.exports = { runPythonScript };
