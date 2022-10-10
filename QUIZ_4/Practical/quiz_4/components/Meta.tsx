import Head from 'next/head'

interface Props {
	title: string,
	keywords: string,
	description: string
}

const Meta = (props: Props) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={props.keywords} />
      <meta name='description' content={props.description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{props.title}</title>
    </Head>
  )
}


Meta.defaultProps = {
  title: 'Yugioh',
  keywords: 'web development, programming',
  description: 'Yugioh Playing Cards',
}

export default Meta