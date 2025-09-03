from pydantic import BaseModel
from typing import List
import os
import dotenv
from openai import OpenAI
from fastapi import APIRouter, HTTPException
import json

dotenv.load_dotenv()

client = OpenAI(
    api_key=os.getenv("GOOGLE_API_KEY"),
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

SYSTEM_PROMPT = """You are an expert career advisor and resume evaluator. 
You will receive two inputs:
1. Candidate Resume
2. Job Description

Your task is to:
- Evaluate how well the resume matches the job description.
- Identify candidate's key strengths and weaknesses.
- Provide a final recommendation on whether the candidate should apply.

### Output Format:
Return only valid JSON with the following structure:

{
  "resume_score": "<integer 0-100 based on how well resume matches JD>",
  "matching_skills" : [
    "<skill_1>",
    "<skill_2>",
    "<skill_3>"
    ......
  ],
  "not_matching_skills" : [
    "<skill_1>",
    "<skill_2>"
    ......
  ],
  "strengths": [
    "<strength_1>",
    "<strength_2>",
    "<strength_3>"
    ......
  ],
  "weaknesses": [
    "<weakness_1>",
    "<weakness_2>"
    ......
  ],
  "recommendation": {
    "should_apply": "<Yes/No/Maybe Not Sure/Definitely>",
    "reason": "<short explanation why>"
  }
}

- Resume score must be an integer between 0 and 100.
- Strengths and weaknesses should be specific, not generic.
- Recommendation must be consistent with resume_score (e.g., if score < 40, usually No).
- Do not include any text outside of the JSON object.
- Keep responses concise, professional, and accurate.
- Instead of being ai generated response like "as an ai language model", be more human like.
- Make respose which puts more focus on "you" human are talking
"""

class ResumeRequest(BaseModel):
    resume_text: str

class Recommendation(BaseModel):
    should_apply: str
    reason: str

class AIResponse(BaseModel):
    resume_score: int
    matching_skills: List[str]
    not_matching_skills: List[str]
    strengths: List[str]
    weaknesses: List[str]
    recommendation: Recommendation
router = APIRouter()

@router.get("/hellp")
async def root():
    return {"message": "Hello World"}

@router.post("/resume/get-score")
async def get_score(request: ResumeRequest, job_description: str = ""):
    try:
        resume_text = request.resume_text

        response = client.chat.completions.parse(
            model="gemini-2.5-pro",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": f"""Resume:\n{resume_text}\nJob Description:\n
{job_description}"""}
            ],
            response_format=AIResponse
        )

        result = response.choices[0].message.content
        response = json.loads(result)
        return response

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))