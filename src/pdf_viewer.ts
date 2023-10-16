/*import { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf';

const pdfPath = './static/MarcoAParraEnglish_version.pdf'; // Replace with the path to your PDF file

async function readPdfFile(pdfPath: string) {
  try {
    const loadingTask = pdfjsLib.getDocument(pdfPath); // Use pdfjsLib here
    const pdf: PDFDocumentProxy = await loadingTask.promise;

    const numPages = pdf.numPages;
    console.log(`Total number of pages: ${numPages}`);

    for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
      const page: PDFPageProxy = await pdf.getPage(pageNumber);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((s) => s.str).join('\n');

      console.log(`Page ${pageNumber}:\n${pageText}`);
    }
  } catch (error) {
    console.error('Error reading PDF file:', error);
  }
}

readPdfFile(pdfPath);
*/

