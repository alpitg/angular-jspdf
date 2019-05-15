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
//     const img = new Image();

    const pageHeight = doc.internal.pageSize.height;
    const pageWidth = doc.internal.pageSize.width;

//     const thisConst = this;
    
//     img.onload = function() {
//       doc.addImage(this, 10, 10, 25, 25);
      
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
    
    //--------------- Use below code to upload on server ---------------//
      // NOTE: BLOB to File conversion is must & filename.extension is compulsory
      // const file = new File([doc.output('blob')], 'filename.pdf', {type: 'application/pdf', lastModified: Date.now()});
      // console.log(file);

      // const formData = new FormData(); // To carry on your data
      // formData.append('file', file);
      // formData.append('data', JSON.stringify(thisConst.signature));
      // thisConst.uploadDocument(formData); // Upload
    
    
//     };
//     img.crossOrigin = '';
//     img.src = '../../assets/images/nevida_state_pdf_logo.PNG';

  }



}
