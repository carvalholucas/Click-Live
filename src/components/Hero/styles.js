import styled from 'styled-components'
import media from 'styled-media-query'
import BackgroundImage from 'gatsby-background-image'

export const HeroWrapper = styled(BackgroundImage)`
    color: #fff;
    display: flex;
    grid-area: hero;
    height: 70vh;
    justify-content: center;
    padding: 2em;
    position: relative;
    z-index: 0;

    ${media.lessThan("medium")`
        height: calc(100vh - 4em);
    `}
`

export const HeroCopy = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 60%;
    z-index: 2;

    ${media.lessThan("medium")`
        align-items: flex-start;
        width: 100%;
    `}
`

export const HeroDesc = styled.article`
    text-align: center;

    h1 {
        font-size: 3.5em;
        font-weight: 700;
        line-height: 1.2em;
        margin-bottom: .5em;

        ${media.lessThan("medium")`
            font-size: 2.5em;
            margin-bottom: 1em;
        `}
    }

    p {
        font-weight: 300;
        line-height: 1.5em;
        margin-bottom: 4em;
    }

    ${media.lessThan("medium")`
        text-align: left;
    `}
`

export const Overlay = styled.div`
    background: rgba(20, 20, 20, 0.8);
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
`

export const Button = styled.button`
    background: #e63631;
    border: none;
    color: #fff;
    font-size: 1em;
    padding: 1em 2em;
`