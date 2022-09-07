import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { PDF } from './PDF';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
});
  
export const PDFGenerar = () => {
    return (
        <>
            <PDFViewer>
                <PDF />
            </PDFViewer>
            <br/><br/>
            <PDFDownloadLink document={<PDF />} fileName="reporte.pdf">
                <button>Descargar</button>
            </PDFDownloadLink> 
        </>
    )
}