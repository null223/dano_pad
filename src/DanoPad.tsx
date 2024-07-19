import { Dashboard } from './app/dashboard'

interface DanoPadProps {
  path?: string
  databaseId: string
}

function DanoPad({
  path = window.location.pathname,
  // databaseId
}: DanoPadProps) {

  return (
    <Dashboard path={path}>
      <>hgoe</>
    </Dashboard>
  )
}

export default DanoPad
