import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles'

const Header = () => {
	const { logo } = useStaticQuery(
		graphql`
            query {
                logo: file(relativePath: { eq: "logo2.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 140) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
	)

	return (
		<S.Header>
			<S.Logo fluid={logo.childImageSharp.fluid}/>
		</S.Header>
	)
}

export default Header
