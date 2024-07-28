import { useLocation, useNavigate } from 'react-router-dom'

export const useForceNavigate = () => {
  const locationRouter = useLocation()
  const navigateRouter = useNavigate()

  const navigate = (route: string) => {
    if (locationRouter.pathname !== route) {
      navigateRouter(route)
    } else {
      navigateRouter(0) // https://stackoverflow.com/a/71336494/2077741
    }
  }

  return navigate
}
