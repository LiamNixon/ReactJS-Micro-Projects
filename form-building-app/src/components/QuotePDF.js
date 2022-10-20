// import dependencies
import React, { useState } from 'react';
import {Document, Page, Text, View, StyleSheet, PDFViewer} from '@react-pdf/renderer';

// Styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        color: '#000000'
    },
    section: {
        margin: 10,
        padding: 10
    },
    viewer: {
        width: window.innerWidth,
        height: window.innerHeight
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '5%',
    },
    clientDetails: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    quoteDetailSection: {
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end'
    },
    quoteDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    }

});

const QuotePDF = (props) => {

    const [logo] = useState(props.logo);
    const [abn] = useState(props.abn);
    const [quoteNo] = useState(props.quoteNo);
    const [issueDate] = useState(props.issueDate);
    const [validTil] = useState(props.validTil);
    const [ownerEmail] = useState(props.ownerEmail);
    const [ownerName] = useState(props.ownerName);
    const [ownerAddress] = useState(props.ownerAddress);
    const [ownerCity] = useState(props.ownerCity);
    const [ownerPostcode] = useState(props.ownerPostcode);
    const [ownerCountry] = useState(props.ownerCountry);
    const [clientEmail] = useState(props.clientEmail);
    const [clientFirstName] = useState(props.clientFirstName);
    const [clientSurname] = useState(props.clientSurname);
    const [clientAddress] = useState(props.clientAddress);
    const [clientCity] = useState(props.clientCity);
    const [clientState] = useState(props.clientState);
    const [clientPostcode] = useState(props.clientPostcode);
    const [clientCountry] = useState(props.clientCountry);
    const [quoteList] = useState(props.quoteList);
    const [subtotalCost] = useState(props.subtotalCost);
    const [gstCost] = useState(props.gstCost);
    const [totalCost] = useState(props.totalCost);

    return (
        <PDFViewer
        style={styles.viewer}>
            <Document>
                <Page
                size="A4"
                style={styles.page}>
                    <View
                    style={styles.header}>
                        <View
                        style={styles.clientDetails}>
                            <Text
                            className="
                            text-xl font-bold">
                                TO
                            </Text>
                            <Text>
                                {clientFirstName + ' ' + clientSurname}
                            </Text>
                            <Text>
                                {clientAddress}
                            </Text>
                            <Text>
                                {clientCity + ' ' + clientState + ' ' + clientPostcode}
                            </Text>
                            <Text>
                                {clientCountry}
                            </Text>
                        </View>
                        <View
                        style={styles.quoteDetailSection}>
                            <View>
                                <Text>
                                    &nbsp;
                                </Text>
                                <Text>
                                    Quote no.:
                                </Text>
                                <Text>
                                    Issue date:
                                </Text>
                                <Text>
                                    Valid until:
                                </Text>
                            </View>
                            <View>
                                <Text>
                                    {quoteNo}
                                </Text>
                                <Text>
                                    {issueDate}
                                </Text>
                                <Text>
                                    {validTil}
                                </Text>
                            </View>
                        </View>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
};

export default QuotePDF;