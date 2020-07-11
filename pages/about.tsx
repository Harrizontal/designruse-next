import { GetStaticProps } from 'next'
import Link from 'next/link'

import { User } from '../interfaces'
import { sampleUserData } from '../utils/sample-data'
import Layout from '../components/Layout'
import ContentList from '../components/ContentList'

type Props = {
  items: User[]
}


const AboutPage = ({ items }: Props) => (
  <Layout title="About | Next.js + TypeScript Example">
    <ContentList items={items}/>
  </Layout>
)

export default AboutPage

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData
  return { props: { items } }
}
