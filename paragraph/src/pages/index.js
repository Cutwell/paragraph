import * as React from "react"
import loadable from '@loadable/component'

const LoadableSimpleMdeReactComponent = loadable(() => import('../components/SimpleMdeReactComponent'))

const IndexPage = () => {
	return (
		<div>
			<LoadableSimpleMdeReactComponent />
		</div>
	)
}

export default IndexPage
export const Head = () => { return (<title>Paragraph</title>) }
