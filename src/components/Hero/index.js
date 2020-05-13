import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'

import * as S from './styles'

const Hero = () => (
	<StaticQuery
		query={graphql`
            query {
                image: file(relativePath: { eq: "bg2.jpg" }) {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 1920) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            `}
		render={data => {
			const bg = data.image.childImageSharp.fluid

			return (
				<S.HeroWrapper
					Tag="section"
					fluid={bg}
					backgroundColor={`#141414`}>
					<S.Overlay />
					<S.HeroCopy>
						<S.HeroDesc>
							<h1>Encontre todas as lives em um só lugar</h1>
							<p>Descubra as melhores lives, programa-se e não perca nenhuma</p>
						</S.HeroDesc>
						<S.Button>Cadastrar uma live</S.Button>
					</S.HeroCopy>
				</S.HeroWrapper>
			)
		}}
	/>
)

export default Hero