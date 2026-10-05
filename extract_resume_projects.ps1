$ErrorActionPreference = 'Stop'
$path = 'C:\Users\HP\Downloads\Gauravbits.in-main\Gauravbits.in-main\public\Resume.pdf'
if (-not (Test-Path $path)) {
    throw "Resume PDF not found: $path"
}

py -3 -m pip install pypdf -q
py -3 -c @'
from pypdf import PdfReader
path = "C:\\Users\\HP\\Downloads\\Gauravbits.in-main\\Gauravbits.in-main\\public\\Resume.pdf"
reader = PdfReader(path)
text = "\n".join(page.extract_text() or "" for page in reader.pages)
print(text[:20000])
'@
