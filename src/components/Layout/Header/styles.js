import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image' 

export const Header = styled.header`
    align-items: center;
    display: flex;
    grid-area: header;
    justify-content: space-between;
    padding: 0 6em;

    ${media.lessThan("medium")`
        justify-content: center;
        padding: 0;
    `}
`

export const Logo = styled(Img)`
    width: 120px;
`
