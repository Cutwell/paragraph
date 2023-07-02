import * as React from "react"
import loadable from '@loadable/component'

const LoadableSimpleMdeReactComponent = loadable(() => import('../SimpleMdeReactComponent'))

const IndexPage = () => {
	return (
		<div>
			<LoadableSimpleMdeReactComponent />
		</div>
	)
}

export default IndexPage
export const Head = () => { return (<title>Paragraph</title>) }
