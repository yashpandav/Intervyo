from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from langchain_community.document_loaders import PyPDFLoader
import os
from Resume import get_score
from langchain_community.document_loaders import Docx2txtLoader

app = FastAPI()

app.include_router(get_score.router)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/analyze-resume")
async def upload_resume(file: UploadFile = File(...), job_description: str = ""):
    temp_file_path = f"temp_{file.filename}"
    try:
        print("File Uploaded")
        with open(temp_file_path, "wb") as temp_file:
            temp_file.write(await file.read())

        if file.filename.endswith(".pdf"):
            loader = PyPDFLoader(temp_file_path)
        elif file.filename.endswith(".docx"):
            loader = Docx2txtLoader(temp_file_path)
        else:             
            return JSONResponse(content={"error": "Unsupported file type"}, status_code=400)

        docs = loader.load()

        resume_text = docs[0].page_content

        score_data = await get_score.get_score(get_score.ResumeRequest(resume_text=resume_text), job_description=job_description)
        return {
            "message": "Resume processed successfully",
            "score_data": score_data
        }
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
    finally:
        if os.path.exists(temp_file_path):
            os.remove(temp_file_path)