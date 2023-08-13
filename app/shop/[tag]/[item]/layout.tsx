import React from 'react';
export default function ShopLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: {
    tag: string
    item: string
  }
}) {
	return <section>
		in layout {params.item}
		{params.tag} layout 
		{children}</section>
}
