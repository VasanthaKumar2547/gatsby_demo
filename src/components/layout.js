import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// Styled Components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

//Components
import Header from "./Header"

const GlobalStyle = createGlobalStyle`
${normalize}
   *{
     text-decoration:none;
     /* cursor:none; */
   }
  html {
    box-sizing:border-box;
    --webkit-font-smoothing:antialised;
    font-size:16px;
  }
  body {
    font-family:'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${props => props.theme.background};
    overscroll-behavior:none;
    overflow-x:none;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const darkTheme = {
    background: "#000",
    color: "#fff",
    red: "#ea291e",
  }
  const lightTheme = {
    background: "#fff",
    color: "#000",
    red: "#ea291e",
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
