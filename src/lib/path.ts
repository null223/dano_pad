import { useMemo } from "react"

export function usePath(pathname: string) {
  const shortPath = useMemo(() => {
    const paths = pathname.split("/").filter(Boolean)
    if (paths.length < 2) {
      return pathname
    }
    // 後ろから2つを取得
    return "../" + paths.slice(-2).join("/")
  }, [pathname])
  return {
    path: pathname,
    shortPath,
  }
}