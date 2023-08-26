import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
	<div>page

			<Link href={"/scroll#settings"}>scroll settings</Link>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nam earum id beatae vero quam pariatur. Deserunt, repellendus unde consequuntur sint et ab aliquid aperiam suscipit nam modi similique nemo fugit, facilis eum magnam odio iusto voluptas dolorem. Numquam!
	</div>
  )
}

export default page
