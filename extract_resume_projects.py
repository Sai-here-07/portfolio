from pypdf import PdfReader
from pathlib import Path

pdf_path = Path(r"C:\Users\HP\Downloads\Gauravbits.in-main\Gauravbits.in-main\public\Resume.pdf")
print("PDF_EXISTS", pdf_path.exists())
reader = PdfReader(str(pdf_path))
text = "\n".join(page.extract_text() or "" for page in reader.pages)
print(text[:20000])
