import { GoLinkExternal as ExternalIcon } from 'react-icons/go'

interface ExternalLinkProps {
  message: string
  url: string
}

const ExternalLink = ({message, url}: ExternalLinkProps) => {
  return (
    <button className='text-orange-700 hover:translate-x-2 transition-all'>
      <a href={url} target='_blank' rel="noreferrer" className='flex items-center'>
        {message} <ExternalIcon className='ml-1'/>
      </a>
    </button>
  )
}

export default ExternalLink