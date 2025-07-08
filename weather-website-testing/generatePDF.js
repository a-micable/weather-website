async function generatePDF(page, pdfPath) {
    try {
        console.log('Generating PDF report...');
        await page.pdf({ path: pdfPath, format: 'A4' });
        console.log(`PDF report saved as ${pdfPath}`);
    } catch (error) {
        console.error('Error generating PDF report:', error);
        throw error;
    }
}

module.exports = generatePDF;
