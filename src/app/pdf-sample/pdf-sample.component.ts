import { Component, OnInit } from '@angular/core';
import { StaticUtilities } from 'src/shared/static-utilities';
declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');

@Component({
  selector: 'app-pdf-sample',
  templateUrl: './pdf-sample.component.html',
  styleUrls: ['./pdf-sample.component.scss']
})
export class PdfSampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onExportPdf() {
    console.log('pdf');
    const doc = new jsPDF();

    const pageHeight = doc.internal.pageSize.height;
    const pageWidth = doc.internal.pageSize.width;

    doc.setFontSize(14);
    doc.text(
      'NEVADA STATE CONTRACTORS BOARD',
      StaticUtilities.pdfTextCenter(
        doc,
        'NEVADA STATE CONTRACTORS BOARD',
        14
      ),
      15
    );

    doc.save('test.pdf');
  }



}
