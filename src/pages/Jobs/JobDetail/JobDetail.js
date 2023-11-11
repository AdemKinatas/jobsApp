import React from 'react';
import { View } from 'react-native'
import { WebView } from 'react-native-webview';
import styles from './JobDetail.styles';
import DetailInformationCard from '../../../components/Cards/DetailInformationCard';
import DetailBottomCard from '../../../components/Cards/DetailBottomCard';

const JobDetail = ({ route }) => {
  const { job } = route.params;
  const styledHtmlContent = `
    <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            color: #333;
            font-size: 2.2em;
            padding: 0.5em;
          }
        </style>
      </head>
      <body>
        ${job.contents}
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <DetailInformationCard job={job} />
      <WebView
        source={{ html: styledHtmlContent }}
      />
      <DetailBottomCard /> 
    </View>
  );
}

export default JobDetail;