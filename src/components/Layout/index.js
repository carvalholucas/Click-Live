import React from "react"

import Header from "./Header"

import * as S from "./styles"
import GlobalStyles from "../styles/global"

const Layout = ({ children }) => {
	return (
		<>
			<GlobalStyles />
			<S.Wrapper>
				<Header />
				{children}
			</S.Wrapper>
		</>
	)
}

export default Layout
