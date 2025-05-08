import sys
import json
import torch
from PyPDF2 import PdfReader
from sentence_transformers import SentenceTransformer, util


resume_path = sys.argv[1]
job_desc = sys.argv[2]


def extract_text(path):
    reader = PdfReader(path)
    return " ".join(page.extract_text() for page in reader.pages if page.extract_text())

resume_text = extract_text(resume_path)

device = "cuda" if torch.cuda.is_available() else "cpu"
model = SentenceTransformer('paraphrase-MiniLM-L3-v2', device=device)

resume_emb = model.encode(resume_text, convert_to_tensor=True)
job_emb = model.encode(job_desc, convert_to_tensor=True)

score = util.cos_sim(resume_emb, job_emb).item()

output = {
    "match_score": round(score * 100, 2),
    "feedback": "Resume matches the job description well." if score > 0.7 else "Consider adding more relevant skills."
}

print(json.dumps(output))
