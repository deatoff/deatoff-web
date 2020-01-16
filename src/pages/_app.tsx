//@ts-nocheck
import App from "next/app"
import React from "react"
import { GraphQLProvider } from "graphql-react";
import { withGraphQLApp } from "next-graphql-react";
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { globalStyles, themeColors } from "../components/src/styleSheet"

const GlobalStyle = createGlobalStyle`${globalStyles}`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <GraphQLProvider graphql={this.props.graphql}>
        <ThemeProvider theme={themeColors}>
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </GraphQLProvider>
    )
  }
}

export default withGraphQLApp(MyApp);