//@ts-nocheck
import App from 'next/app'
import React from 'react'
import { GraphQLProvider } from "graphql-react";
import { withGraphQLApp } from "next-graphql-react";
import { ThemeProvider } from 'styled-components'

const theme = {
  light: {
    primary: "#f6f8fa",
    primaryLight: "#ffffff",
    primaryDark: "#cccccc",

    secondary: "#586069",
    secondaryLight: "#e3ebf6",
    secondaryDark: "#011120",

    onPrimary: "#000",
    onPrimaryLight: "#A1A1A1",
    onSecondary: "#fff",

    highlight: "#FA4141"
  },
  dark: {
    primary: "grey",
    secondary: "black"
  }
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <GraphQLProvider graphql={this.props.graphql}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </GraphQLProvider>
    )
  }
}

export default withGraphQLApp(MyApp);