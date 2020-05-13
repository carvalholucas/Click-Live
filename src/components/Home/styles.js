import styled from 'styled-components'
import media from 'styled-media-query'

export const Section = styled.section`
    grid-area: main;
    padding: 4em 0;
    overflow: hidden;
`

export const Title = styled.h2`
    color: #ffffff;
    font-size: 20px;
    margin: 50px 0;
    text-transform: capitalize;

    &:first-child {
        margin-top: 0;
    }
`

export const Link = styled.a`
    text-decoration: none;
`

export const CardsWrapper = styled.section`
    display: grid;
    grid-gap: 1.2em;
    grid-template-columns: repeat(6, 1fr);

    ${media.lessThan("medium")`
       grid-template-columns: 1fr;
    `}
`

export const Card = styled.article`
    background: #fff;
    background-image: linear-gradient(to top, rgba(0,0,0,1) 10%, transparent 100%), ${props => `url(${props.image})`};
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: space-between;
    padding: 1.5em;
    position: relative;
    transition: all .3s;

    &:hover {
        transform: scale(1.1)
    }

    &:hover .overlay {
        background: rgba(0, 0, 0, 0.6);
        opacity: 1;
    }
`

export const CardOverlay = styled.div`
    align-items: center;
    color: #fff;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    opacity: 0;
    position: absolute;
    transition: background-color .4s;
    top: 0;
    width: 100%;
`

export const CardHeader = styled.header`
    display: flex;
    justify-content: flex-end;

    span {
        background: red;
        color: #fff;
        font-size: .8em;
        padding: .4em;
    }
`

export const CardFooter = styled.footer`
    color: #fff;
`