import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  if(session){
    return (
      <div className={styles.container}>
        <h1>Signed in as {session.user.email}</h1>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h1>Not Signed In</h1>
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  )
}
