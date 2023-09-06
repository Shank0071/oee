"use client";

import React from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Daily from '../reports/daily/page';

const PDF = () => {
  return (
    <div>
      <h1>PDF Download</h1>
      <PDFDownloadLink document={<Daily />} fileName="download.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
      <PDFViewer>
        <Daily />
      </PDFViewer>
    </div>
  );
};

export default PDF;
