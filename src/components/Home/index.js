import React, { useEffect, useState } from 'react'
import * as moment from 'moment'
import axios from 'axios'

import { PlayCircleOutline } from 'styled-icons/material-outlined'
import * as S from './styles'
import Hero from '../Hero'

import 'moment/locale/pt-br'

const Home = () => {
    const [lives, setLives] = useState([])
    const [dates, setDates] = useState([])

    useEffect(() => {
        getLives()
    }, [])

    async function getLives() {
        const res = await axios.get(`https://projectxteam.com.br/teste/livesdehoje.php`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })

        if (res) {
            setLives(res.data)

            const allDates = []

            res.data.map(data => allDates.push(moment(data.date).format('dddd, D/M')))

            setDates([...new Set(allDates)])
        }
    }

    return (
        <>
            <Hero />
            <S.Section>
                {dates.map((date, index) => (
                    <>
                        <S.Title key={index}>{date}</S.Title>

                        <S.CardsWrapper>
                            {lives.map((live, index) => {
                                const liveDate = moment(live.date).format("D/M")

                                if (liveDate == date.split(",")[1].trim()) {
                                    return (
                                        <S.Link href={live.url} key={index}>
                                            <S.Card image={live.photo}>
                                                <S.CardOverlay className="overlay">
                                                    <PlayCircleOutline size={48} />
                                                </S.CardOverlay>
                                                <S.CardHeader>
                                                    <span>{moment(live.date).format("HH:mm")}</span>
                                                </S.CardHeader>
                                                <S.CardFooter>{live.title}</S.CardFooter>
                                            </S.Card>
                                        </S.Link>
                                    )
                                }
                            })}
                        </S.CardsWrapper>
                    </>
                ))}
            </S.Section>
        </>
    )
}

export default Home