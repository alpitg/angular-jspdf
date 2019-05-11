import * as jsPDF from 'jspdf';

export class StaticUtilities {
    static pdfTextCenter(doc: jsPDF, text: string, fontsize: number) {
        const pageWidth = doc.internal.pageSize.width;
        const txtWidth =
            (doc.getStringUnitWidth(text) * fontsize) / doc.internal.scaleFactor;
        return (pageWidth - txtWidth) / 2;
    }
    static pdfTextRight(doc: jsPDF, text: string, fontsize: number) {
        const pageWidth = doc.internal.pageSize.width;
        const txtWidth =
            (doc.getStringUnitWidth(text) * fontsize) / doc.internal.scaleFactor;
        return pageWidth - txtWidth - 10;
    }

}