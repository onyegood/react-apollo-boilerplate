import jsPDF from 'jspdf';
var doc = new jsPDF();

export const HtmlToPDF = (html, month) => {
    doc.fromHTML(html, 30, 10);
    doc.save(`${month}-payslip.pdf`);
}