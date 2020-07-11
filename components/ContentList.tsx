import * as React from 'react'
import { User } from '../interfaces'
import Card from './Card'

type Props = {
  items: User[]
}

const ContentList = ({ items }: Props) => (
  <div className="flex flex-row flex-wrap mb-4 overflow-auto">
    {items.map((item) => (
      <Card key={item.id} data={item} />
    ))}
  </div>
)

export default ContentList
