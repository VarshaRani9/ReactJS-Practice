import useIsOnline from '../hooks/useIsOnline'

function CustomHooks2 (){
    const isOnline = useIsOnline()
    if(isOnline){
        return "You are online yay!!"
    }
  return "You are offline..."
}
export default CustomHooks2
