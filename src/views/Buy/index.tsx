import { Flex } from '@pancakeswap/uikit'
import dynamic from 'next/dynamic'
import { PageMeta } from 'components/Layout/Page'
import styled from 'styled-components'
import Hero from './components/Hero'

const Proposals = dynamic(() => import('./components/Proposals/Proposals'), { ssr: false })

const Chrome = styled.div`
  flex: none;
`

const Content = styled.div`
  flex: 1;
  height: 100%;
`

const Voting = () => {
  return (
    <>
      <PageMeta />
      <Flex flexDirection="column" minHeight="calc(100vh - 64px)">
        <Chrome>
          <Hero />
        </Chrome>
        <Content>
          <Proposals />
        </Content>
      </Flex>
    </>
  )
}

export default Voting
