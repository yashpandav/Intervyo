from langchain_community.document_loaders import PyPDFLoader

file_path = "../Resume.pdf"
loader = PyPDFLoader(file_path)

docs = loader.load()
print(docs[0])