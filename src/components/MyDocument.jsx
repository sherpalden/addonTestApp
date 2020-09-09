import React from 'react';
import {Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import styled from '@react-pdf/styled-components';

const Body = styled.Page`
  padding-top: 35px;
  padding-bottom: 65px;
  padding-right: 35px;
  padding-left: 35px;
`;

const Title = styled.Text`
  font-size: 24px;
  text-align: center;
`;

// Create styles
const styles = StyleSheet.create({
  thead: {
    padding: 10,
    borderBottom: 1.5,
    marginBottom: 3
  },
  tColumns: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  tRows: {
    border: 1.5,
    display: 'flex',
    flexDirection: 'column',
  },
  tdata: {
    padding: 5,
    paddingLeft: 7,
  }
});



// Create Document Component
const MyDocument = (props) => (
  <>
  <Document>
    <Body wrap>
      <Title>Employee Records of ABC Company</Title>
      <View style={styles.tColumns}>
          <View style={styles.tRows}>
            <Text style={styles.thead}>S.N</Text>
            {props.data.map((employee, index) => {
             return(
                <Text style={styles.tdata}>{index+1}</Text>
              );
            })}
          </View>
          <View style={[styles.tRows, {borderLeft: 0}]}>
            <Text style={styles.thead}>Name</Text>
            {props.data.map((employee) => {
             return(
                <Text style={styles.tdata}>{employee.name}</Text>
              );
            })}
          </View>
          <View style={[styles.tRows, {borderLeft: 0}]}>
            <Text style={styles.thead}>Email</Text>
            {props.data.map((employee) => {
             return(
                <Text style={styles.tdata}>{employee.email}</Text>
              );
            })}
          </View>
          <View style={[styles.tRows, {borderLeft: 0}]}>
            <Text style={styles.thead}>Phone</Text>
            {props.data.map((employee) => {
             return(
                <Text style={styles.tdata}>{employee.phone}</Text>
              );
            })}
          </View>
      </View>
    </Body>
  </Document>
  </>
);
export default MyDocument;
